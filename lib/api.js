var router = require('express').Router();

require('./apis/emails')(router);
require('./apis/home')(router);
require('./apis/philanthropy')(router);
require('./apis/recruitment')(router);
require('./apis/contact')(router);
require('./apis/alumni')(router);
require('./apis/login')(router);

module.exports = router;