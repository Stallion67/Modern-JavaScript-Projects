//Numbers 
const number1=30,
      number2=254,
      number3=-25;
    
console.log(number1);

//addition
let result = number1 + number2; 
 console.log (result);

 //subtraction
let result1 = number1 - number2; 
console.log (result1);

//Multiplication
let result2 = number1 * number3; 
 console.log (result2);

 //Division
let result3 = number2 + number1; 
console.log (result3);

//Modulus
let result4= number2 %number1;
console.log(result4);


//advanced additions
//Pie
let result5 =Math.PI
console.log(result5);

//rounding using round
 result5= Math.round(2.4);
 console.log(result5);

//rounding up
result5= Math.ceil(2.4);
 console.log(result5);

 //rounding down
result5= Math.floor(2.8);
console.log(result5);

//Square root
result5=Math.sqrt(144);
console.log(result5);

//abs number
result5=Math.abs(number3);
console.log(result5);

//Power 4 to Power 7
result5 =Math.pow(4,7);
console.log(result5);

//get the minimun number from a list
result5=Math.min(140,34,22,857,18,949,);
console.log(result5);

//get the maximum number from a list
result5=Math.max(140,34,22,857,18,949,);
console.log(result5);

//operators
result5=20 + 30 * 2;
console.log(result5);

result5=(20 + 30) *2;
console.log(result5);

/*Example 1
20% discount from a shopping cart
*/
 const cartItems = (20+30+15+45+48);
 const discount =(cartItems/100)* 20;
 const totalPay= cartItems-discount;
 
 //Printing the results
 console.log('Total: '+ cartItems);
 console.log("Discount: "+ discount);
 console.log('Pay: $'+totalPay);

/*Example 2
Video game score
*/
 let score=5;
 console.log(score);
  
 score++;
 console.log(score);

 ++score;  /// this is best used for addition
 console.log(score);

 --score;
 console.log(score);

 score += 10;
 console.log(score);
