demo
====

演示如何使用私有的npm

这个演示包含了5个模块:

* [@test/pack-a](https://github.com/InCar/demo/tree/master/packages/pack-a)  一个合乎规则的最小化的模块
* [@test/pack-a2](https://github.com/InCar/demo/tree/master/packages/pack-a2) 一个简单的模块,它引用其它了全局模块
* [@test/pack-a3](https://github.com/InCar/demo/tree/master/packages/pack-a3) 引用了其它私有模块和全局模块
* [@test/websrv](https://github.com/InCar/demo/tree/master/packages/websrv) 模块化的WEB服务器容器
* [@test/websrv-feature1](https://github.com/InCar/demo/tree/master/packages/websrv-feature1) 模块化功能1

# @test/pack-a
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

### 使用
    var packA = require('@test/pack-a');
    packA();

### 参考
有关package.json请参考文档
<https://www.npmjs.org/doc/files/package.json.html>

# @test/pack-a2
引用全局NPM模块只需要在dependencies指定相应的模块即可

这个例子中,我们引用了[debug模块](https://www.npmjs.org/package/debug),它可以根据环境变量中`DEBUG`的值来输出debug信息

    "dependencies":{
        "debug" : "2.*.*"
      }

完整的 [@test/pack-a2/package.json](https://github.com/InCar/demo/blob/master/packages/pack-a2/package.json)

### scripts
package.json中支持一些特定的scripts <https://www.npmjs.org/doc/misc/npm-scripts.html>

    "scripts": {
        "test": "node ./test.js"
      },

这样,我们可以使用 `npm run test` 进行测试.

    > @test/pack-a2@1.0.1 test F:\Temp\demo\packages\pack-a2
    > node ./test.js

        pack:a2 Initialize PackA2... +0ms
        pack:a2 PackA2 Initialized! +0ms
        pack:a2 Construct PackA2 object.... +0ms
        pack:a2 PackA2.test1() +0ms
    ----> My name is PackA2
        pack:a2 PackA2.changeName('Jack') +15ms
    ----> My new name is Jack

### .npmignore
使用.npmignore文件排除发布时不需要的文件,比如测试文件

### @test/pack-a3
这个例子同时引用了 **@test/pack-2** 和 **debug** **underscore**

完整的 [@test/pack-a3/package.json](https://github.com/InCar/demo/blob/master/packages/pack-a3/package.json)

### 习惯布局
通常 ./lib/ 下存放主要的源代码, ./index.js记录导出对象

所有的测试文件存放在 ./test/ 下,.npmignore通常排除掉test里的内容

### 常用的一种JS模式
这可以把nodejs代码组合得整洁.

    var Core = (function(){
        function Core(){
            this._ = require('underscore');
        }

        Core.prototype.where = function(list, properties){
            debug("executing where()...");
            return this._.where(list, properties);
        };

        Core.prototype.sortBy = function(list, iteratee){
            debug("executing sortBy()...");
            return this._.sortBy(list, iteratee);
        };

        return Core;
    })();

    module.exports = Core;

如果模块比较小,直接这样就足够,使用时:

    var Core = require('./lib/core');
    var core = new Core();
    core.where(...);
    core.sort(...)

如果模块比较大,内部包含很多的内容,那么通常在外部再套一层对象

    module.exports = {
        Core : require('./lib/core'),
        Ext: require('./lib/extension')
        // ...more...
    };

然后这样使用

    var PackA3 = require('@test/pack-a3');
    var core = new PackA3.Core();
    core.where(...);
    core.sort(...);

    var ext = new PackA3.Ext();
    ext.foo(...);

# @test/websrv & @test/websrv-feature1 & @test/websrv-feature2
websrv是一个WEB服务器的容器,它本身只监听端口,把收到的HTTP请求路由给具体的模块.
websrv本身并不承担任何具体的功能.  
<https://github.com/InCar/demo/tree/master/packages/websrv>

websrv-feature1是一个精简的功能模块示例
它自身也是一个完整的express模块,通过express的级联,成为websrv的一个子模块
websrv-feature1展示一个标准的HTML网站
websrv将它的根路由设置为`/`

`
router.use('/', feature1); // 配置feature1的根路由为/
`

websrv-feature1将它自身的html文件夹设置为静态资源
它访问了自身暴露出来的一个API接口
它还使用了websrv-feature2中定义的2个angularJS.directive f2A f2B


`
app.get('/api/node-version', nodeVersion.getNodeVersion);
`

<https://github.com/InCar/demo/tree/master/packages/websrv-feature1>
