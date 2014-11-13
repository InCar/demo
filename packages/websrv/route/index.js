// 路由
var Express = require('express');
var feature1 = require('@test/websrv-feature1');

var router = new Express.Router();
router.use('/', feature1); // 配置feature1的根路由

module.exports = router;