var handler = require('./handlers');
exports.endpoints = [
    { method: 'GET', path: '/', config: handler.getentry },
    { method: 'GET', path: '/{filename*}', config:handler.get},];
