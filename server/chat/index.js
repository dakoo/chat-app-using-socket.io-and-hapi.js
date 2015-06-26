var Handlers = require('./handlers');

exports.register = function (server, options, next) {

    var io = require('socket.io')(server.select('chat').listener);

    io.on('connection', function(socket){
        socket.on('chat message', function(msg){
            Handlers.chat_message(msg);
        });
    });
    next();
};
exports.register.attributes = {
    name: 'hapi-chat'
};

