var db=require('../dbconnection'); //reference of dbconnection.js

var Sensor={

getAllSensors:function(callback){
    return db.query("Select * from tb_sensors order by id desc",callback);
},

getLastHour:function(callback){
    return db.query("SELECT `id`, `dht_humidity`, `dht_temperature`, `sct_current`, `sct_powerrate`, DATE_FORMAT(dt_created -hour(1),'%d-%m-%Y %k:%i') as dt_created from tb_sensors WHERE dt_created > (now()-INTERVAL 1 HOUR)  ORDER BY id desc",callback);
},

getToday:function(callback){
    return db.query("select `id`, `dht_humidity`, `dht_temperature`, `sct_current`, `sct_powerrate`, DATE_FORMAT(dt_created -hour(1),'%d-%m-%Y %k:%i') as dt_created from tb_sensors where DATE_FORMAT(dt_created, '%Y-%m-%d') =CURDATE()",callback);
},

getYesterday:function(callback){
    return db.query("select `id`, `dht_humidity`, `dht_temperature`, `sct_current`, `sct_powerrate`, DATE_FORMAT(dt_created -hour(1),'%d-%m-%Y %k:%i') as dt_created from tb_sensors where DAYOFYEAR(DATE_FORMAT(dt_created, '%Y-%m-%d')) = (DAYOFYEAR(NOW())-1)",callback);
},

getLast24:function(callback){
    return db.query("SELECT `id`, `dht_humidity`, `dht_temperature`, `sct_current`, `sct_powerrate`, DATE_FORMAT(dt_created -hour(1),'%d-%m-%Y %k:%i') as dt_created  FROM tb_sensors WHERE dt_created > DATE_SUB(NOW(), INTERVAL 24 HOUR)",callback);
},


getSensorById:function(id,callback){
    return db.query("select * from tb_sensors where Id=?",[id],callback);
}

};
 module.exports=Sensor;
