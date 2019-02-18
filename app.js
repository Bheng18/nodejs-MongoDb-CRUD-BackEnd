const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config/database');

const port = 5000;
const app = express();

//database configuration
mongoose.Promise = global.Promise;
mongoose.connect(config.database, { useNewUrlParser: true })
        .then(() => {
            console.log('Connected to MongoDb');
        })
        .catch((err) => {
            console.log(err, "can't connect to MongoDb ");
        })
//configurration of body parser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
app.use('/', require('./routes/employeeRoute'));
app.listen(port, (err)=>{
    if(err){
       console.log(err, "Can't connect to server");
    }else{
       console.log(`Connected on port ${port}`); 
    }
})

