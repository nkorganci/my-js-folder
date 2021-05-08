/* =====================COMPARISONS=========================
NOTE: 
 === and !== check values and data types
 NOTE: 
JS converts string values to number value when we compare them
*/

console.clear();
const x=1;
console.log(typeof(x));//number
const y="1";
console.log(typeof(y));//string
console.log(x==y);//true. comparing only values
console.log(x!=y);//false
console.log(x===y);//false. comparing the values and types
console.log(x!==y);//true
console.log(x>=1);//true
console.log(y>=1);//true
 



//=============================TERNARY==========================
/* 
(expression) ? x(if expression is true print this) : y(if expression is false print this)
*/
const x=5; y=6;
x>y ? console.log('x is greater than 5'): console.log('x is not greater than 5'); 
const isExpensive = x>4 ? 'Expensive' : 'Cheap';
console.log(isExpensive);
const isExpensive1 = x>4 ? (y<4 ? 'y is less than 4' : 'y is not less than 4') : 'Cheap';
console.log(isExpensive1);



//--> Random Number Generator in JS
//Math.random(); Generates a num between 0 and 1.  (0-0.999999..)
var num=Math.random();
console.log(num);

    num=num*10;
console.log(num);

num=Math.floor(num);//this can be never 10.
console.log(num);

//Code to get random number between 0 and 5
var num1=Math.random();
console.log(num1);
num*=5;//it can not get a number 5
console.log(num1);
num*=6;//This can get numbers between 0-5
console.log(num1);
