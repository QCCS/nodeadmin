var express = require('express');
var router = express.Router();
var tokenCheck = require('../auth/tokencheck.js');
var SystemController = require('./systemcontroller.js');
var Pstreecontroller = require('./pstreecontroller.js');
router.use(tokenCheck);

router.route('/modules')
  .get(SystemController.getNpmModules);
router.route('/pstree')
    .get(Pstreecontroller.getPstree);
module.exports = router;
