var hyperglue = require('hyperglue');
var fs = require('fs');

module.exports = function (options, callback) {
    fs.readFile(__dirname + '/_index.html', function (err, buffer) {
        if (err) return callback(err);

        var index = hyperglue(buffer.toString(), {
            '#inject-css': {
                _html: options.fonts
            },
            body: {
                _html: options.icons +
                    '<div class="diy-playground-container">' +
                    options.content +
                    '</div>'
            }
        });

        callback(null, index.outerHTML);
    });
}
