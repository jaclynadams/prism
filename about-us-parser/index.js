var request = require("request");
var cheerio = require("cheerio");
var express = require("express");
var fs = require("fs");

var scraper = express();

var url = "https://prism.com/about/";

request(url, function(err, response, html){

	if(!err){
		var $ = cheerio.load(html);
		
		var people = $(".team-grid .offset1b li");
		console.log("There are " + people.length + " people on the Prsim team. They are:");

		// people.each(function(i, person){
		// 	console.log(person.children);
		// });
		// var vars; 
		// var json = {};
		// people("p").map(function(i, person){
		// 	var 
		// });
	}
})


//scraper.listen("8000");

//exports = module.exports = scraper; 


//class team-grid, div 
//class offset1b
//each li, first <p> = name, second <p> = role