var Express = require('express');
var favicon = require('express-favicon');
var morgan = require('morgan-debug');
var config = require('./config');
var route = require('./route');

var app = new Express();
app.use(new morgan('@test/websrv', config.morgan)); // HTTP 日志
app.use(favicon('car.ico'));
app.use(route);
app.listen(config.port, function(){
    console.log("WebSrv is listening on " + config.port);
});
