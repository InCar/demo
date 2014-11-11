# 功能模块示例

websrv-feature1是一个精简的功能模块示例
它自身也是一个完整的express模块,通过express的级联,成为websrv的一个子模块
websrv-feature1展示一个标准的HTML网站

```javascript
var Express = require('express');
var NodeVersion = require('./api/node-version');

// EXPRESS级联
// 模块的外部使用者能自行决定"根路由"
var app = new Express();
var nodeVersion = new NodeVersion();
// nodeVersion.getNodeVersion是一个示范的API,它返回了当前服务器的NODE环境版本号
app.get('/api/node-version', nodeVersion.getNodeVersion);

// 静态的的HTML,客户端SCRIPTS,以及IMAGES, CSS等资源
app.use('/', Express.static(__dirname + '/html'));

module.exports = app;
```

<https://github.com/InCar/demo/tree/master/packages/websrv-feature1>

## 运行此示例

```
git clone https://github.com/InCar/demo.git
cd demo/packages/websrv
npm install
set DEBUG=@test/*
npm run test
```
