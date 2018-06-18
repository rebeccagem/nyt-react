const router = require("express").Router();
const request = require("request");

router.route("/:searchTerm/:startYear/:endYear")
    .get(function (req, res) {

        request.get({
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
            qs: {
                'api-key': "8e5a196629ad4b5b8f11509c065387ef",
                'q': req.params.searchTerm,
                'begin_date': req.params.startYear,
                'end_date': req.params.endYear,
                'sort': "newest"
            },
        }, function (err, response, body) {

            if (!error && response.statusCode === 200) {
                body = JSON.parse(body);
                console.log(body);

                res.json(body);
            } else {
                console.log(error);
                body = {};
            };
        })

    });

module.exports = router;