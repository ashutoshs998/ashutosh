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
            var json = [];
            var pname = "";
            var other_details = "";
            var current_price = "";
            console.log($("._2kSfQ4").find(".iUmrbN").length);
            $('._2kSfQ4').each(function() {
                pname = $(".iUmrbN").text().trim();
                other_details = $(".BXlZdc").text().trim();
                current_price = $("._3o3r66").text().trim();
                var tempdata = {
                    name: pname,
                    odetails: other_details,
                    price: current_price
                }
                json.push(tempdata);
            });
        }
        res.send(json);
    })
})
module.exports = router;