var debug = require('debug')('pack:a2');

var PackA2 = (function(){
    debug("Initialize PackA2...");

    function PackA2(){
        debug("Construct PackA2 object....");
        this._name = "PackA2";
    }

    PackA2.prototype.whoami = function(){
        debug("PackA2.whoami()");
        return this._name;
    };

    PackA2.prototype.changeName = function(newName){
        debug("PackA2.changeName('%s')", newName);
        if(newName){
            this._name = newName;
        }
        else{
            debug("The new name is invalid: " + newName);
        }
        return this._name;
    };

    debug("PackA2 Initialized!");
    return PackA2;
})();

module.exports = PackA2;