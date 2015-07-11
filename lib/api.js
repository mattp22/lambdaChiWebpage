var router = require('express').Router();

require('./apis/emails')(router);
require('./apis/home')(router);
require('./apis/philanthropy')(router);
require('./apis/recruitment')(router);

module.exports = router;