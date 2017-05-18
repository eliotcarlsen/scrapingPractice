var request = require('request');
var cheerio = require('cheerio');
    var url = 'https://www.recreation.gov/permits/Enchantment_Permit_Area/r/wildernessAreaDetails.do?page=detail&contractCode=NRSO&parkId=72280';

    request(url, (function(err, resp, body) {
      console.log("here");
        $ = cheerio.load(body);
        console.log(body);
        console.log("past cheerio");
        // $("content").each(function(){
        //   $(this).find('h3').each(function(){
        //     console.log("in find");
        //   });
        //
        // })
        console.log('end');
    }));
    // for (pool in pools) {
    //     var url = 'http://www.thprd.org/schedules/schedule.cfm?cs_id=' + pools[pool];
    //
    //     request(url, (function(pool) { return function(err, resp, body) {
    //         $ = cheerio.load(body);
    //         $('#calendar .days td').each(function(day) {
    //             $(this).find('div').each(function() {
    //                 event = $(this).text().trim().replace(/\s\s+/g, ',').split(',');
    //                 if (event.length >= 2 && (event[1].match(/open swim/i) || event[1].match(/family swim/i)))
    //                     console.log(pool + ',' + days[day] + ',' + event[0] + ',' + event[1]);
    //             });
    //         });
    //     }})(pool));
    // }
