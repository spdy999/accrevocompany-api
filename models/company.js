var db = require('../dbconnection');
const uuidV1 = require('uuid/v1');

var company = {
    getnewAPIKey: function (name, callback) {
        console.log('getnewAPIKeyyyyyyyyyyyy')
        var newAPIKey = uuidV1();
        console.log(newAPIKey);
        console.log(name);
        // let test = db.query("UPDATE companykey SET partner_id=456 WHERE company_id=(SELECT id FROM companys WHERE name='BCCFC')");
        // let test =  db.query("UPDATE companykey SET `key`=? WHERE company_id=(SELECT id FROM companys WHERE name=?)",[newAPIKey,name],callback);
        // res.end(newAPIKey);
        // return newAPIKey;
        let test = db.query("UPDATE companykey SET `key`=? WHERE company_id=(SELECT id FROM companys WHERE name=?)",[newAPIKey,name]);
        return db.query("SELECT `key` FROM companykey WHERE company_id=(SELECT id FROM companys WHERE name=?)",name,callback);
    },
    addCompanykey: function (Companykey, callback) {
        console.log("inside addCompanykeyyyyyyyyyyy");
        console.log(Companykey);
        console.log(Companykey.id);
        console.log(Companykey.company_id);
        //[Companykey.id, Companykey.company_id, Companykey.key, Companykey.partner_id]
        let genCompanykey = [Companykey.id, uuidV1(), Companykey.partner_id];

        return db.query("Insert into companykey values(?,LAST_INSERT_ID(),?,?)", genCompanykey);
    },

    getAllCompanys: function (callback) {

        return db.query("Select * from companys;Select * from companykey;", callback);

    },
    getCompanyByName: function (name, callback) {
        return db.query("select name from companys where name=?", [name], callback);
    },
    getCompanyById: function (id, callback) {

        return db.query("select * from companys where Id=?", [id], callback);
    },
    addCompany: function (Company, callback) {
        console.log("inside addCompany service");
        console.log(Company);
        // var maxId = db.query("select max(id) from companys");
        // console.log('maxId: '+maxId);
        //[Company.id, Company.name, Company.address, Company.id13, Company.taxbr, Company.type,Company.comment, Company.contactperson, Company.contacttel, Company.year, Company.owner, Company.partner, Company.code, Company.created_at, Company.updated_at]
        let companyData = [Company.id, Company.name, Company.address, Company.id13, Company.taxbr, Company.type, Company.comment, Company.contactperson, Company.contacttel, Company.year, Company.owner, Company.partner, Company.code, Company.created_at, Company.updated_at];
        // let genCompanykey = [Companykey.id, maxId, uuidV1(), Companykey.partner_id];
        let combination = [Company.id, Company.name, Company.address, Company.id13, Company.taxbr, Company.type, Company.comment, Company.contactperson, Company.contacttel, Company.year, Company.owner, Company.partner, Company.code, Company.created_at, Company.updated_at, Company.id, uuidV1(), Company.partner_id];
        // return db.query("Insert into companys values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",companyData , callback);

        return db.query("Insert into companys values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);Insert into companykey values(?,LAST_INSERT_ID(),?,?)", combination, callback);
    },
    deleteCompany: function (id, callback) {
        return db.query("delete from companys where Id=?", [id], callback);
    },
    updateCompany: function (id, Company, callback) {
        return db.query("update companys set name=?,address=? where Id=?", [Company.name, Company.address, id], callback);
    },
    deleteAll: function (item, callback) {

        var delarr = [];
        for (i = 0; i < item.length; i++) {

            delarr[i] = item[i].Id;
        }
        return db.query("delete from companys where Id in (?)", [delarr], callback);
    }
};
module.exports = company;