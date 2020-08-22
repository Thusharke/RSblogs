var blog = require('../models/blog.js');

var middlewareObj = {};

middlewareObj.checkBlogOwnership = function checkBlogOwnership(req,res,next){
    if(req.isAuthenticated()){
        blog.findById(req.params.id,function(err,blog){
            if(err){
                res.redirect("back");
            }
            else{
                if(blog.author.id.equals(req.user._id)){
                    next();
                }
                else{
                    res.redirect("back")
                }
            }
        })
    }
    else{
        res.redirect("/login")
    }
}

module.exports = middlewareObj;