const express = require("express");
const app = express();

// connect to db
const mongoose = require("mongoose");
var mongoDB='mongodb://127.0.0.1/prj';
mongoose.connect(mongoDB);

mongoose.Promise=global.Promise;

var db =mongoose.connection;

db.on('connected',function(){ 
    console.log('Mongoose connection done');
});


db.on('error',function(err){
    console.log('Mongoose default connection error: ' +err);
});


// Import routes
const commonRoutes = require("./routes/commonroutes");

// Middlewares
app.use(express.json());

// route Middlewares
app.use("/", commonRoutes);

app.listen(4000, () => console.log("server up and runing on port 4000!"));
