var db = require('../dbconnection');
const uuidV1 = require('uuid/v1');

var company = {
    addCompanykey: function (Companykey, callback) {
        console.log("inside addCompanykeyyyyyyyyyyy");
        console.log(Companykey);
        console.log(Companykey.id);
        console.log(Companykey.company_id);
        //[Companykey.id, Companykey.company_id, Companykey.key, Companykey.partner_id]
        let genCompanykey = [Companykey.id,Companykey.company_id, uuidV1(), Companykey.partner_id];

        return db.query("Insert into companykey values(?,?,?,?)",genCompanykey );
    },

    getAllCompanys: function (callback) {

        return db.query("Select * from companys", callback);

    },
    getCompanyByName: function (name, callback) {
        console.log()

        return db.query("select name from companys where name=?", [name], callback);
    },
    getCompanyById: function (id, callback) {

        return db.query("select * from companys where Id=?", [id], callback);
    },
    addCompany: function (Company, callback) {
        console.log("inside addCompany service");
        console.log(Company.Id);

        return db.query("Insert into companys values(?,?,?,?,?,?,?,?,?,?)", [Company.Id, Company.name, Company.address, Company.id13, Company.taxbr, Company.type, Company.year, Company.owner, Company.partner, Company.code], callback);
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