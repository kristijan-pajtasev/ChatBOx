var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/test', function(req, res){
	
	
});

app.listen(3000);