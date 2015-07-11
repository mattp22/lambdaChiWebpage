var fs = require('fs');

module.exports = function(router) {

    router.get('/theta', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/theta.json', 'utf8');
        var theta = JSON.parse(file);
        res.jsend.success(theta);
    });

    router.get('/philanthropy-info', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/info.json', 'utf8');
        var info = JSON.parse(file);
        res.jsend.success(info);
    });

    router.get('/philanthropy-slides', function(req, res) {
        var file = fs.readFileSync('data/philanthropy/slides.json', 'utf8');
        var slides = JSON.parse(file);
        res.jsend.success(slides);
    });
};