var fs = require('fs');

module.exports = function(router) {

    router.get('/delta', function(req, res) {
        var file = fs.readFileSync('data/recruitment/delta.json', 'utf8');
        var delta = JSON.parse(file);
        res.jsend.success(delta);
    });

    router.get('/recruitment-events', function(req, res) {
        var file = fs.readFileSync('data/recruitment/events.json', 'utf8');
        var events = JSON.parse(file);
        res.jsend.success(events);
    });
};