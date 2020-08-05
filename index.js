//requiring all the installed packages
var express  = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

//requiring all the routes
var BlogRoutes = require("./routes/blogs") ;

//connecting to the database
var url = process.env.DATABASEURL || "mongodb://localhost/RSblogs";
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});

//Using the required packages
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyparser.urlencoded({extended:true}));

app.use(BlogRoutes);

app.listen(process.env.PORT||"3000",process.env.ID,function(){
    console.log("The server is running!");
})