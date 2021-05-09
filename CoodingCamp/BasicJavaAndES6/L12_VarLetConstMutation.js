//--> Differences Between the var and let Keywords
// "var" can be overridden but "let" cam be declared once

var a = "Adam";
var a = "Eve"
console.log(a);//Eve

let b = "Adam";
b = "Hawwa";//no error
//let b="Eve";
//console.log(b);//'b' has already been declared

//--> "use strict"; should be executed in "strict mode".
function catTalk() {
    "use strict"

}
// "use strict"
// x=3.14;
// console.log(x);

//-->  Scopes of the var and let Keywords
//var--> global outside of the function
//var-->local inside of the function
//Let behave same but if let is declared inside a block, it is limited to that block

//var can be declared outside of the loop as global
var numArray=[];
var i;
for(i=0;i<3;i++){
    numArray.push(i);
}
console.log(numArray);//[0, 1, 2]
console.log(i);//3

//Var is declared inide of the loop as global
var numArray=[];
var i;
for(i=0;i<3;i++){
    numArray.push(i);
}
console.log(numArray);//[0, 1, 2]
console.log(i);//3

//--> Scopes of the var and let
//Var is global if it is declared outside of the function
 //var is local if it is declared inside of the function  
function checkScope(){
    var i="function scope";
    if(true){
        i="block scope";
        console.log("Block scope i is: ", i);//,"block scope"
    }
    console.log("Function scope i is: ", i);//,"block scope"
    return i;
}
console.log(checkScope());//,"block scope"


//Let 1
function checkScope1(){
    let i1="function scope";//Did not effect
    if(true){
        i1="block scope";//Global scope without var keyword
        console.log("Block scope i1 is: ", i1);//,"block scope"
    }
    console.log("Function scope i1 is: ", i1);//,"block scope"
    return i1;
}
console.log(checkScope1());//,"block scope"


//let  2
function checkScope11(){
    let i11="function scope";//Did not effect
    if(true){
        let i11="block scope";//Global scope
        console.log("Block scope i11 is: ", i11);//,"block scope"
    }
    console.log("Function scope i11 is: ", i11);//,,"function scope"
    return i11;
}
console.log(checkScope11());//,function scope


//--> Another example to show differences between VAR and LET
//VAR
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());//3

//LET
let printNumTwo1;
for (let J = 0; J < 3; J++) {
  if (J === 2) {
    printNumTwo1 = function() {
      return J;
    };
  }
}
console.log(printNumTwo1());//2

//console.log(J);//J is not defined error

//--> Declare a Read-Only Variable with the const Keyword
//const has all the awesome features that let has, with the added bonus that variables declared using const are read-only/constant, can not be reassigned
// A common practice when naming constants is to use all uppercase letters, with words separated by an underscore.
//Note: It is common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values (objects and arrays).

function printManyTimes(str){
    const SENTENCE= str+ " is cool!";
    for(let i=0;i<SENTENCE.length;i+=2){
        console.log(SENTENCE);
        
    }
}
printManyTimes("freeCodingCamp");

//--> Mutate an Array Declared with const
//objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.You can update values.

const s=[1,2,3];
      //s=[3,4,5];//You can not reassign
      s[2]=99;//but you can update
      console.log(s);


//--> Prevent Object Mutation, Object.freeze to prevent data mutation.
function freezeObj(){
    "use strict";
    const MATH_CONSTANTS={
        PI:3.14
    };
    
    Object.freeze(MATH_CONSTANTS);
    
    try{
        MATH_CONSTANTS.PI=99;
    }catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);//If I dont use Object.freeze(MATH_CONSTANTS);, answer is 99
                //If i use it, answer is 3,14.