var express = require('express');
var app = express();
var router = express.Router();
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
router.get('/scrape', function(req, res) {
    url = 'https://www.flipkart.com/mobile-phones-store';
    request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var details = "";
            var json = { details: { name: "", price: "" } };
            var name = "";
            console.log($("._2kSfQ4").find(".iUmrbN").length);
            $('._2kSfQ4').each(function() {
                pname = $(".iUmrbN").text().trim();
                discount_price = $(".BXlZdc").text().trim();
                current_price = $("._3o3r66").text().trim();
                details += $(this).text().trim();
                json.details.name = pname;
                json.details.price = current_price;
            });
            console.log(name);
        }
        res.send(json);
    })
})
module.exports = router;