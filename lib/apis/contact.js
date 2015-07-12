var fs = require('fs');

module.exports = function(router) {

    router.get('/contact', function(req, res) {
        var file = fs.readFileSync('data/contact/contact.json', 'utf8');
        var contacts = JSON.parse(file);
        res.jsend.success(contacts);
    });
};