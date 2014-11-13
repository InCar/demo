var Express = require('express');

// EXPRESS级联
// 模块的外部使用者能自行决定"根路由"
var app = new Express();

// 比如,外部使用者定义模块根路由是/web,那么index.html的完整路由是/web/index.html
app.use('/', Express.static(__dirname + '/html'));

module.exports = app;