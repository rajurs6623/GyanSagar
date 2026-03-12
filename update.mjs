import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, 'public', 'images', 'books');
const allFiles = fs.readdirSync(imgDir);
const pngFiles = allFiles.filter(f => f.endsWith('.png'));

const dataPath = path.join(__dirname, 'src', 'data', 'children_books.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

let imgIndex = 0;
data.forEach(category => {
    category.books.forEach(book => {
        if (pngFiles.length > 0) {
            const chosenImage = pngFiles[imgIndex % pngFiles.length];
            book.cover = `/images/books/${chosenImage}`;
            imgIndex++;
        }
    });
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log("Updated children books with local 3D images.");
