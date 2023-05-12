//The zlib module provides compression and decompression functionalities using the zlib library.

const zlib = require('zlib');

const input = 'Hello, World!';

// Compress data
const compressed = zlib.deflateSync(input);
console.log('Compressed:', compressed.toString('base64'));

// Decompress data
const decompressed = zlib.inflateSync(compressed);
console.log('Decompressed:', decompressed.toString());
