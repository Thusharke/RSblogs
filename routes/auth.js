var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require("../models/user.js");

//routes to register new user
router.get("/register",function(req,res){
    res.render("../views/Auth/register");
})
router.post("/register",async function(req,res){
    var newUser = new User({username : req.body.username,email : req.body.email});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            console.log(err.message);
            res.redirect("/register");
        }
        passport.authenticate('local')(req,res,function(){
            res.redirect("/blogs");
        })
    })
})

//routes to login user
router.get("/login",function(req,res){
    res.render("../views/Auth/login");
})
router.post("/login",passport.authenticate('local',{
    successRedirect : "/blogs",
	failureRedirect : "/login",
}),function(req,res){   
})

router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/blogs");
})

module.exports = router;
