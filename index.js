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
