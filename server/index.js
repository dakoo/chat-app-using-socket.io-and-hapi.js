var Hapi = require('hapi');
var Route = require('./route');
var config = require('./config');
var chat = require('./chat');
var server = new Hapi.Server();

/* server port */
for(var i in config){
    server.connection(config[i]);
}
/* routing table for each server port */
server.select('static').route(Route.endpoints.static);
server.select('chat').route(Route.endpoints.chat);

server.register({
    register: chat,
}, function (err) {
    if (err) {
        throw err;
    }
    server.start(function () {
        for (var i in config) {
            console.log("Server started at port: " + config[i].port + " for " + config[i].labels);
        }
    });
});
