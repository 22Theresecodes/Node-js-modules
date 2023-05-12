//Offers various utility functions for formatting, debugging, and working with objects.
const util = require('util');
const name = 'John';
const greeting = util.format('Hello, %s!', name);
console.log(greeting);  // Output: Hello, John!
