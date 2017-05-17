var request = require('request');
var cheerio = require('cheerio');
    var url = 'https://www.recreation.gov/permits/Enchantment_Permit_Area/r/wildernessAreaDetails.do?page=detail&contractCode=NRSO&parkId=72280';

    request(url, (function() { return function(err, resp, body) {
      console.log("here");
        $ = cheerio.load(body);
        $('#content').text(function() {
            console.log('eys')
        });
    }}));
