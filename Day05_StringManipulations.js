//Promt:Like scanner, it gets data from user.

const answer= prompt('What is your name: ');
console.log(answer);//Wrote... in the console

//-->STRING MANIPULATIONS---------------------------------------
//Length
var str= 'I love javascript';
console.log(str.length);
var length=str.length;//assign to a variable is a better method.
console.log(length);

//IndexOf
var index=str.indexOf('love');
console.log(index);//2

//Slice(index,end) and substring(start, end)

var a=str.slice(2,6);//return empty string
console.log(a);

var a=str.slice(6,2);//
console.log(a);


var a=str.slice(-3);//ipt, returns last 3 character.
console.log(a);

var a=str.substring(-1);//Return all string
console.log(a);


var a=str.substring(2,6);//love
console.log(a);

var a=str.substring(6,2);//love, substring change the order of numbers
console.log(a);
