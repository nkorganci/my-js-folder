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