/* for static */
exports.get = {
    handler: {
        file: function (request) {
            return '../client/' + request.params.filename;
        }
    }
};
exports.getentry = {
    handler: {
        file: function (request) {
            return '../client/html/' + 'index.html';
        }
    }
};
/* for chat */
exports.chat = {
    handler: {
        file: function (request) {
            return '../client/html/' + 'chat.html';
        }
    }
};
