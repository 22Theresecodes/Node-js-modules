//The string_decoder module provides an API for decoding buffer objects into strings.

const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');
const buffer = Buffer.from('Hello, World!', 'utf8');

console.log(decoder.write(buffer)); // Output: Hello, World!
