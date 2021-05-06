//Functions
console.clear();

//--> Reusable JavaScript with Functions

function f() {

    console.log("call function");
    var a = 2;
    console.log(a)
}

f();//You can call as much as you want

//--> Passing Values to Functions with Arguments

function f1(a, b) {
    console.log(a, b);
}
f1(5, 9);


function f2(a, b) {
    var c = a + b;
    console.log(c);
}
f2(5, 9);


function f3(a, b) {
    console.log(a * b);
}
f3(5, 9);
            
/* --------------Global Scope and Functions ---------------
If a variable defined outside of a function, it is called global scope

1-Variables which are defined outside of a function block have Global scope.
2-Variables which are used without the var keyword are automatically created in the global scope.
*/

console.clear();
var a = 1;//Global variable
var b = 2;
function localGlobalVariable() {
    var c = 3; //local variable
    d = 4;// global variable, has no var
    console.log(d);
    console.log(a + c + d);
};

localGlobalVariable();//3

console.log(c);//Error, because it is defined as local
console.log(d);


/* --------------Local Scope and Functions ---------------*/



/* It is possible to have both local and global variables with the same name. 
When you do this, the local variable takes precedence over the global variable.*/
var global = "Global";

function local() {
    var global = "Local";
    return global;

}

console.log(local());//print Local
console.log(global1);//Print Global


var global1 = "Global";//Global printed

function local1() {

    return global1;
}

console.log(local1());

/* --------------Return a Value from a Function with Return ---------------*/


function subtraction(num) {
    return num - 3;
}
console.log(subtraction(4));

//Undefined return

var sum=0;
function add(num) {
    sum=sum+num;
}
console.log(add(3));// undefined, has no return


//Assignment with a Returned Value
var a=3;
function assignToReturn(num) {
    return a+num;
}

var b= assignToReturn(3);
console.log(b);

/* --------------Stand in Line,  queue, JSON.stringify() ---------------*/
//New items can be added at the back of the queue and old items are taken off from the front of the queue.
//The JSON.stringify() method converts a JavaScript object or value to a JSON string, 

function q(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1, 2, 3];
console.log("Before: " + JSON.stringify(testArr));
console.log(q(testArr, 6));
console.log("After: " + JSON.stringify(testArr))

//Boolean values
function b() {
    return true;
}
console.log(b());

