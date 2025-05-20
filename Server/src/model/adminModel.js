 const mongoose = require("mongoose");

 const Schema=mongoose.Schema;

 const admins=new Schema({
     admin_id:{
         type: Object,
     },
     admin_name:{
         type: String,
     },
     contact_number:{
         type: String,
     },
     email:{
         type: String,
     },
     password:{
         type: String ,
     },
     reports_and_analytics:{
         type: Object,
     },

 });

 module.exports=mongoose.model('admins',admins)