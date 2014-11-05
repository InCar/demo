var PackA3 = require('..');

(function(){
    var people = [new PackA3.Person(), new PackA3.Person(), new PackA3.Person()];
    people[0].changeName("Peter");
    people[1].changeName("Peter");
    people[2].changeName("Mike");

    console.log("Before where\n-----");
    people.forEach(function(p){
        console.log(p.whoami());
    });

    console.log("\nAfter where\n-----");
    var core = new PackA3.Core();
    var list = core.where(people, { _name: "Peter" });
    list.forEach(function(p){
        console.log(p.whoami());
    });
})();
