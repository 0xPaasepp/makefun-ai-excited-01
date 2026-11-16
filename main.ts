const fs = require('node:fs');
const path = require('node:path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(path.join(__dirname, 'koi-sky.jpg'), path.join(outputDir, 'entry.png'));
