const fs = require('fs');

var filePath = process.argv.slice(2);
var outputBuffer = fs.readFileSync(filePath[0]);
var fileContents = outputBuffer.toString();
console.log(fileContents.split('\n').length - 1);