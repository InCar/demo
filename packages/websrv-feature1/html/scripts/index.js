
$(document).ready(function(){
    var i = 0;
    setInterval(function(){
        $('p').css('color', i++%2?'crimson':'blue');
    }, 1000);

    // 访问API
    $.get('api/node-version')
        .done(function(data, status, jqXHR){
            $('#node-version').text(JSON.stringify(data));
        })
        .fail(function(jqXHR, status, ex){
            $('#node-version').text(status + ': ' + ex);
        });
});