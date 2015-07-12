var fs = require('fs');

module.exports = function(router) {

    router.get('/delta', function(req, res) {
        var file = fs.readFileSync('data/recruitment/delta.json', 'utf8');
        var delta = JSON.parse(file);
        res.jsend.success(delta);
    });

    router.put('/delta', function(req, res) {
        var file = fs.readFileSync('data/recruitment/delta.json', 'utf8');
        var delta = JSON.parse(file);
        delta[req.body.index] = req.body.delta;
        var configJSON = JSON.stringify(delta);
        fs.writeFileSync('data/recruitment/delta.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.get('/spring-events', function(req, res) {
        var file = fs.readFileSync('data/recruitment/springEvents.json', 'utf8');
        var events = JSON.parse(file);
        res.jsend.success(events);
    });

    router.put('/spring-events', function(req, res) {
        var file = fs.readFileSync('data/recruitment/springEvents.json', 'utf8');
        var events = JSON.parse(file);
        events[req.body.index] = req.body.event;
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/recruitment/springEvents.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.get('/fall-events', function(req, res) {
        var file = fs.readFileSync('data/recruitment/fallEvents.json', 'utf8');
        var events = JSON.parse(file);
        res.jsend.success(events);
    });

    router.put('/fall-events', function(req, res) {
        var file = fs.readFileSync('data/recruitment/fallEvents.json', 'utf8');
        var events = JSON.parse(file);
        events[req.body.index] = req.body.event;
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/recruitment/fallEvents.json', configJSON);
        res.jsend.success(configJSON);
    });
};