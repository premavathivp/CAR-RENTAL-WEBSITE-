 const mongoose = require("mongoose");

 const Schema=mongoose.Schema;

 const cars=new Schema({
     car_id:{
         type: Object,
     },
     car_name:{
         type: String,
     },
     dealer_id:{
         type: Object,
     },
     brand:{
         type: String,
     },
     model:{
         type: String,
     },
     year:{
         type: Number,
     },
     licence_plate:{
         type: String,
     },
     fuel_type:{
         type: String,
     },
     transmission:{
         type: String,
     },
     price_per_day:{
         type: Number,
     },
     availability_status:{
         type: String,
     },
     location:{
         type: Object,
     },
     car_type:{
         type: String,
     },
     features:{
         type: String,
     },
     insurance_details:{
         type: String,
     },
     condition_report:{
         type: String,
     },
     rating_and_reviews:{
         type: Number,
     },
 });

 module.exports=mongoose.model('cars',cars)