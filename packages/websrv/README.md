# WEB服务器示例

websrv是一个WEB服务器的容器,它本身只监听端口,把收到的HTTP请求路由给具体的模块.
websrv本身并不承担任何具体的功能.
<https://github.com/InCar/demo/tree/master/packages/websrv>

websrv使用了websrv-feature1模块,
websrv-feature1是一个精简的功能模块
websrv通过express的级联能力来使用websrv-feature1模块
websrv-feature1内部使用了websrv-feature2的功能

```javascript
var Express = require('express');
var router = new Express.Router();

var feature1 = require('@test/websrv-feature1');
router.use('/web', feature1);
```

## 运行此示例
```SHELL
git clone https://github.com/InCar/demo.git
cd demo/packages/websrv
npm install
set DEBUG=@test/*
npm run test
start http://localhost:51234
```
