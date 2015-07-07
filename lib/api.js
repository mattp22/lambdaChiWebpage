var router = require('express').Router();

require('./apis/emails')(router);

module.exports = router;