var http = require("http");
var fs   = require("fs");

var portNumber = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function serverCallback(request, response) {
  var fileStream = fs.createReadStream(file);
  fileStream.pipe(response);
});
server.listen(portNumber);