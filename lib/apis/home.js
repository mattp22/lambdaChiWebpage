var fs = require('fs');

module.exports = function(router) {

    router.get('/home-data', function(req, res) {
        var file = fs.readFileSync('data/home/home-data.json', 'utf8');
        var events = JSON.parse(file);
        res.jsend.success(events);
    });

    router.get('/home-images', function(req, res) {
        var file = fs.readFileSync('data/home/home-images.json', 'utf8');
        var images = JSON.parse(file);
        res.jsend.success(images);
    });

    router.post('/home-data', function(req, res) {
        var file = fs.readFileSync('data/home/home-data.json', 'utf8');
        var events = JSON.parse(file);
        events.unshift(req.body);
        var configJSON = JSON.stringify(events);
        fs.writeFileSync('data/home/home-data.json', configJSON);
        res.jsend.success(configJSON);
    });
};
