var express = require('express');
var router = express.Router();
var company = require('../models/company');
var companykey = require('../models/companykey');
var auth = require('basic-auth');
const uuidV1 = require('uuid/v1');
var db = require('../dbconnection');
//todo: get this shit out

router.get('/getnewapikey/:companyname', function (req, res, next) {
    console.log('in getnewAPIKey');
    console.log(req.params.companyname);

    company.getnewAPIKey(req.params.companyname, function (err, rows) {

        if (err) {
            res.json(err);
        } else {
            res.json(rows);
            // res.end(newAPIKey);
            // var apikey = 
            // res.end(apikey);
            // res.end('tttt')
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
        // res.end('Access granted')
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

        //console.log(req.body);
        if (err) {
            res.json(err);
        } else {
            res.json(req.body); //or return count for 1 & 0
        }
    });
    // company.addCompanykey(req.body, function (err, count) {        
    //     if (err) {
    //         res.json(err);
    //     } else {

    //         res.json(req.body); //or return count for 1 & 0
    //     }
    // });

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