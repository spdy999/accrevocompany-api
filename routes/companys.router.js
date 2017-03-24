var express = require('express');
var router = express.Router();
var company = require('../models/company.models');
var auth = require('basic-auth');

router.get('/:name?', function (req, res, next) {
    var credentials = auth(req)

    if (!credentials || credentials.name !== 'john') {
        res.statusCode = 401
        res.setHeader('WWW-Authenticate', 'Basic realm="example"')
        res.end('Access denied')
    } else {
        // res.end('Access granted')
        if (req.params.name) {
            company.getCompanyByName(req.params.name, function (err, rows) {

                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }
            });
        } else {

            company.getAllCompanys(function (err, rows) {

                if (err) {
                    res.json(err);
                } else {
                    res.json(rows);
                }

            });
        }
    }


});
router.post('/', function (req, res, next) {

    company.addCompany(req.body, function (err, count) {

        //console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
});
router.post('/:id', function (req, res, next) {
    company.deleteAll(req.body, function (err, count) {
        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }
    });
});
router.delete('/:id', function (req, res, next) {

    company.deleteCompany(req.params.id, function (err, count) {

        if (err) {
            res.json(err);
        } else {
            res.json(count);
        }

    });
});
router.put('/:id', function (req, res, next) {

    company.updateCompany(req.params.id, req.body, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });
});
module.exports = router;