"use strict";

define(['./feature2', 'text!./f2A.html'], function(module, template){
    return module.directive('f2A', function(){
            return {
                restrict:'AE',
                scope:{
                    f2A:'='
                },
                template:template
            };
        });
});