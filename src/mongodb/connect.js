//import mongoose from 'Mmongoose';
const mongoose= require('mongoose');
mongoose.connect("mongodb://0.0.0.0:27017/Registration-Form")
.then(()=> {
    console.log("connection is created Successfully...")
})
.catch((err) => {
console.log("server is not connected", err)

});