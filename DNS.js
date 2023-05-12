//The dns module provides functions to perform DNS lookups and resolve domain names.

const dns = require('dns');

dns.lookup('www.example.com', (err, address) => {
  console.log('IP address:', address);
});
