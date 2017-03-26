var exp = require("express");
var app = exp();
var bodyparser = require("body-parser");
var session = require("express-session");
var hbars = require("express-handlebars");

var routes = require('./routes/routes')

app.use(exp.static(__dirname + "/public")); // access the files from public folder directly thru browser url

//body-parser : for getting post request
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

//session : initilizing, passing params to constructor
//secret: prevent cross site access
//resave: keep saving to have proper data in session
//saveUninitialized: save even when there is no data
app.use(session({secret:"secret", resave: true, saveUninitialized: true}));

app.set('view engine', 'handlebars');// view engine is handlebar.
app.engine('handlebars', hbars({})); // we can specify layout name

app.get('/', routes.loginPageHandler);
app.get('/toLanding', routes.landingPageHandler);
app.post('/toCity', routes.cityPageHandler);


var port = process.env.PORT || 4000;
app.listen(port, function(){
    console.log("Server is listening on port: " + port);
});