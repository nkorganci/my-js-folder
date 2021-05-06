//String escape from "", '' marks
//var str="My name is"Mark" , thank you";//Gives error
var str="My name is \"Mark\" , thank you";//My name is "Mark" , thank you
console.log(str);
var str='My name is \"Mark\" , thank you';//My name is "Mark" , thank you
console.log(str);
var str=`My name is \"Mark\" , thank you`; // My name is "Mark" , thank you
console.log(str);
var str=`'My name is \"Mark\" , thank you'`;//'My name is "Mark" , thank you'
console.log(str);

//Escape Sequences in Strings, Regular Expressions

// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed

var myStr1= "FirstLIne\n\t\\SecondLine\nThirdLine"
console.log(myStr1)


//Concatenating Strings

var ourStr="First Name "
var ourStr1="Last Name"
ourStr+=ourStr1;
console.log(ourStr);