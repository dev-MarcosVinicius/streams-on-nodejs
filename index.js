var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('data.txt');

readerStream.setEncoding('UTF8'); 

readerStream.on('data', function(chunk) {
    data += chunk;
    console.log("chunk: " + data);
});

readerStream.on('end',function() {
    console.log("Program Ended");
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});