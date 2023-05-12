//Buffer: Helps manipulate binary data.
const buf = Buffer.from('Hello, World!', 'utf8');

console.log(buf.toString('base64')); // Output: SGVsbG8sIFdvcmxkIQ==
