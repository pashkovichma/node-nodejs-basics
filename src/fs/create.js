import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const create = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const freshFilePath = path.join(__dirname, 'files', 'fresh.txt');

        await fs.writeFile(freshFilePath, 'I am fresh and young', { flag: 'wx' });
    } catch(error) {
        throw new Error('FS operation failed');
    }
};

await create();