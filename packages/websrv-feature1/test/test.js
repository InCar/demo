var Express = require('express');
var feature1 = require('..');

var app = new Express();
app.use(feature1);

app.listen(51234, function(){
    console.log('The test host is listening on 51234');
});