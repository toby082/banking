const fs = require('fs');

// Read the SSL/TLS certificate from a file
const certData = fs.readFileSync('sample.crt');

// Convert the certificate data to a byte array
const certByteArray = new Uint8Array(certData);
console.log('[Debug] ~ file: sample.js:8 ~ certByteArray:', certByteArray);
