//fs (File System): Provides file system-related functionality, such as reading and writing files.

const fs = require('fs');

// Read contents of a file
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Write content to a file
fs.writeFile('file.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});
