import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const read = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const pathFileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
        
        await fs.access(pathFileToRead);

        const contentFileToRead = await fs.readFile(pathFileToRead, 'utf-8');

        console.log(contentFileToRead);
    } catch (error) {
        throw new Error ('FS operation Failed');
    }
};

await read();