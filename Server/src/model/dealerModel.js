 const mongoose = require("mongoose");

 const Schema=mongoose.Schema;

 const dealers=new Schema({
     dealer_id:{
         type: Object,
     },
     dealer_name:{
         type: String,
     },
     email:{
         type: String,
     },
     password:{
         type: String,
     },
     contact_number:{
         type: String,
     },
     address:{
         type: Object,
     },
     status:{
         type: String,
     },
 });

 module.exports=mongoose.model('dealers',dealers)