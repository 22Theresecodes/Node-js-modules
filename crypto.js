// Provides cryptographic functionality, such as encryption, decryption, and hashing.

const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('Hello, World!');
const hashedData = hash.digest('hex');
console.log(hashedData); // Output: 8a8c09...
