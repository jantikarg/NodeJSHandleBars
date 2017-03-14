var exp = require("express");
var app = exp();

app.use(exp.static(__dirname + "/public")); // access the files from public folder directly thru browser url

app.get('/players/:lang/:name',function(req, res){
    res.write("Name: "+req.params.name);
    res.write("Lang: " +req.params.lang);
    res.end();
});
var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("Server is listening on port: " + port);
});