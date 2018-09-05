var http = require('http'); 

http.createServer(function(request, response) {
    response.writeHead(200); 
    response.write("Dog is running."); 
    setTimeout(function(){
        response.write("Dog is done.");
        response.end();
    }, 5000);
}).listen(8080); 
    
var server = http.createServer();
server.on('request', function(request, response){ ... });

http.createServer(function(request, response)) {
    response.writeHead(200);
    response.write("<p>Dog is running.</p>");
    setTimeout(function(){
        response.write("<p>Dog is done.</p>");
        response.end();
    }, 5000);
}).listen(8080); 

http.createServer(function(request, response) {
    response.writeHead(200);
    request.on('readable', function() {
        var chunk = null;
        while(null !== (chunk = request.read())) {
            response.end();
        }
    });
    request.on('end', function() {
        response.end();
    });
}).listen(8080)

$ curl -d 'hello' http://localhost:8080

var fs = require('fs'); 

var file = fs.crateReadStream("readme.md");
var newFile = fs.createWriteStream("readme_copy.md");

file.pipe(newFile); 

request.on('end', function() {
    response.end('upladed!');
}); 
}).listen(8080); 

http.createServer(function(request, response) {
    var newFile = fs.createWriteStream("readme_copy.md");
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0; 
    request.on('readable', function() {
        var chunk = null;
        while(null !== (chunk = request.read())){
            uploadedBytes += chunk.length; 
            var progress = (uploadedBytes / fileBytes) * 100;
            response.write("progress: " + parseInt(progress, 10) + "%\n");
        }
    });
    request.pipe(newFile);
}).listen(8080); 

var http = require('http');

var message = "Here's looking at you, kid.";
var options = {
    host: 'localhost', port: 8080, path: '/', method: 'POST'
}

var request = http.request(options, function(response){
    response.on('data', function(data){
        console.log(data); 
    });
});
request.write(message);
request.end(); 

var request = require('request');
var url = require('url');
app.get('/tweets/:username', function(req, response) {
    var username = req.params.username; 
    
    options = {
        protocol: "http",
        host: 'api.twitter.com',
        pathname: '/1/statuses/user_timeline.json',
        query: { screen_name: username, count: 10}
    }
    
    var twitterUrl = url.format(options); 
    request(twitterUrl).pipe(response);
}); 

app.get('/tweets/:username', function(req, response) {
    
    request(url, function(err, res, body) {
        var tweets = JSON.parse(body);
        response.locals = {tweets: tweets, name: username};
        response.render('tweets.ejs');
    });
}); 
<h1>Tweets for @<%= name %></h1>
<ul>
    <% tweets.forEach(function(tweet){ %>
    <li><%= tweet.text %></li>
    <% }); %>
</ul> 

var express = require('express'); 
var app = express(); 
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(client) {
    console.log('Client connected...');
}); 

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
}); 

server.listen(8080); 

io.on('connection', function(client) {
    client.on('join', function(name) {
        client.nickname = name;
    });
}); 

<script>
var server = io.connect('http://localhost:8080');
server.on('connect', function(data) {
    $('#status').html('Connected to chattr');
    nickname = prompt("What is your nickname?");
    
    server.emit('join', nickname);
}); 
</script> 

io.on('connection', function(client) {
    client.on('join', function(name) {
        client.nickname = name; 
    }); 
    client.on('messages', function(data) {
        var nickname = client.nickname; 
        client.broadcase.emit("message", nickname + "; " + message);
    });
}); 

var messages = [];
var storeMessage = function(name, data){
    messages.push({name: name, data: data});
    if (messages.length > 10) {
        messages.shift();
    }
}
io.sockets.on('connection', function(client) {
    client.on("messages", function(message) {
        client.get("nickname", function(error, name) {
            client.broadcast.emit("messages", name + ": " + messages);
            client.emit("messages", name + ": " + message); 
        });
    });
}); 

io.sockets.on('connection', function(client) {
client.on('join', function(name) {
    messages.forEach(function(message) {
        client.emit("messages", message.name + ": " + message.data);
        });
    });
}); 

var redis = require('redis');
var client = redis.createClient(); 

client.set("message1", "hello, yes this is dog");
client.set("message2", "hello, no this is spider"); 

client.get("message1", function(err, reply){
    console.log(reply);
}); 

var redisClient = redis.createClient();
var storeMessage = function(name, data){
    var message = JSON.stringify({name: name, data: data});
    redisClient.lpush("messages", message, function(err, response) {
        redisClient.ltrim("messages", 0, 9);
    });
}

client.on('join', function(name) {
    messages.forEach(function(message) {
        client.emit("messages", message.name + ": " + message.data);
    });
}); 

client.on('join', function(name){
    client.broadcase.emit("add chatter", name); 
}); 

socket.on('add chatter', function(name){
    var chatter = $('<li>'+name+'</li').data('name', name);
    $('#chatters').append(chatter);
}); 

client.on('join', function(name){
    client.broadcase.emit("add chatter", name); 
    redisClient.smembers('names', function(err, names){
        names.forEach(function(name){
            client.emit('add chatter', name); 
        }); 
    });
    redisClient.sadd("chatters", name); 
}); 

client.on('join', function(name){
    client.broadcase.emit("add chatter", name);
    redisClient.smembers('names', function(err, names) {
        names.forEach(function(name){
            client.emit('add chatter', name); 
        });
    });
    redisClient.sadd("chatters", name);
}); 