// 服务器端API演示
var debug = require('debug')('@test/websrv-feature1');

var Feature1 = (function(){
    function Feature1(){
    }

    // 返回Node的版本号
    Feature1.prototype.getNodeVersion = function(req, res){
        debug(process.versions);
        res.json(process.versions);
    };

    return Feature1;
})();

module.exports = Feature1;
