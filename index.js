var express  = require('express');
var app = express();

app.get("/",function(req,res){
    res.send("Welcome to My brand new home page");
})

app.listen(process.env.PORT||"3000",process.env.ID,function(){
    console.log("The server is running!");
})