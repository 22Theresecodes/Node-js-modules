// Offers utilities for parsing and formatting URL query strings
const querystring = require('querystring');
const params = querystring.parse('name=John&age=30');
console.log(params.name);  // Output: John

