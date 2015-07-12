var fs = require('fs');

module.exports = function(router) {

    router.get('/rho', function(req, res) {
        var file = fs.readFileSync('data/alumni/alumni.json', 'utf8');
        var rho = JSON.parse(file);
        res.jsend.success(rho);
    });
};