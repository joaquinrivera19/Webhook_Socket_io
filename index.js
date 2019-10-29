var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/', function(req, res){

    let body = req.body;

    io.sockets.emit('response_socket', body);

    console.log(body);

    res.json(body);

});

app.get('/listar', function(req, res){
    res.sendFile(__dirname + '/chat.html');
});



http.listen(8080, function(){
    console.log('listening on *:8080');
});