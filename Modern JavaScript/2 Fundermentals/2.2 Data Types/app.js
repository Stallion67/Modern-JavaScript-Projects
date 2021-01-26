let variable='Ben Okello';//String
variable='20';  //number

//changing the datatype by assinging anothter Value
variable=20;  //number
variable=-150.88;  //Float, decimal , int aare all started as numbers
variable=20;  //number

//boolean
variable=true; 

//undefined
variable= undefined; 
let person; //resturns null since it is not assigned a value

//symbol
variable=Symbol('My new symbol') 

//Null
variable=null;  //null are treated as objects

//Arrays
let ProgramingLanguage=['Html','Js','PHP','C#']; //Arrays are of Type Object

//Objects
let person={
    name:'Ben Okello Mwaka',
    country:'Mexico',
    region:'Central',
    city:'Entebbe'
}

//Dates
let today= new Date(); /// Dates are also of datatype Object

console.log(variable);
console.log(typeof variable);