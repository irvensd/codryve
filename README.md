# Codryve

Marketing site for [Codryve](https://codryve.com): Next.js (App Router), Tailwind CSS, contact and project-inquiry forms backed by a server route that sends mail over SMTP.

## Requirements

- Node.js 20+ (matches `package.json` types)
- npm (or another client compatible with the lockfile)

## Setup

```bash
npm install
```

## Environment variables

Contact and “Get started” submissions hit `POST /api/contact`, which uses **Nodemailer** and needs SMTP settings. Create a local file **`.env.local`** (gitignored) in the project root:

| Variable | Description |
| -------- | ----------- |
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_PORT` | Port (the app uses `secure: true`, typical for **465**) |
| `SMTP_USER` | SMTP username |
| `SMTP_PASSWORD` | SMTP password or app-specific password |
| `SMTP_FROM_EMAIL` | Address used in the `From` header (should align with your domain’s SPF/DKIM when possible) |

Example (do not commit real secrets):

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=you@example.com
SMTP_PASSWORD=your-secret
SMTP_FROM_EMAIL=hello@codryve.com
```

If these are missing, the contact API responds with **503** and logs a configuration error.

## Scripts

```bash
npm run dev          # Dev server (http://localhost:3000)
npm run build        # Production build
npm run start        # Run production build locally
npm run lint         # ESLint (Next.js config)
npm run favicon      # Regenerate favicons via scripts/generate-favicons.js
```

## Deploying

1. Connect the repo to your host (e.g. [Vercel](https://vercel.com/docs)) and set the **same SMTP variables** in the project’s environment settings for Production (and Preview if you want forms to work on preview URLs).
2. Run **`npm run build`** in CI or rely on the platform’s default Next.js build.
3. After go-live, confirm mail passes SPF/DKIM for your sending domain so inquiries do not land in spam.

**Note:** The API uses an in-memory rate limiter (per server instance). Under heavy traffic or many serverless instances, consider a shared store (e.g. Redis) if you need one global limit per IP.

## Project layout

- `src/app` — routes, layouts, `api/contact`
- `src/components` — UI (landing sections, forms, layout shell)
- `public` — static assets, `robots.txt`, `sitemap.xml`

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
