//Requirements

var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var q = require('q');
var bodyParser = require('body-parser')


var app = express();
//Middleware
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));






//port
var port = 8080; 
app.listen(process.env.EXPRESS_PORT || port, function(){
    console.log("CityBlocks on", port); 
});

// exports = module.exports = app;



