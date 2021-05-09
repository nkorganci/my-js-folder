//--> MAP, USED OFTEN============================

/*
MAP:  Creates a new array with each item in that array
      Map takes a function parameter
*/
var  numbers=[3,56,2,48,5]
//Combination 1:
function double(x){
  return x*2;
}
//We can pass double function inside the map to get the new array
const newNumbers1=numbers.map(double);
console.log(newNumbers1);//[6, 112, 4, 96, 10]


//Combination 2:
//We can use function directly inside map
const newNumbers=numbers.map(
  //     3*2=6,56*2,2*2,48*2,5*2
function double(x){
  return x*2;
})
console.log(newNumbers);//[6, 112, 4, 96, 10]


//We can use Arrow Function inside the map
const newNumbers2 = numbers.map(x=>x*2);
console.log(newNumbers2);

//How can we write the same code with forEach loop
//1- Creating an empty array
//2- Use push to add items inside this empty array
//for each does not add automatically like map
const newNumbers3=[];
numbers.forEach(
    (x)=newNumbers3.push(x*2)
)

console.log(newNumbers3);


/*
Filter Function
Filter takes each number inside the array
returns that meets with specific condition
*/
var  numbers=[3,56,2,48,5];
//how do we get the numbers that is only greater than 10
const newNumbers= numbers.filter(
function(num){
  return num>10;
}
)
console.log(newNumbers);//[56, 48]
//We can make this code shorter using arrow functions
//delete function keyword and use => between the input and the body
// const newNumbersArrow=numbers.filter(
// (num)=>{
//   return num>10;
// }
// )
//I can delete return and {}
// const newNumbersArrow=numbers.filter(
// (num)=> num>10
// )
//I can delete the paranthesis around the input, becuase there is single parameter
const newNumbersArrow=numbers.filter(num => num>10);
console.log(newNumbersArrow);//[56, 48]
//HOW CAN I DO THIS USING FOR EACH. 
//THIS IS NOT PART OF FILTER. THIS IS JUST TO SEE HOW WE CAN DO WITH FOR EACH
//Step 1: Create an empty array
var newNumbersForEach=[];
numbers.forEach(
function(num){
  if(num>10){
    newNumbersForEach.push(num);
  }
}
)
console.log(newNumbersForEach);//[56, 48]

//3rd way
numbers.forEach(x=>x>10?newN2.push(x):newN2.push())

const newN2=[];
numbers.forEach(x=>x>10?newN2.push(x):newN2.push())
console.log(newN2)

/*
Reduce:
Accumulates/adding the values inside the array
Similar to map reduce.
Difference is this reduce function iterates + accumulates array values
Reduce hold on to the current value and add to the previous SUM
Array.reduce((accumulator,item)=>{
function body
}
)
*/
var     numbers=[3,56,2,48,5];
//accumulator:   3, 3+56=59, 3+56+2=61, 3+56+2+48=109
//eachNumber :   3,56,2,48,5
const myResult=numbers.reduce(
  function(accumulator,currentNumber){
//     console.log('Accumulator : '+accumulator);
//     console.log('Each Number : '+currentNumber);
    return accumulator + currentNumber;
  }
)
console.log('My Result : '+myResult);//"My Result : 114"
//Arrow function in the reduce function
var result = numbers.reduce(
  (acc,currentItem)=>{
//     console.log(acc);
    return acc+currentItem
  }
)
console.log('RESULT : '+result);//"RESULT : 114". 
//The sum of all numbers inside the array= 3+56+2+48+5 =114
/*
Create an array [4,5,6,7,8,-3]
And return the sum of the number
*/
var myNumbers=[4,5,6,7,8,-3];
var sumOfNumbers=myNumbers.reduce((accumulator,currentNumber) => accumulator+currentNumber)
console.log(sumOfNumbers);//27
// OR BELOW CODE WORKS
// var sumOfNumbers=myNumbers.reduce(
//  (acc,currentItem)=>{
//    return acc+currentItem;
//  }
// )
// console.log(sumOfNumbers);


/*
FIND AND FINDINDEX 
Find: Loops throught the arrya
and returns the first item that matches the condition
*/
//Find the FIRST number that is greater than 10
var numbers=[3,56,2,48,5];
const myNumber= numbers.find(
  function(eachItem){
    return eachItem>10; 
  }
)
console.log(myNumber);//56
//Solve the same question using arrow function
const myNumberArrow=numbers.find(number => number > 10)
console.log(myNumberArrow);//56
//findIndex: Loops through the array and Return the INDEX of the item that mathes with the condition
const myNumberIndex=numbers.findIndex(
function(eachItem){
    return eachItem>10; 
  }
)
console.log(myNumberIndex);//1 
//because first number greater than 10 is 56 And index of 56 is 1
