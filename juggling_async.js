var http = require("http");

var requests = [];
requests.push({ "url": process.argv[2], "data": null, "end": false });
requests.push({ "url": process.argv[3], "data": null, "end": false });
requests.push({ "url": process.argv[4], "data": null, "end": false });

function finished() {
  if (requests[0].end && requests[1].end && requests[2].end) {
    requests.forEach(function outputCallback(request) {
      console.log(request.data);
    });
  }
}

requests.forEach(function urlCallback(request) {
  http.get(request.url, function getCallback(response) {
    request.data = "";

    response.on("data", function dataCallback(chunk) {
      request.data += chunk;
    });

    response.on("end", function endCallback() {
      request.end = true;
      finished();
    });
  });
});