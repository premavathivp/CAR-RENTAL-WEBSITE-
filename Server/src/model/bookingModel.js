 const mongoose = require("mongoose");

 const Schema=mongoose.Schema;

 const bookings=new Schema({
     booking_id:{
         type: Object,
     },
     car_id:{
         type: Object,
     },
     member_id:{
         type: Object,
     },
     dealer_id:{
         type: Object,
     },
     start_date:{
         type: Date,
     },
     end_date:{
         type: Date,
     },
     total_amount:{
         type: Number,
     },
     status:{
         type: String,
     },
 });

 module.exports=mongoose.model('bookings',bookings)