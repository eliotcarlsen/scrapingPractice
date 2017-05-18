$(document).ready(function(){
  $.get('https://www.recreation.gov/permits/Enchantment_Permit_Area/r/permitCalendar.do?page=calendar&contractCode=NRSO&parkId=72280', function(response){
    console.log(response);
  });


  });



    // var url = 'https://www.recreation.gov/permits/Enchantment_Permit_Area/r/permitCalendar.do?page=calendar&contractCode=NRSO&parkId=72280';
    //
    // (url, (function(err, resp, body) {
    //   console.log("here");
    //   console.log(body);
    //   console.log("past cheerio");
    //   $("body").each(function(){
    //     message = $(this).text();
    //     console.log("These are some of our results: " + message);
    //   })
    //   console.log('end');
    // }));
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
    // .trim().replace(/\s\s+/g, ',').split(',')
