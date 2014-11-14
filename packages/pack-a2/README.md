# 如何在私有NPM模块中使用全局NPM模块
引用全局NPM模块只需要在dependencies指定相应的模块即可

这个例子中,我们引用了[debug模块](https://www.npmjs.org/package/debug),它可以根据环境变量中`DEBUG`的值来输出debug信息

```json
    "dependencies":{
        "debug" : "2.*.*"
      }
```

完整的 [@test/pack-a2/package.json](https://github.com/InCar/demo/blob/master/packages/pack-a2/package.json)

推荐使用'npm install --save'来自动编辑dependencies

```shell
    npm install debug --save
```

### scripts
package.json中支持一些特定的scripts <https://www.npmjs.org/doc/misc/npm-scripts.html>

```json
    "scripts": {
        "test": "node ./test.js"
      },
```

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

## API
此包只进行技术演示

### PackA2()
实例化PackA2对象

```javascript
    var PackA2 = require('@test/pack-a2');
    var packA2 = new PackA2();
```

### packA2.whoami()
返回自己的名称

### packA2.changeName(newName)
改变自己的名称

**newName** string. 新名称