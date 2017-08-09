//load the http module to create http server
var http = require('http');
var squareroot = require("./squareroot.js");
//configure http server to sow hello world

var server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("the currenttime seconds squareroot::" +squareroot.squareroot());
    res.end();
});

//listen on local host
server.listen(8080);

console.log("server is running on localhost:8080");
