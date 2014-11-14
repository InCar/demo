# 最精简的私有NPM模块

一个最简单的NPM模块只需要2个文件

  - [@test/pack-a/package.json](https://github.com/InCar/demo/blob/master/packages/pack-a/package.json) 模块包描述
  - [@test/pack-a/index.js](https://github.com/InCar/demo/blob/master/packages/pack-a/index.js) 模块功能,可以是任何名称,由packages.json里的main定义

package.json通常使用命令 `npm init` 产生,按提示填写必要的字段即可

package.json里最重要的字段是name和version

### name
当模块被注册时,名字会构成引用它的URL,所以名称中不得包含URL中的保留字符.

不能以 `.` 或 `_` 开头.

必须使用小写字母.

对于私有NPM模块,模块的名字name必须以@前缀包含scope名称,比如 `@test/pack-a` .

### version
版本号用 `.` 分开成3节,比如`1.2.6`

版本号和名字共同决定模块的全局唯一性,当发布以后,版本号即被固定,下次发布必须使用新的版本号.

### 发布
第一次发布前需要先使用`npm adduser`在对应的NPM注册服务器注册用户及前缀scope名称
部分私有NPM服务器需要加上`--always-auth`参数用于身份验证

使用`npm publish`发布

```shell
npm adduser --registry=http://registry.<your-domain>.com --@scope=test --always-auth
npm publish
```

提示:可以使用`npm whoami --registry=http://registry.<your-domain>.com`查看当前用户

### 使用
像普通NPM包一样,使用`npm install`安装,所不同的是,私有NPM包有一个前缀scope名称

```shell
    npm install @test/pack-a --save
```

在nodejs程序中使用*require*函数引用
这个NPM包不包含具体功能,它只在控制台上输出一行信息 *Hello NPM!*

```javascript
    var packA = require('@test/pack-a');
    packA();
```
### 参考
有关package.json请参考文档
<https://www.npmjs.org/doc/files/package.json.html>
