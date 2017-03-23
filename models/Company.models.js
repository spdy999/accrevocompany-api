var db=require('../dbconnection');

var Company={

getAllCompanys:function(callback){

return db.query("Select * from companys",callback);

},
getCompanyById:function(id,callback){

    return db.query("select * from companys where Id=?",[id],callback);
},
addCompany:function(Company,callback){
   console.log("inside service");
   console.log(Company.Id);
return db.query("Insert into companys values(?,?,?)",[Company.Id,Company.name,Company.address],callback);
},
deleteCompany:function(id,callback){
    return db.query("delete from companys where Id=?",[id],callback);
},
updateCompany:function(id,Company,callback){
    return  db.query("update companys set name=?,address=? where Id=?",[Company.name,Company.address,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from companys where Id in (?)",[delarr],callback);
}
};
module.exports=Company;