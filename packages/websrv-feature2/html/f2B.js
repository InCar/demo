"use strict";

// NOTE!!! 这里的 ./ 一定不要忽略;否则被外部模块加载时,路径解析错误
define(['./feature2', 'text!./f2B.html'], function(module, template){
    return module.directive('f2B', function(){
        return {
            restrict:'AE',
            scope:{
                f2B:'='
            },
            template:template
        };
    });
});