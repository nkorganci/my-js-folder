/**
 https://jsbin.com/bodupotofu/edit?js,console
 *1. Give meaningful names   —> firstName for first name.
2. Can’t use reserved keywords like var, let, const, alert, etc. —> var var=“Ahmet”; Not correct
3. Can’t start with numbers —>var 1myName= “Ahmet”;
4. Can’t have space —> var my Name=“Ahmet”;  
5. letters+numbers+$+_ are only allowed variables —> var a1$_=“Ahmet”;
6.Use camelCase —> var myNameAndLastName=“Ahmet Bayram”;
Note: variable names are case sensetive firstName; FirstName; are different
 */

//terminal--> node + className

// VARIABLES:
console.clear();
// Declaring name variable with no initial value
var name;
console.log(name);//undefined
//Declaring name variable with initial value
var name = 'Ahmet';
console.log(name);//Ahmet
var name="Javascript";
console.log(name);//Javascript
name="Learning var keyword";
console.log(name);
// Declaring multiple variables
// var fName;
// var lName;
// var fName, lName;
var fName='John', lName='Cash';
console.log(fName);//John
console.log(lName);//Cash
// Most common way to declare and initialize variables
var firstName='Sam';
var lastName='Walter';
console.log(firstName);//Sam
console.log(lastName);//Walter
console.log(firstName+' '+lastName);//Sam Walter

