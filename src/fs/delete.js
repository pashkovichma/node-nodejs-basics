import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const removeFile = path.join(__dirname, 'files', 'fileToRemove.txt');

        await fs.rm(removeFile);
    } catch { 
        throw new Error('FS operation failed');
    }
};

await remove();