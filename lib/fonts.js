var packify = require('packify-css');

module.exports = function (callback) {
    packify(
        __dirname + '/../node_modules/apex-rounded-web/dist/ApexRounded.css',
        callback
    );
};
