console.time('Test');

let name = prompt("What is your name?");
       
document.getElementById('welcome').innerHTML=
'Welcome: '+ name;

///create a variale and send to console
let learning = 'learning Javascript';
console.log(learning);

//Sending an Array to the console 
console.log([1,2,3,4,5]);

//printing tje values in a table 
console.table([2,13,44,55]);

//passing aan error 
console.error('Print an Error Message Oops somthing went wrong');

console.warn('Print a  Waring in console');

console.timeEnd('Test');