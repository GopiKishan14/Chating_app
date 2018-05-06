var express = require('express');
var app = require('express')();

var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io  = require('socket.io')(http);
//var app = express();


//config
app.set("view engine" , "ejs");
app.use(express.static("public"));




//Routes

app.get('/' , function (req , res) {
	// body...
	res.render ('index');
});

io.on('connection' , function(socket){
	console.log('a user is connected');

	socket.on('disconnect' , function(){
		console.log('user disconnected');
	});
	
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});






http.listen(3000, function(){
	console.log('listening on *:3000 port');

});


