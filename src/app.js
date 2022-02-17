//import Express from 'express';
const express= require('express');
const app= express();
const path= require('path');
const hbs = require("hbs");
//const bodyParser = require('body-parser')

const port = process.env.PORT || 3000;

//Connection with external Files
const mongodb= require('./mongodb/connect')
const Registartion= require('./models/model');
const Registration = require('./models/model');


//Middleware Connection

const views_path = path.join(__dirname, "../Template/views")
const partials_path =  path.join(__dirname, "../Template/partials")
//const static_path = path.join(__dirname, "../public/registrationform.html")
//console.log(path.join(__dirname, "../public"))

//app.use(express.static(static_path)); // For Static webpage

//For dynamic webpage
app.set("view engine", "hbs");
app.set("views", views_path);
hbs.registerPartials(partials_path);

//Middleware

app.use(express.json());
app.use(express.urlencoded({extended:false}))

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));


app.get("/",(req, res) => {
    res.render("index")

});


app.get("/registration",(req, res) => {
    res.render("registration")

});


app.post('/registration', async(req, res)=>{
    try{
        const password= req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword){

            const registrationData = new Registration({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                gender:req.body.gender,
                address:req.body.address,
                address2:req.body.address2,
                city:req.body.city,
                mobile:req.body.mobile,
                zip:req.body.zip,
                state:req.body.state,
                email:req.body.email
            });

            const registerd = await registrationData.save();
            res.status(201).render("index");

        }else{
            res.send("Password not matched");
        }
     

    }catch(error){
       
        res.status(404).send("Page Not Found!")
    }
})
app.get("/login",(req, res) => {
    res.render("login")

});

//app.get("/",(req, res) => {
    //res.render("registrationform.html")
  //  res.sendFile(path.join(__dirname, "../public/registrationform.html"))
//});




app.listen(port, () => {
    console.log(`server is running on this port no ${port} `);
})