var express = require("express");
var router = express.Router();

//Landing page
router.get("/",function(req,res){
    res.render("../views/Blogs/home");
})

module.exports = router;