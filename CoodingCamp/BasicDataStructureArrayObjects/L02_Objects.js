//--> Add Key-Value Pairs to JavaScript Objects
//objects are just collections of key-value pairs.
//they are pieces of data (values) mapped to unique identifiers called properties (keys). 

const human={
    age:33, //key:value
    name:"Adam",
    color:"all"
};

//Adding property to end of the object
human.language="Eng";//. dot method
//Bracket notation is required if your property has a space in it or if you want to use a variable to name the property. 
human["hair"]=true;//[""] bracket method
//human[ey]="green";//"" must, otherwise error
console.log(human)

//--> Modify an Object Nested Within an Object
const human1={
    age:33, //key:value
    name:"Adam",
    language:{
       lan1: "en",
       lang2: "tr"
    }
};

human1.language.lan1="French";
console.log(human1)

//--> Access Property Names with Bracket Notation
//Bracket notation is very useful because sometimes object properties are not known before runtime or we need to access them in a more dynamic way.


//Example 2:
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
return foods[scannedItem]
}

console.log(checkInventory("apples"));//25

//--> Use the delete Keyword to Remove Object Properties, delete foods.apples;
delete foods.oranges;
console.log(foods)//Object= {apples: 25, plums: 28, bananas: 13, grapes: 35, strawberries: 27}

//Check if an Object has a Property, hasOwnProperty()
//users.hasOwnProperty('Alan');
//'Alan' in users;
console.log(foods.hasOwnProperty('plums'&&'grapes'));//true
console.log('plums' in foods&&'grapes' in foods);//true

//--> Iterate Through the Keys of an Object with a for...in Statement
 //to iterate through all the keys within an object. specific syntax called a for...in statement.

 //--> Iterate Through the Keys of an Object with a for...in Statement
//Sometimes you may need to iterate through all the keys within an object.
// for... in --> property names
// for ... of --> property values
let person ={ fname:"Adam", lname: "Hawwa"};
let arr = [3,5,7];
arr.foo="Hello";

let text="";
for (let x in person){
    text+=person[x];
    console.log(x);
};
console.log(text);

for(let i in arr){
    console.log(i);//0,1, 2, foo
};

for( let i of arr){
    console.log(i);//3, 5, 7
}

//--> Generate an Array of All Object Keys with Object.keys()
// generate an array which contains all the keys stored in an object using the Object.keys()
//there will be no specific order to the entries in the array.

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
return Object.keys(obj);
}

console.log(getArrayOfUsers(users));//["Alan", "Jeff", "Sarah", "Ryan"]

//--> EXAMPLE: Modify an Array Stored in an Object
//The user object contains three keys. The data key contains five keys, one of which contains an array of friends. From this, you can see how flexible objects are as data structures. We've started writing a function addFriend. Finish writing it so that it takes a user object and adds the name of the friend argument to the array stored in user.data.friends and returns that array.

let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
userObj.data.friends.push(friend);
return userObj.data.friends;
}

console.log(addFriend(user, 'Pete'));