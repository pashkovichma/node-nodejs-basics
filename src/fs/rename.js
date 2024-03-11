import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
        const propFilePath = path.join(__dirname, 'files', 'properFilename.md');
    
        await fs.rename(wrongFilePath, propFilePath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();