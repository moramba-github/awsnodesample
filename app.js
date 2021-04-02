require('rootpath')();
var express = require('express');
var app = express();
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;

app.get('/', function(req, res){
   res.send("Hello world! Node running");
});

app.listen(port, function () {
   
console.log("Example app listening at http://localhost:"+port)
 })