/**
 * Generate favicon assets from public/images/favicon.png.
 * Strategy:
 * - trim dead space from the source artboard
 * - center-crop to square when source is wide/tall
 * - render mark at ~88% of icon canvas for tab readability
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const pngToIcoMod = require("png-to-ico");
const pngToIco = pngToIcoMod.default || pngToIcoMod.imagesToIco;
const root = path.join(__dirname, "..");
const sourcePngPath = path.join(root, "public/images/favicon.png");

const pngOutputs = [
  ["public/favicon-16x16.png", 16],
  ["public/favicon-32x32.png", 32],
  ["public/favicon-48x48.png", 48],
  ["public/apple-touch-icon.png", 180],
  ["public/android-chrome-192x192.png", 192],
  ["src/app/icon.png", 256],
  ["src/app/apple-icon.png", 180],
];

async function rasterize(baseSquareBuffer, size) {
  const scale = size <= 48 ? 8 : size <= 180 ? 4 : 2;
  const hi = size * scale;
  const markSize = Math.max(1, Math.round(hi * 0.88));
  const markOffset = Math.floor((hi - markSize) / 2);

  const mark = await sharp(baseSquareBuffer)
    .resize(markSize, markSize, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();

  const padBottom = hi - markSize - markOffset;
  const padRight = hi - markSize - markOffset;

  return sharp(mark)
    .extend({
      top: markOffset,
      bottom: padBottom,
      left: markOffset,
      right: padRight,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .sharpen(0.4)
    .resize(size, size, { fit: "fill", kernel: sharp.kernel.cubic })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

async function main() {
  // 1) Trim border based on top-left color (usually black/transparent background)
  const trimmed = await sharp(sourcePngPath)
    .ensureAlpha()
    .trim({ threshold: 12 })
    .png()
    .toBuffer();

  // 2) If non-square, center-crop to square so logo fills favicon better
  const meta = await sharp(trimmed).metadata();
  const width = meta.width ?? 1;
  const height = meta.height ?? 1;
  const side = Math.min(width, height);
  const left = Math.floor((width - side) / 2);
  const top = Math.floor((height - side) / 2);
  const baseSquare = await sharp(trimmed)
    .extract({ left, top, width: side, height: side })
    .png()
    .toBuffer();

  for (const [rel, size] of pngOutputs) {
    const dest = path.join(root, rel);
    const buffer = await rasterize(baseSquare, size);
    await fs.promises.writeFile(dest, buffer);
    console.log("wrote", rel, size);
  }

  const ico = await pngToIco([
    path.join(root, "public/favicon-16x16.png"),
    path.join(root, "public/favicon-32x32.png"),
    path.join(root, "public/favicon-48x48.png"),
  ]);
  await fs.promises.writeFile(path.join(root, "src/app/favicon.ico"), ico);
  console.log("wrote src/app/favicon.ico");

}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
