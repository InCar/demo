demo
====

演示如何使用私有的npm

这个演示包含了3个模块:
* @test/pack-a 一个合乎规则的最小化的模块
* @test/pack-a2 一个简单的模块,它引用其它了全局模块
* @test/pack-a3 引用了其它私有模块和全局模块

# @test/pack-a
一个最简单的NPM模块只需要2个文件

  - [package.json  模块包描述](https://github.com/InCar/demo/blob/master/packages/pack-a/package.json)
  - [index.js  模块功能,可以是任何名称,由packages.json里的main定义](https://github.com/InCar/demo/blob/master/packages/pack-a/index.js)

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

完整的 [package.json](https://github.com/InCar/demo/blob/master/packages/pack-a2/package.json)

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