//Converting Strings into Numbers
const number1='50',
      number2=10,
      number3='Nine';
console.log(number1 + number2);
 
//converting number1 into number
console.log(Number(number1)+number2);
console.log(parseInt(number1)+number2); // using parse int

console.log(number3);
console.log(Number(number3)); //Result- NaN (Not a Number)

// number and string when using + and -
console.log(number1 + number2);// Concatenates the values becuase ot + sign
console.log(number1 - number2); // Js automatically converts string into number if -(minus sign) used.


let number
number=Number('20');
console.log(number);
console.log(typeof number);

number=Number('20.2020'); 
console.log(number);
console.log(typeof number);

number=Number(true);
console.log(number);
console.log(typeof number);

number=Number(false);    //bolean true
console.log(number);
console.log(typeof number);
  
number=Number(null);    // boolean false
console.log(number);
console.log(typeof number);

number=Number('Hello World Today'); //string
console.log(number);
console.log(typeof number);

number=Number(1,2,3,4,5); // Array
console.log(number);
console.log(typeof number);

//Pasre Int and Parse Float
number=parseInt('150');
console.log( number);
console.log(typeof number);

number=parseInt('150.56');
console.log( number);
console.log(typeof number);

number=parseFloat('150.873');
console.log( number);
console.log(typeof number);

//TO Fixed  it is only available in number
let number5='91238763.83', 
    number6=91238763.3998474;

console.log(Number(number5).toFixed());

console.log(Number(number5).toFixed(2));

console.log(Number(number6).toFixed(5)); //number of decimals














