const candyMachineScraper = require('candymachinescraper');

async function test() {
    var url = 'https://mintsite.com';
    await candyMachineScraper.getScript(url, function(data) {
        console.log(data);
        // {
        //   state: 'success',
        //   data: '2QcWbuQTyfEDdHHhpgfoXfptkFipE5J1SqQiZxvZERuR'
        // }
    });
}

test();