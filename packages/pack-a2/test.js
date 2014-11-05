process.env.DEBUG = process.env.DEBUG||"pack:a2";
var PackA2 = require("./index");

(function(){
    var packA2 = new PackA2();
    var name = packA2.whoami();
    console.log("----> My name is " + name);

    name = packA2.changeName("Jack");
    console.log("----> My new name is " + name);
})();

