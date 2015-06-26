var Hapi = require('hapi'),
    Route = require('./route'),
    config = require('./config');

var server = new Hapi.Server();
server.connection({ port: config.server.port });

server.route(Route.endpoints);
server.start(function() {
    console.log('Server started ', server.info.uri);
});
