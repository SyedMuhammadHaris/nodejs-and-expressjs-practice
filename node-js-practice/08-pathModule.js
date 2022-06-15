// Built in path module in js

const path = require('path');

console.log(path.sep);

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);
// console.log(`To join the Path ${path.join('/content', 'subfolder', 'test.txt')}`);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);