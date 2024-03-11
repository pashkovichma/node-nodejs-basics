import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const list = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const mainPath = path.join(__dirname, 'files'); 

        const files = await fs.readdir(mainPath);
        console.log(files);
    } catch {
        throw new Error('FS operation failed');
    }
};

await list();