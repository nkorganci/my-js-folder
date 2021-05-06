/* 
Strings:
``BackTick
''Single quote
""Double quote
*/

var str1='Ahmet';
console.log(str1);

var str2='My name is "Ahmet"' //Single code did not give error
console.log(str2)

// var str2="My name is "Ahmet"";//Gave error
// console.log(str2)

var str2="My name is \"Ahmet\"";//
console.log(str2)

var str2='My name is \'Ahmet\'';//This s ideal for nested String, single quote
console.log(str2)

console.log('---BackTick---')

var fName='Adam';
var lName='Havva';
var age=30;

console.log(fName +' ' + lName + ' ' +age );
console.log(`First Name: ${fName} last name: ${lName}`);