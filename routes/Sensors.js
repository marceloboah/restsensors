var express = require('express');
 var router = express.Router();
 var Sensor=require('../models/Sensor');

 router.get('/all',function(req,res,next){

         Sensor.getAllSensors(function(err,rows){

               if(err)
                 {
                 res.json(err);
                 }
                 else{
                 res.json(rows);
                 }
        });
  });

  router.get('/lasthour',function(req,res,next){

          Sensor.getLastHour(function(err,rows){

              if(err)
                {
                res.json(err);
                }
                else
                {
                res.json(rows);
                }

          });
 });



  router.get('/today',function(req,res,next){

          Sensor.getToday(function(err,rows){

                if(err)
                  {
                  res.json(err);
                  }
                  else{
                  res.json(rows);
                  }
         });
   });

   router.get('/yesterday',function(req,res,next){

           Sensor.getYesterday(function(err,rows){

                 if(err)
                   {
                   res.json(err);
                   }
                   else{
                   res.json(rows);
                   }
          });
    });

    router.get('/last24',function(req,res,next){

            Sensor.getLast24(function(err,rows){

                  if(err)
                    {
                    res.json(err);
                    }
                    else{
                    res.json(rows);
                    }
           });
     });


 module.exports=router;
