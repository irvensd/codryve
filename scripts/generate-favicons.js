/**
 * Generate favicon assets from the transparent Workloom mark.
 * Scales the wide W with fit:contain so it fills the tab icon cleanly.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const pngToIcoMod = require("png-to-ico");
const pngToIco = pngToIcoMod.default || pngToIcoMod.imagesToIco;
const root = path.join(__dirname, "..");
const sourcePngPath = path.join(root, "public/images/workloom-logo.png");

const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

const pngOutputs = [
  ["public/favicon-16x16.png", 16],
  ["public/favicon-32x32.png", 32],
  ["public/favicon-48x48.png", 48],
  ["public/apple-touch-icon.png", 180],
  ["public/android-chrome-192x192.png", 192],
  ["src/app/icon.png", 256],
  ["src/app/apple-icon.png", 180],
];

async function rasterize(trimmedBuffer, size) {
  const supersample = size <= 16 ? 20 : size <= 32 ? 16 : size <= 48 ? 12 : 4;
  const hi = size * supersample;

  return sharp(trimmedBuffer)
    .resize(hi, hi, {
      fit: "contain",
      position: "centre",
      background: transparent,
      kernel: sharp.kernel.lanczos3,
    })
    .sharpen(size <= 32 ? 0.8 : 0.4)
    .resize(size, size, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer();
}

async function main() {
  const trimmed = await sharp(sourcePngPath)
    .ensureAlpha()
    .trim({ threshold: 12 })
    .png()
    .toBuffer();

  for (const [rel, size] of pngOutputs) {
    const dest = path.join(root, rel);
    const buffer = await rasterize(trimmed, size);
    await fs.promises.writeFile(dest, buffer);
    const meta = await sharp(buffer).metadata();
    console.log("wrote", rel, `${meta.width}x${meta.height}`);
  }

  await sharp(path.join(root, "public/favicon-32x32.png")).toFile(path.join(root, "public/images/favicon.png"));

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
