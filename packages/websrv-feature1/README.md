# 功能模块示例

websrv-feature1是一个精简的功能模块示例
它自身也是一个完整的express模块,通过express的级联,成为websrv的一个子模块
websrv-feature1展示一个标准的HTML网站

```javascript
var Express = require('express');
var NodeVersion = require('./api/node-version');
var feature2 = require('@test/websrv-feature2');

// EXPRESS级联
// 模块的外部使用者能自行决定"根路由"
var app = new Express();
var nodeVersion = new NodeVersion();
app.get('/api/node-version', nodeVersion.getNodeVersion);

// 比如,外部使用者定义模块根路由是/web,那么index.html的完整路由是/web/index.html
app.use('/', Express.static(__dirname + '/html'));
// 这里集成了另外一个模块 @test/websrv-feature2 里的功能
app.use('/f2', feature2);

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

## 输出调试信息
使用debug模块来输出调试信息

```javacript
var debug = require('debug')('@test/websrv-feature1');
```

当DEBUG环境变量设置好后,即可以看到调试信息的输出

```shell
export DEBUG=@test/websrv-feature1 # LINUX
或
set DEBUG=@test/websrv-feature1 # Windows
```

## 开发过程中测试模块
```shell
cd ../websrv
npm link ../websrv-feature1
```
npm link通过建立符号链接来保持子模块的同步,这样不需要频繁npm publish来进行测试

测试完成后,使用`npm unlink`断开链接
```shell
npm unlink @test/websrv-feature1
```
