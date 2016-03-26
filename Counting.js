var fs = require('fs');

var fileBuffer = fs.readFileSync(process.argv[2]);
//console.log(fileBuffer);
var fileText = fileBuffer.toString();
//console.log(fileText);
var array = fileText.split("\n");
//console.log(array);
console.log(array.length - 1);