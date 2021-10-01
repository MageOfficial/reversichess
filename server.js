var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app)
var io = require('socket.io')(http);

const port = process.env.PORT || 8080;



io.on('connection', function(socket) {
    console.log('new connection ' + socket);

    socket.on('move',function(msg){
        console.log(msg)
        socket.broadcast.emit('move',msg);
    });

});


app.get('/', function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, function(){
    console.log('listening on *: ' + port)
});