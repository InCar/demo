"use strict";

requirejs.config({
    paths:{
        angular:"http://cdn.staticfile.org/angular.js/1.2.20/angular.min",
        angularResource: "http://cdn.staticfile.org/angular.js/1.2.20/angular-resource.min",
        text:"http://cdn.staticfile.org/require-text/2.0.12/text.min"
    },
    shim:{
        angular: { exports: 'angular'},
        angularResource: ['angular']
    }
});

requirejs(['angular', 'angularResource', '../f2/f2A', '../f2/f2B'], function(angular){
    angular.module('f2', ['ngResource', 'feature2'])
        .controller('f2Ctrl', ['$scope', '$resource', function ($scope, $resource) {
            $scope.data2B = {
                title: 'NodeJS 版本信息',
                text: '正在获取....'
            };

            var apiNodeVersion = $resource('/api/node-version');
            apiNodeVersion.get(null).$promise
                .then(function(version){
                    $scope.data2B.text = JSON.stringify(version);
                });
        }]);
    angular.bootstrap(document, ['f2']);
});