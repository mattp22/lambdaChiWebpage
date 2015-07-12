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
};