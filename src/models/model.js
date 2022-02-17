const mongoose = require('mongoose');

const RegistrationSchema  =  new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    Mobile:{
        type:Number,
        minlength:10,
        required:true

    },
    Gender:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },

    confirmpassword:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Address2:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Zip:{
        type:Number,
        minlength:6,
        maxlength:6,
        required:true
    },
});

//Define Models and Create Collections

const Registration = new mongoose.model('Registration', RegistrationSchema )


module.exports=Registration;