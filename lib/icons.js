var fs = require('fs');

module.exports = function (callback) {
    fs.readFile(
        __dirname + '/../node_modules/diy-icons/dist/diy-icons.svg',
        callback
    );
};
