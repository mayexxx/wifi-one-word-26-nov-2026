import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const line = 'Agoraphobic';

const length = Array.from(line).length;
if (length < 1 || length > 20 || /[\r\n]/.test(line) || /\s/.test(line)) {
  throw new Error('Invalid entry');
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, `${line}\n`);

const written = readFileSync(`${outputDir}/entry.txt`, 'utf8');
const entry = written.slice(0, -1);
const entryLength = Array.from(entry).length;
if (written !== `${line}\n` || entryLength !== length || entryLength < 1 || entryLength > 20 || /[\r\n]/.test(entry) || /\s/.test(entry)) {
  throw new Error('Entry read-back validation failed');
}
