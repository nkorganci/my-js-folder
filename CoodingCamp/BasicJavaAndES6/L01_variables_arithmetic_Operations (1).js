//console.clear();
//======================COMMENTS===========================

var name = "Mark"; // in-line comment

/*
multi line
comment*/

var volume = 20;


// ===============DATA TYPES AND VARIABLES   --VAR   LET   CONT -- ===================

/*
            There are 7 data types in javascript
1-undefined, 2-null, 3-boolean, 4-String, 5-symbol, 6-number, 7-object
*/

//var: can be used through all the programs , it is global
var myName = "jhos";
myName = "Mar";
myName = 3;
console.log(myName)
myName = ''
console.log(myName)

//let: can be used in the scope where you declare that.
let number1 = 4;
console.log(number1);
//let number1=6; // You can declare just one time, has already been declared
number1 = 6;
console.log(number1);// But you can reassign 

//It can never change
const number2 = 3.14;

console.log(number2);
//number2 = 5.14;// You can not assign again to a constant.

// ===============Storing values with Assignments Operations===================

var a; // Declaring a variable
console.log(a);//undefined

var b = 2;// assignment of a variable, initializing of variable.
console.log(b);

b = b + 2;
console.log(b);


var b = 3;//I can declare and assign again, no problem.
console.log(b);
a = b;

//Variable names and function names are case sensitive
var fData = 2;
//fdata=5;//will give error, variable names are case sensitive
//console.log(fdata);// fdata is not defined.


// ===============--   ARITHMETIC OPERATIONS   -- ==============================

//Arithmetic Operations
var a = 7 / 3;
console.log(a);
var a = 6 / 3;
console.log(a);

//Increment and Decrement
var a = a + 1;//3
console.log(a);
a++;
console.log(a);

a = a + 4;
a += 4;// same with a=a+4;

a = a - 4;
a -= 4;// same

a = a * 4;
a *= 4;// same

//Decimal Numbers
var decimal = 2.5 * 3;
console.log(decimal);

//Reminder %
var reminder = 11 % 3;
console.log(reminder);