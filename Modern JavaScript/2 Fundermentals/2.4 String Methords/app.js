const Leaerning ="Learning Javascript is Great";

const email="mwakaben@gmail.com"

let output;

//Length of the Charactres 
output= Leaerning.length;

//concatenation
let output2;
output2=Leaerning.concat(" ","and fun");

//UpperCase 
let output3=Leaerning.toUpperCase();

//LowerCase
let output4=Leaerning.toLowerCase();

//Index  of 
let output5=Leaerning.indexOf("Javascript");

//Advanced example using Index of to Check an email
let output6=email.indexOf("@");
if (output6>0){
 console.log("Valid email");
}else{
 console.log("Invalid Email address");
}

//Substring to Trim text
let output7=Leaerning.substring(0,8); //From Begining
let output8=Leaerning.substring(4,8); //From 4th Character

//Trimming from the End
let output9=Leaerning.substring(Leaerning.length -5);

//Slice
let output10= Leaerning.slice(0,10);
let output11=Leaerning.slice(-5);

//Slit
let output12=Leaerning.split(" ");
//eXAMPLE USING SLIPP

let hobbies ="read, Walk, Listen to Music, Luagh,learn, write a program"
let output13=hobbies.split(",");

//Replace
let output14 = Leaerning.replace("Javascript","Mordern JavaScript"); //Replaces Text

///Includes
let output15 = Leaerning.includes("Javascript");
let output16=Leaerning.includes('PHP'); //Checking for a value but reurns true or False

//Repeaet
let greet="Hello, How are you";
let output17=greet.repeat(7); //Repeats the Text 7 times



console.log(output);
console.log(output2);
console.log(output3);
console.log(output4);
console.log(output5);
console.log(output6);
console.log(output7);
console.log(output8);
console.log(output9);
console.log(output10);
console.log(output11);
console.log(output12);
console.log(output13);
console.log(output14);
console.log(output15);
console.log(output16);
console.log(output17);


