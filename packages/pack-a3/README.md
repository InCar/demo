# 混合使用其它私有NPM模块和全局NPM模块
这个例子同时引用了 **@test/pack-2** 和 **debug** **underscore**

完整的 [@test/pack-a3/package.json](https://github.com/InCar/demo/blob/master/packages/pack-a3/package.json)

### 习惯布局
通常 ./lib/ 下存放主要的源代码, ./index.js记录导出对象

所有的测试文件存放在 ./test/ 下,.npmignore通常排除掉test里的内容

### 常用的一种JS模式
这可以把nodejs代码组合得整洁.

```javascript
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
```

如果模块比较小,直接这样就足够,使用时:

```javascript
    var Core = require('./lib/core');
    var core = new Core();
    core.where(...);
    core.sort(...)
```

如果模块比较大,内部包含很多的内容,那么通常在外部再套一层对象

```javascript
    module.exports = {
        Core : require('./lib/core'),
        Ext: require('./lib/extension')
        // ...more...
    };
```

然后这样使用

```javascript
    var PackA3 = require('@test/pack-a3');
    var core = new PackA3.Core();
    core.where(...);
    core.sort(...);

    var ext = new PackA3.Ext();
    ext.foo(...);
```

## API
### PackA3.Core()
实例化Core对象

```javascript
    var PackA3 = require('@test/pack-a3');
    var core = new PackA3.Core();
```

### core.where(list, properties)
按属性过滤

**list** Array 被过滤的对象列表

**properties** Object 过滤条件

```javascript
    var filtered = core.where([{name:'Mike'}, {name:'Jack'}, {name:'Mike'}], { name: 'Mike'});
```

### core.sortBy(list, iteratee)
排序

**list** Array<Object> 被排序列表

**iteratee**  function(obj){ return value; } 排序依据

```javascript
    var sorted = core.sortBy([{name:'Mike'}, {name:'Jack'}, {name:'Mike'}],
        function(obj){ return obj.name; });
```

### PackA3.Person
实例化Person对象

```javascript
    var PackA3 = require('@test/pack-a3');
    var person = new PackA3.Person();
```

### person.whoami()
获取名称

### person.changeName(newName)
修改名称

**newName** string 新名称