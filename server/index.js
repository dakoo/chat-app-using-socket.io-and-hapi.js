var Hapi = require('hapi');
var Route = require('./route');
var config = require('./config');
var server = new Hapi.Server();

for(var i in config){
    server.connection(config[i]);
}
server.route(Route.endpoints);

server.register(require('./chat'), function (err) {
    if (err) {
        throw err;
    }
    server.start(function() {
        for(var i in config){
            console.log("Server started at port: " + config[i].port + " for " + config

                    [i].labels);
        }
    });
});
