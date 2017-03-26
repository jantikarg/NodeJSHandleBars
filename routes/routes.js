

//Route handler for login page
exports.loginPageHandler = function (req, resp){
    //req.session.destroy();
    resp.render('login.handlebars', {});
}

//Route handler for landing page
exports.landingPageHandler = function (req, resp){
    var person;
    if(req.session.userName){
        person = req.session.userName;
    }else{
        person = req.query.nm;
        req.session.userName = person;
    }
    resp.render('landingpage.handlebars', {welcomeMessage:person});  //landingpage.handlebars consumes welcomeMessage
}

//Route handler for city page
exports.cityPageHandler = function(req, resp){
    var interestValue = req.body.interest;
    var personNameValue = req.session.userName;
    var taglineValue, cityNameValue;

    if(interestValue === 'fashion'){
        cityNameValue = "Paris";
        taglineValue = "Fashion capital of world!!";
    }else if(interestValue === 'history'){
        cityNameValue = "Rome";
        taglineValue = "Early civilization!!";
    }else if(interestValue === 'finance'){
        cityNameValue = "New York";
        taglineValue = "Bussiness capital of world!!";
    }

    resp.render('city.handlebars', {cityName:cityNameValue,
                            tagline:taglineValue,personName:personNameValue});
};
