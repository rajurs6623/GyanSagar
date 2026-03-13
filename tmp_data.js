const fs = require('fs');
const path = require('path');

// Read all png images from public/images/books
const imgDir = path.join(__dirname, 'public', 'images', 'books');
const allFiles = fs.readdirSync(imgDir);
const pngFiles = allFiles.filter(f => f.endsWith('.png'));

// Read existing JSON data
const dataPath = path.join(__dirname, 'src', 'data', 'children_books.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Randomly assign png files to books
let imgIndex = 0;
data.forEach(category => {
    category.books.forEach(book => {
        // use modulo to cycle through images
        const chosenImage = pngFiles[imgIndex % pngFiles.length];
        book.cover = `/images/books/${chosenImage}`;
        imgIndex++;
    });
});

// Write updated data back
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log("Updated children books with local 3D images.");
