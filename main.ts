import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Locate the original artwork in the repository's working directory.
const artworkPath = resolve('koi-sky.jpg');

// Use the runner's destination, or its conventional default.
const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const entryPath = resolve(outputDirectory, 'entry.png');

// Allow a new output directory as well as an existing one.
mkdirSync(outputDirectory, { recursive: true });

// The required .png name holds the unchanged JPEG; no encoding is performed.
copyFileSync(artworkPath, entryPath);
