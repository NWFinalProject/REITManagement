var db = require ("../models");

module.exports = function(app){
    app.get("/requests", function(req, res){
        db.Renter.findAll({}).then(function(rentersDB){
            res.json(rentersDB);
            console.log(rentersDB[0].first_name);
        });
    });

    app.post("/newrequest", function(req, res) {
    	console.log(req.body);
    	db.Renter.create({
    	first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_address: req.body.email_address,
        request_detail: req.body.request_detail,
        request_status: "New"
    	});

    	res.send(200);
    })
    app.post("/signup", function(req, res) {
       console.log(res.body);
   db.User.create({
     username: req.body.username,
     email: req.body.email,
     password: req.body.password
   }).then(function() {
     res.redirect(307, "/renter");
   }).catch(function(err) {
     console.log(err);
     res.json(err);
   });
 });

}