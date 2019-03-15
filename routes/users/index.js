const express = require('express');
const User = express.Router();

const bodyParser = require('body-parser');
const dbConnect= require("/home/ujjwal/Desktop/THS/Week9/login/dbconnect.js");
const Visitor = require("/home/ujjwal/Desktop/THS/Week9/login/models/user.js");

const bcrypt = require('bcrypt');
const saltRounds = 10;;

const path = require("path");


User.get('/index', function(req, res, next){
    res.sendFile("/home/ujjwal/Desktop/THS/Week9/login/views/index.html");
});

// Synchronous way of encrypting and storing password
User.post("/signup",function(req,res,next){
    var user = new Visitor();
    user.email = req.body.email;

    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);

    user.password = hash;

    user.save(function(err){
        if(err){
            throw err;
        }
        else{
            res.sendFile("/home/ujjwal/Desktop/THS/Week9/login/views/signup.html");
        }
    });
    
})

module.exports = User;


