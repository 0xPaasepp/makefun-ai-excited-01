import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Locate the supplied artwork in the repository root.
const artworkPath = resolve('koi-sky.jpg');

// Respect the runner's destination, with its standard fallback.
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destinationDirectory = resolve(outputDirectory);

// Create the destination before delivering the image.
mkdirSync(destinationDirectory, { recursive: true });

// Preserve the complete JPEG bytes under the required output name.
const entryPath = resolve(destinationDirectory, 'entry.png');
copyFileSync(artworkPath, entryPath);
