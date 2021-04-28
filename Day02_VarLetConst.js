/*
What is the difference between null and undefined???
-Null is a value(object)
-Null assigned but has no actual value like string
-Undefined : A variable is declared but is not assigned or initilized.
Not assigned to a value
*/
/*
//Var Let Const
var
let
const
*/
console.clear();
// 1. var
var num= 5;
console.log(num);//5
var num= 10;
console.log(num);//10
num="TechPro";
console.log(num);//"TechPro"
//2.let
let num1=50;
console.log(num1);
// let num1=55;//"SyntaxError: Identifier 'num1' has already been declared
// console.log(num1)
num1=true;
console.log(num1);
let num2=60;
console.log(num2)
//3. const
const num3=3.14
console.log(num3)
num3=4;//Assignment to constant variable.
console.log(num3)
