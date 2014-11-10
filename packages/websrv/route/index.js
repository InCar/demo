// 路由
var Express = require('express');
var feature1 = require('@test/websrv-feature1');

var router = new Express.Router();
router.use('/web', feature1); // 配置feature1的根路由为/web

// 重定向
router.get('/', function(req, res){
    res.status(301).set('Location', '/web').end();
});

module.exports = router;