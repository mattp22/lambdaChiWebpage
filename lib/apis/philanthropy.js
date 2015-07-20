var fs = require('fs');

module.exports = function(router) {

    router.get('/theta', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/theta.json', 'utf8');
        var theta = JSON.parse(file);
        res.jsend.success(theta);
    });

    router.put('/theta', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/theta.json', 'utf8');
        var theta = JSON.parse(file);
        theta[req.body.index] = req.body.theta;
        var configJSON = JSON.stringify(theta);
        fs.writeFileSync('data/philanthropy/theta.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.get('/philanthropy-info', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/info.json', 'utf8');
        var info = JSON.parse(file);
        res.jsend.success(info);
    });

    router.put('/philanthropy-info', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/info.json', 'utf8');
        var info = JSON.parse(file);
        info[req.body.index] = req.body.info;
        var configJSON = JSON.stringify(info);
        fs.writeFileSync('data/philanthropy/info.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.get('/philanthropy-slides', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/slides.json', 'utf8');
        var slides = JSON.parse(file);
        res.jsend.success(slides);
    });

    router.put('/philanthropy-slides', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/slides.json', 'utf8');
        var slides = JSON.parse(file);
        slides[req.body.index] = req.body.slides;
        var configJSON = JSON.stringify(slides);
        fs.writeFileSync('data/philanthropy/slides.json', configJSON);
        res.jsend.success(configJSON);
    });
};