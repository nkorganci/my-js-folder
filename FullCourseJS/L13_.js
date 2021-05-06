//-->  Destructuring Assignment to Assign Variables from Arrays
//spread operator unpacks all contents of an array into a comma-separated list. you cannot pick or choose which elements you want to assign to variables.

//1stWay
// const [a,b]=[1,2,3,4,5,6];
// console.log(a,b);//1,2

//2nd Way: access the value at any index in an array with destructuring by using commas
const [a,b,,c]=[1,2,3,4,5,6];
console.log(a, b, c);//1,2,4

// destructuring assignment to swap the values

let a1=3, b1=5;
(()=>{
    //"use strict"
    [a1,b1]=[b1,a1];
})();
console.log(a1);//5
console.log(b1);//3


//--> Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// collect the rest of the elements into a separate array.
// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b);//1,2
// console.log(arr);

//The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.


//-->  Destructuring Assignment to Pass an Object as a Function's Parameters
// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;

// }

// const profileUpdate = ({ name, age, nationality, location }) => {

// }


//-->  Create Strings using Template Literals
//special type of string that makes creating complex strings easier.
//Example
const person={
    name:"Adam",
    age:32
};

const greeting=`Hello may name is ${person.name} and my age is ${person.age}`;
console.log(greeting)//Hello may name is Adam and my age is 32


//--> write concise object literal declarations using simple fields
const createPerson=(name, age, gender)=>({name, age,gender});
    
    
    //This can be shortened 
    // return {
    //     name: name,
    //     age: age,
    //     gender:gender
    

console.log(createPerson ("Zodiac Hasbro", 56, "male"));//{name: "Zodiac Hasbro", age: 56, gender: "male"}


//-->  Concise Declarative Functions with ES6
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

//you can remove the function keyword and colon 
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};


//Example
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//--> Use class Syntax to Define a Constructor Function  3 12 56 2