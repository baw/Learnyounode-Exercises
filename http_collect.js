var http = require("http");

var url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding("utf8");
  
  var data = ""
  response.on("data", function dataCallback(chunk) {
    data += chunk;
  });
  
  response.on("end", function endCallback() {
    console.log(data.length);
    console.log(data);
  });
});