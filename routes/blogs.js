var express = require("express");
var router = express.Router();

//Requiring the model
var blog = require("../models/blog.js");

//Landing page
router.get("/",function(req,res){
    res.render("../views/landing");
})

//1.index- Index page
router.get("/blogs",function(req,res){
    blog.find({},function(err,blogs){
        if(err){
            console.log("SOMETHING WENT WRONG!!");
        }
        else{
            console.log(req.user);
            res.render("../views/Blogs/home",{blogs : blogs});
        }
    })
})
//2.new- renders form to create a new blog
router.get("/blogs/new",function(req,res){
    res.render("../views/Blogs/new");
})
//3.create- Takes data from the new form and creates a new blog
router.post("/blogs",function(req,res){
    blog.create({
        author : req.body.author,
        title : req.body.title,
        image : req.body.image,
        description : req.body.description
    },function(err,blog){
        if(err)
            console.log("SOMETHING WENT WRONG!!!");
        else{
            console.log("New Blog has Been added Successfully");
            console.log(blog);
            res.redirect("/blogs");
        }
    })
})
//4.show- renders show page of a particular blog
router.get("/blogs/:id",function(req,res){
    blog.findById(req.params.id,function(err,post){
        console.log(post);
        if(err){
            console.log("SOMETHING WENT WRONG!!");
        }
        else{
            res.render("../views/Blogs/show",{post : post});
        }
    })
}) 

module.exports = router;