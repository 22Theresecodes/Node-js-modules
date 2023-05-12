//path: Provides utilities for working with file paths

const path = require('path');
const filePath = '/path/to/file.txt';
const fileName = path.basename(filePath);
console.log(fileName);  // Output: file.txt