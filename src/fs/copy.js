import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);

        const sourcePath = path.join(__dirname, 'files');
        const freshFilePath = path.join(__dirname, 'files_copy');

        await fs.mkdir(freshFilePath);

        const files = await fs.readdir(sourcePath);

        files.forEach(async (file) => {
            const sourceFile = path.join(sourcePath, file);
            const freshFile = path.join(freshFilePath, file);
            await fs.copyFile(sourceFile, freshFile);
        })

    } catch (error) {
        throw new Error ('FS operation Failed');
    }
};

await copy();