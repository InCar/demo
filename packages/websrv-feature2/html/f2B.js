"use strict";

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