/** In-memory limiter: resets on cold starts and is per server instance. For strict global limits on Vercel, use Redis (e.g. Upstash) instead. */
const WINDOW_MS = 15 * 60 * 1000;
const MAX_PER_WINDOW = 8;

type Bucket = { count: number; resetAt: number };

const store = new Map<string, Bucket>();

function prune(now: number) {
  if (store.size < 2000) return;
  for (const [key, bucket] of store) {
    if (now > bucket.resetAt) store.delete(key);
  }
}

export function takeContactRateLimit(
  ip: string
): { ok: true } | { ok: false; retryAfterSec: number } {
  const now = Date.now();
  prune(now);
  let bucket = store.get(ip);
  if (!bucket || now > bucket.resetAt) {
    bucket = { count: 0, resetAt: now + WINDOW_MS };
    store.set(ip, bucket);
  }
  if (bucket.count >= MAX_PER_WINDOW) {
    return {
      ok: false,
      retryAfterSec: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }
  bucket.count += 1;
  return { ok: true };
}

export function getClientIp(headers: Headers): string {
  const xff = headers.get('x-forwarded-for');
  if (xff) {
    const first = xff.split(',')[0]?.trim();
    if (first) return first;
  }
  const realIp = headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;
  return 'unknown';
}
