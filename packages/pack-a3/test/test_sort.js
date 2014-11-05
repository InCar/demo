var PackA3 = require('..');

(function(){
    var people = [new PackA3.Person(), new PackA3.Person(), new PackA3.Person()];
    people[0].changeName("Peter");
    people[1].changeName("Alice");
    people[2].changeName("Mike");

    console.log("Before sort\n-----");
    people.forEach(function(p){
        console.log(p.whoami());
    });

    console.log("\nAfter sort\n-----");
    var core = new PackA3.Core();
    var list = core.sortBy(people, function(p){ return p.whoami(); });
    list.forEach(function(p){
        console.log(p.whoami());
    });
})();
