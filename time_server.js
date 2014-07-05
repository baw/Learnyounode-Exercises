var net = require("net");

var port_number = process.argv[2]

function zeroAdder(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

var server = net.createServer(function serverCallback(socket) {
  var date = new Date();
  
  var year  =  zeroAdder(date.getFullYear());
  var month =  zeroAdder(date.getMonth() + 1);
  var day   =  zeroAdder(date.getDate());
  var hour  =  zeroAdder(date.getHours());
  var minute = zeroAdder(date.getMinutes());
  
  var time = year  + "-" +
             month + "-" +
             day   + " " +
             hour  + ":" +
             minute;
  
  socket.end(time + "\n");
});
server.listen(port_number);