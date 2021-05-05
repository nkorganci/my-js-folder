//--> Arrow Functions to Write Concise Anonymous Functions
//if you pass a function you dont need to name it

//Traditional way
const myFunction= function(){
    const myVar="value";
    return myVar;
}

//ES6, arrow function
const myFunction1=()=>{
     const myVar="value";
    return myVar;
}

//If there is only return value, omit return
const myFunction2= ()=>"value";
console.log(myFunction2());//Value


//--> Write Arrow Functions with Parameters
const myConcat=(arr1,arr2)=>arr1.concat(arr2);
console.log(myConcat("hi","Adam"));//hiAdam
console.log(myConcat([1,2],[3,4]));//[1, 2, 3, 4]


//--> Write Higher Order Arrow Functions
//Short Method
const realNumberArray=[4,5.6,-9.8, 3.14, 42, 6, 8.34, -2];
const squareList=(arr)=> realNumberArray.filter(t=>Number.isInteger(t)&&t>0).map(t=>t*t);
   
console.log(squareList());

//-->  Set Default Parameters for Your Functions
//The default parameter kicks in when the argument is not specified (it is undefined)
//Example1

const increment = (function() {
    return function increment(number, value=3){
        return number + value;
    };
})();

console.log(increment(4,2));//
console.log(increment(4));


//-->  Rest Parameter with Function Parameters(...args=rest parameter)
// With the rest parameter, you can create functions that take a variable number of arguments. 
// These arguments are stored in an array that can be accessed later from inside the function.

//1st Way
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));

//2nd Way
const a= (...args) =>"You have passed " + args.length + " arguments.";

console.log(a(0, 1, 2));
console.log(a("string", null, [1, 2, 3], { }));

//3rd Way
const sum = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sum(2,3));

//--> Spread Operator to Evaluate Arrays In-Place
//spread operator, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
//apply()
var arr=[2,4,5,8];
var maximus=Math.max(arr);//null
var maximus=Math.max.apply(null,arr);//8, ES5 was using apply()

//...arr returns an unpacked array. In other words, it spreads the array. 
//However, the spread operator only works in-place, like in an argument to a function or in an array literal.
var maximus=Math.max(...arr);//8
console.log(maximus);

//Example2
const arr1=["jan","feb","mar","apr","may"];
let arr2;
(function(){
    arr2=arr1;//it does not copy, just equal
    arr2=[...arr1];//it copies of elements of arr1   
    arr1[0]="potato";
})();
console.log(arr2)//["potato", "feb", "mar", "apr", "may"]


//-->  Destructuring Assignment to Extract Values from Objects
//Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

//Traditional way
const user={name: " Adam", age:22};//Object
const name=this.name;
const age= this.age;

//Destructing Assignment/assignment statement
const {name,age}=user;

//2ndExample
const HIGH_TEMPERATURES={
    yesterday:75,
    today:77,
    tomorrow:80
};

const {yesterday,today}=HIGH_TEMPERATURES;

//3rd Example
//Traditional method
var num={a:2,b:3,c:8};
var x=num.a;
var y=num.b;
var z=num.c;

//Destructuring assignment
const {x:a,y:b,z:c=num;

//--> Destructuring Assignment to Assign Variables from Nested Objects
//1st way
const user1={
    john:{
        age:35,
        email:"a@gmail.com"
    }
};

const {john:{age,email}}=user1;
const { john: { age: userAge, email: userEmail }} = user1;
//3
