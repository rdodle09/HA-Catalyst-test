//load the http module to create http server
var http = require('http');
var squareroot = require("./squareroot.js");
//configure http server to sow hello world

var server = http.createServer(function(request, response){
  repsonse.writeHEad(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
    response.write("the date squareroot" +squareroot.squareroot());
});

//listen on local host
server.listen(8080);

console.log("server is running on localhost:8080");
