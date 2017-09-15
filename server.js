var express = require('express');
var app = express();
var router = express.Router();
router.get('/scrape', function(req, res) {
    url = 'https://www.flipkart.com/mobile-phones-store';
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var details = "";
            var json = { details: "" };
            console.log($("._2kSfQ4").length);
            $('._2kSfQ4').each(function() {
                details += $(this).text().trim();
                json.details = details;
            });
        }
        console.log(json);
        res.send(json);
    })
})