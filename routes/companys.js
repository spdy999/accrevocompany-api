var express = require('express');
var router = express.Router();
var company = require('../models/company');
var auth = require('basic-auth');

router.get('/getnewapikey/:companyname', function (req, res, next) {
    company.getnewAPIKey(req.params.companyname, function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});

router.get('/:name?', function (req, res, next) {
    var credentials = auth(req)

    if (!credentials || credentials.name !== 'username') {
        res.statusCode = 401
        res.setHeader('WWW-Authenticate', 'Basic realm="example"')
        res.end('Access denied')
    } else {
        if (req.params.name) {
            console.log(req.params.name);
            company.getCompanyByName(req.params.name, function (err, rows) {

                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            });
        } else {
            var err = new Error('Not Found');
            err.status = 404;
            next(err);
        }
    }
});

router.post('/', function (req, res, next) {
    console.log(req.body);

    company.addCompany(req.body, function (err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});

module.exports = router;
