//dependencies
var express = require("express");
var mongoose = require("mongoose");

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/hw19nytreact");
var db = mongoose.connection;

//show any mongoose errors
db.on("error", function(error){
    console.log("Mongoose Error Message: ", error);
});

//once logged in to db through mongoose, log a success message

db.once("open", function() {
    console.log("YEAH!!! Mongoose connection successful.");
});


//initialize express app
var app = express();


//body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));

//set up Express Router
var router = express.Router();

//require routes file pass router obj
require("./config/expressRoutes")(router);

app.use(router);

//requireing models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

//declare port
var port = process.env.PORT || 3000;


app.use(express.static(process.cwd() + "/public"));

app.listen(port, function(){
	console.log("Listening on port: " + port + "!");
});
