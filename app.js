var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/tess", function(req,res){
    res.send("really?");
});

app.listen('8080', '192.168.2.25', function(){
    console.log("App started on 8080");
});