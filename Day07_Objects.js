/*
Reference Types:
1.Functions
2.Objects
3.Array
*/

//Longer version
var fNamej="John";
var lName="Cash";
var age=30;
console.log(`${fNamej} ${lName} ${age}`);

//Use person object to store the information
//Key-value pairs are used
var person={
    fName:"John",
    lNmae:"Cash",
    age:30
    
};
//Print the person object
console.log(person);
console.log(typeof(person));//Object

//Getting fName only
console.log(person.fName);
console.log(typeof(person.fName));//String

//Editing the object parameters, .dot notation, []bracket notation
person.age=50;
console.log(person.age);

//Bracket notation, String should be in quotes
person['age']=99;
console.log(person);

// person['fName']='Nancy';
var selection='fName';
person[selection]='Nancy';
console.log(person);
/*
[object Object] {
  age: 30,
  fName: "Nancy",
  lName: "Walker"
}
*/
//. notation is more common and usefull