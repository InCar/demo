demo
====

演示如何使用私有的npm

这个演示包含了3个模块:
* @test/pack-a 一个合乎规则的最小化的模块
* @test/pack-a2 一个简单的模块,它引用其它了全局模块
* @test/pack-a3 引用了其它私有模块

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
版本号用 `.` 分开成3节
版本号和名字共同决定模块的全局唯一性,当发布以后,版本号即被固定,下次发布必须使用新的版本号.

### 参考
有关package.json请参考文档
<https://www.npmjs.org/doc/files/package.json.html>