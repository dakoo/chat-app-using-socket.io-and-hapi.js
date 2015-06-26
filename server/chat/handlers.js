exports.chat_message = function (io, newMessage) {
    console.log('Log', newMessage);
    io.emit('chat message', newMessage);
};