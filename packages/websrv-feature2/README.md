# 模块化的AngularJS指令(Directive)

websrv-feature2是一个客户端AngularJS模块示例

[f2A.js](https://github.com/InCar/demo/blob/master/packages/websrv-feature2/html/f2A.js)  
[f2B.js](https://github.com/InCar/demo/blob/master/packages/websrv-feature2/html/f2B.js)  
定义了2个AngularJS.directive,它们被@test/websrv-feature1集成使用

模块使用[requirejs](https://github.com/jrburke/requirejs)加载,请参考  
<https://github.com/InCar/demo/blob/master/packages/websrv-feature1/html/f2.html>  
<https://github.com/InCar/demo/blob/master/packages/websrv-feature1/html/scripts/f2.js>

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
var debug = require('debug')('@test/websrv-feature2');
```

当DEBUG环境变量设置好后,即可以看到调试信息的输出

```shell
export DEBUG=@test/websrv-feature2 # LINUX
或
set DEBUG=@test/websrv-feature2 # Windows
```

## 开发过程中测试模块
```shell
cd ../websrv-feature1
npm link ../websrv-feature2
```
npm link通过建立符号链接来保持子模块的同步,这样不需要频繁npm publish来进行测试

测试完成后,使用`npm unlink`断开链接
```shell
npm unlink @test/websrv-feature2
```

## Angular Directive
### feature2.f2A
显示一行文本

```HTML
<div f2-a=""></div>
```

**src** /f2A.js

**f2-a** string 被呈现的文本信息
 
### feature2.f2B
显示一行标题和一行文本

```HTML
<div f2-b=""></div>
```

**src** /f2B.js

**f2-b.title** string 标题
**f2-b.text** string 被呈现的文本信息