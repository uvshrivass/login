const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')


app.listen(port, function(err){
    if(err) throw err;
    console.log(`Server is running at ${port}`);
});

const userRouter = require('./routes/users');

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('views'));
app.use('/',userRouter);