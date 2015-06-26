var handler = require('./handlers');
exports.endpoints = {
    static: [
        { method: 'GET', path: '/', config: handler.getentry },
        { method: 'GET', path: '/{filename*}', config: handler.get},
    ],
    chat: [
        { method: 'GET', path: '/', config: handler.chat },
    ],
};
