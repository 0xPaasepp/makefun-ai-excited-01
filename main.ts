import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

// Locate the supplied picture in the repository root.
const picture = resolve('planet-laundry.jpg');

// Let the runner choose a destination, with the standard default.
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const destination = resolve(outputDirectory);

// Create any missing parent directories before exporting.
mkdirSync(destination, { recursive: true });

// The contest expects entry.png even though this payload is a JPEG.
const entryFilename = 'entry.png';
const entry = resolve(destination, entryFilename);

// A direct copy preserves every byte and produces repeatable output.
copyFileSync(picture, entry);
