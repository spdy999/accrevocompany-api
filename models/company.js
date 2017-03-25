var db = require('../dbconnection');
const uuidV1 = require('uuid/v1');

var company = {
    getnewAPIKey: function (name, callback) {
        var newAPIKey = uuidV1()+'12345678901234';
        console.log(newAPIKey);
        let test = db.query("UPDATE companykey SET `key`=? WHERE company_id=(SELECT id FROM companys WHERE name=?)",[newAPIKey,name]);
        return db.query("SELECT `key` FROM companykey WHERE company_id=(SELECT id FROM companys WHERE name=?)",name,callback);
    },
    getCompanyByName: function (name, callback) {
        return db.query("select name from companys where name=?", [name], callback);
    },
    addCompany: function (Company, callback) {
        let date = (new Date()).toISOString().substring(0, 19).replace('T', ' ');                                                                                                                                                                                                                                         //todo: fix wrong format here                   
        let combination = [Company.id, Company.name, Company.address, Company.id13, Company.taxbr, Company.type, Company.comment, Company.contactperson, Company.contacttel, Company.year, Company.owner, Company.partner, Company.code, date, date, Company.id, uuidV1()+'12345678901234', Company.partner_id];

        return db.query("Insert into companys values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);Insert into companykey values(?,LAST_INSERT_ID(),?,?)", combination, callback);
    }
};
module.exports = company;