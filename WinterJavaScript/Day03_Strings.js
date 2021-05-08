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

/*
Warm up:
1. Print :   I'm Ahmet
var sentence='I\'m Ahmet';
console.log(sentence);
2a.
Create variables and assign the values 
variable name:  country,       continent
variable value: USA,           North America
2b. Print 
'USA' is in the North America
*/

//1st One
var sentence='I\'m Ahmet';
console.log(sentence);
var sentence1=`I'm Ahmet`;
console.log(sentence1)
var sentence2="I'm Ayse";
console.log(sentence2);

var name="Ahmet"
console.log(`I'm ${name}`);

//2.a. 'USA' is in the North America
var country='USA';
var continent ='North America';

//2b
console.log("'USA' is in the North America");
var result=`'${country}' is in the ${continent}`;
console.log(result);

//Or I can print without a variable
console.log(`'${country}' is in the ${continent}`);