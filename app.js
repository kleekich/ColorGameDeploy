var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/public'));
//app.set("view engine", "ejs");
//app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname +"/public/colorGame.html"));
})

app.listen(3000, 'localhost', function(){
	console.log("Server started!");
})