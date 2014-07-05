var http = require("http");
var map = require("through2-map");

var portNumer = process.argv[2];

var server = http.createServer(function serverCallback(request, response) {
  if (request.method == "POST") {
    request.pipe(map(function mapCallback(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  } else {
    response.end();
  }
});

server.listen(portNumer);