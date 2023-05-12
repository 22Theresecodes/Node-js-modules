//Provides utilities for URL parsing and formatting.
const url = require('url');
const parsedUrl = url.parse('https://example.com/path');
console.log(parsedUrl.hostname);  // Output: example.com
