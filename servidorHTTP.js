/**
 * Created by Usuario on 25/04/16.
 */


var http = require("http");

var server = http.createServer(
    function(request,response {
        response.end("Has llegado al servidor web creado con node");

    }).listen(8000, function(){
    console.log("Server listening on: http://localhost:%s", 8000);
});