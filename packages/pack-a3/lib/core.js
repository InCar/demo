"use strict";

var debug = require('debug')('pack:a3:core');

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
