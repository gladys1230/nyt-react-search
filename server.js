//dependencies
var express = require("express");
var mongoose = require("mongoose");
//body-parser
var bodyParser = require("body-parser");
var logger = require("morgan");

//requireing models
var Article = require("./models/Article.js");

//initialize express app
var app = express();
//declare port
var port = process.env.PORT || 3000;

//run Morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/hw19nytreact");

var db = mongoose.connection;


//show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error Message: ", error);
});

//once logged in to db through mongoose, log a success message
db.once("open", function() {
    console.log("YEAH!!! Mongoose connection successful.");
});

app.get("/", function(req, res) {
    res.sendFile("./public/index.html");
})

app.get("/api/saved", function(req, res) {

    Article.find({})
        .exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
            }
        })
});

app.get("/api/saved", function(req, res){
	var newArticle = new Article({
		title: req.body.title,
		date: req.body.date,
		url: req.body.url
	});

	newArticle.save(function(err, doc){
		if(err){
			console.log(err);
			res.send(err);
		}else{
			res.json(doc);
		}
	});
});

app.delete("/api/saved/:id", function(req, res){
	Article.find({"_id": req.params.id}).remove()
	.exec(function(err, doc){
		res.send(doc);
	});
});

app.listen(port, function() {
    console.log("Listening on port: " + port + "!");
});
