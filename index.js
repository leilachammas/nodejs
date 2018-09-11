// the net ninja 

console.log('hey ninjas');
// computers don't understand javascript
// a javascript engine takes js and converts it into something the
// machine can understand

var time = 0; 

setTimeout(function(){
    time += 2; 
    console.log(time + ' seconds have passed');
    if(time >5){
        clearInterval(timer); 
    }
}, 2000); 

// lesson 4
console.log(__dirname); // this tells you which directory you're in 
console.log(__filename); // this tells you which file you're in (?)

// lesson 5 
// normal function statement 
function sayHi(){
    console.log('hi');
}
sayHi(); 

// function expression 
var sayBye = function(){
    console.log('bye');
};
sayBye(); 

function callFunction(fun){
    fun();
}
callFunction(sayBye); 

// lesson 6 modules and require()
var counter = function(arr){
   return 'there are ' + arr.length + ' elements in this array'; 
}; 
console.log(counter(['leila', 'crystal', 'alice']));
// the above code counts all the elements in the array and displays them 
module.exports = counter; // this allows counter to be available outside of this module

// lesson 7 
var counter = require('./counter');
console.log(counter(['leila', 'crystal', 'alice']));

var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
}; 
var adder = function(a,b){
    return `the sum of the 2 numbers is $(a+b)`;
};

var pi = 3.142; 

module.exports = counter; 

var stuff = require('./stuff'); 
console.log(stuff.counter(['one thing', 'two things', 'three things']));
console.log(stuff.adder(5,6));
console.log(stuff.adder(stuff.pi, 5)); 

//lesson 8 
var events = require('events'); 

// element.on('click', function(){})

var myEmitter = new events.EventEmitter(); 
myEmitter.on('someEvent', function(mssg){});
console.log(mssg); 
}); 
myEmitter.emit('someEvent', 'the event was emitted');

var util = require('util');
var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var people = [james, mary, ryu]; 
people.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    })
});
james.emit('speak', 'hey dudes'); 

// lesson 9, reading and writing files (fs)

var fs = require('fs'); 
fs.readFileSync(); 
var readMe = fs.readFileSync('readMe.txt', 'utf8');
fs.writeFileSync('writeMe.txt', readMe);
console.log(data);
}); 
console.log('test'); 

// lesson 10 creating and removing directories 
var fs = require('fs'); 
fs.unlink('writeMe.txt'); // this deletes a file 
fs.mkdirSync('stuff'); // creates a directory 
fs.rmdirSync('stuff'); // removes a directory 
fs.mkdir('stuff', function(){
    fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data);
    });
}); // creates an asynchronos directory (?) so you need a callback 

// lesson 11 clients and servers 

// lesson 12 creating a server 

var htt = require('http'); 
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hey ninjas'); 
});

server.listen(3000, '127.0.0.1'); 
console.log('now listening to port 3000'); 