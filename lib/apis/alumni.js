var fs = require('fs');

module.exports = function(router) {

    router.get('/rho', function(req, res) {
        var file = fs.readFileSync('data/alumni/rho.json', 'utf8');
        var rho = JSON.parse(file);
        res.jsend.success(rho);
    });

    router.put('/rho', function(req, res) {
        var file = fs.readFileSync('data/alumni/rho.json', 'utf8');
        var rho = JSON.parse(file);
        rho[req.body.index] = req.body.rho;
        var configJSON = JSON.stringify(rho);
        fs.writeFileSync('data/alumni/rho.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.get('/jobs', function(req, res) {
        var file = fs.readFileSync('data/alumni/jobs.json', 'utf8');
        var jobs = JSON.parse(file);
        res.jsend.success(jobs);
    });

    router.post('/jobs', function(req, res) {
        var file = fs.readFileSync('data/alumni/jobs.json', 'utf8');
        var jobs = JSON.parse(file);
        jobs.unshift(req.body.job);
        var configJSON = JSON.stringify(jobs);
        fs.writeFileSync('data/alumni/jobs.json', configJSON);
        res.jsend.success(configJSON);
    });

    router.delete('/jobs/:index', function(req, res) {
        var file = fs.readFileSync('data/alumni/jobs.json', 'utf8');
        var jobs = JSON.parse(file);
        jobs.splice(req.params.index, 1);
        var configJSON = JSON.stringify(jobs);
        fs.writeFileSync('data/alumni/jobs.json', configJSON);
        res.jsend.success(configJSON);
    });
};