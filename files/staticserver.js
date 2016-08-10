//nodejs.org/api for API docs
////Node.js web server                         
var http = require("http"),                           //Import Node.js modules
    url = require("url"),                             
    path = require("path")
              
http.createServer(function(request, response) {       //Create server 
response.writeHead(200)
response.write('Hello David!\n')
response.end()
}).listen(8081)                                     //Listening port 
console.log("Server is listening on port 8081.")      //Terminal output
