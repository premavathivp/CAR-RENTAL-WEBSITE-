const mongoose = require("mongoose");

const Schema=mongoose.Schema;

const members=new Schema({
    member_id:{
        type: Object,
    },
    member_name:{
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
    role:{
        type: String,
    },
    driving_licence_number:{
        type: String,
    },
});

module.exports=mongoose.model('members',members)