var request = require("request");
var cheerio = require("cheerio");

var url = "https://prism.com/about/";

request(url, function(err, response, html){

	if(!err){
		var $ = cheerio.load(html);
		
		var people = $(".team-grid .offset1b li span");
		console.log("There are " + people.length + " people on the Prsim team. They are:\n");

		people.each(function(i, person){
			var name = $(this).children('p').first();
			var role = name.next();
			console.log(name.text() + ", " + role.text());
		});

	}
	else{
		console.log("Encountered error: " + err);
	}
});