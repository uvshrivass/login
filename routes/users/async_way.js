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

// Async way of encrypting and storing password 
bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
        // Store hash in your password DB.
        var user = new Visitor();
        user.email = req.body.email;
        user.password = hash;
        
        user.save(function(err){
            if(err){
                throw err;
            }
            else{
                res.sendFile("/home/ujjwal/Desktop/THS/Week9/login/views/signup.html");
            }
        });
    });
});
module.exports = User;


