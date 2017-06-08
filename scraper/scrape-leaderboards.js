var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://psnprofiles.com/game-leaderboard/5864-nier-automata", function(error, response, body) {
  if(error) {
    console.log("Error: " + error);
  }
  console.log("Status code: " + response.statusCode);

  var $ = cheerio.load(body);

  $('tr.me:has(td.rank)').each(function( index ) {
    var data = $(this);
    var country = data.children().eq(2).children().first().attr('title');
    console.log("Country: " + country);
  });

});