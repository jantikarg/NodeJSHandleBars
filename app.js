var exp = require("express");
var app = exp();

app.get('/players',function(req, res){
    var query = req.query;
    console.log("Query Params::"+ JSON.stringify(query));
    res.write("Name: "+query.name);
    res.write("Lang: " +query.lang);
    res.end(JSON.stringify(query));
});
var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("Server is listening on port: " + port);
});