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