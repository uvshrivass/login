const mongoose = require("mongoose");

module.exports= mongoose.connect('mongodb://ujjwal:connectmenow123@ds113866.mlab.com:13866/logindetails',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})