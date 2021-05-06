/*
Arrays:::::
Arrays are special type of object
In objects, we use keys to access the values
In arrays, we use index to acces the values
*/
//Declaring Arrays:
var friendList=['sam','tom','tim','jacob'];
//We can use new keyword to create arrays. Less common.
var friendList1=new Array('sam','tom','tim','jacob');
console.log(friendList);//["sam", "tom", "tim", "jacob"]
console.log(typeof(friendList));//"object"
console.log(friendList1);//["sam", "tom", "tim", "jacob"]
//Getting the values from the array
console.log(friendList[0]);//"sam"
console.log(friendList[4]);//undefined. Cause there is no value in 4th index
//Editting data
//Changing 2nd index to nancy
friendList[2]='nancy';
console.log(friendList);//["sam", "tom", "nancy", "jacob"]
//Adding data
//if there is already a data in that index, it will override
//if there is no data in that index, it will be added.
friendList[4]='john';
console.log(friendList);//["sam", "tom", "nancy", "jacob"]
//if i assign a value in the array using index, and if there is a gap,
//then js will assign undefined to the gap indexes
friendList[7]='alex';
console.log(friendList);//["sam", "tom", "nancy", "jacob", "john", undefined, undefined, "alex"]


//Array Methods 

//--> Array Methods
var friendList =["sam","tom","tim","jacop"];

//1.push(): add element  at the end of the array
friendList.push("alex");
console.log(friendList);

//2.unshift(): Add element at the beginning
friendList.unshift("Marry");
console.log(friendList);

//3.pop(): deletes the last item of array
friendList.pop();
console.log(friendList);

//4.shift(): Delete 1st element
friendList.shift();
console.log(friendList);

var age=[10, 2, 55];
console.log(age);
console.log(typeof(age));//Object

console.clear();
var ages=[10,34,21,19,10];
console.log(ages)
console.log(typeof(ages));
//5.isArray -> checks if the variable is an array or not
const isTrue=Array.isArray(ages);
console.log(isTrue);//true
console.log(Array.isArray('30'));//false
//6. indexOf(item, from) -> returns first index of the item
//   lastIndexOf(item, from) -> returns last index of the item
//   Note: returns -1 if there is no matching item in the array
console.log(ages.indexOf(10));//0
console.log(ages.indexOf(10,1));//4. start looking at 10 starting from index if 1
console.log(ages.lastIndexOf(10));//4
console.log(ages.indexOf(19));//3
console.log(ages.indexOf(1));//-1
//7. includes(item, starting index) -> returns true if item is in the array
const itemExist=ages.includes(20);
console.log(itemExist);//false
const itemExist1=ages.includes(21);
console.log(itemExist1);//true
//var ages=[10,34,21,19,10];
//index      0  1  2. 3. 4
const itemExist2=ages.includes(21,3);
console.log(itemExist2);//false because There is no 21 after 3rd index

console.clear();
/*
Arrays Methods:::::
*/
var friendList=['sam','tom','tim','jacob'];
console.log(typeof(friendList));
console.log(friendList);
//1. push(): add element AT THE END of the array
friendList.push('alex');
console.log(friendList);
//2. unshift: add element AT THE BEGINNIG of the array
friendList.unshift('marry');
console.log(friendList);//["marry", "sam", "tom", "tim", "jacob", "alex"]
//3. pop(): deletes the LAST item from the array
friendList.pop();
console.log(friendList);//["marry", "sam", "tom", "tim", "jacob"]
//4. shift: deletes the FIRST item form the array
friendList.shift();
console.log(friendList);//["sam", "tom", "tim", "jacob"]
console.clear();
var ages=[10,34,21,19,10];
console.log(ages)
console.log(typeof(ages));
//5.isArray -> checks if the variable is an array or not
const isTrue=Array.isArray(ages);
console.log(isTrue);//true
console.log(Array.isArray('30'));//false
//6. indexOf(item, from) -> returns first index of the item
//   lastIndexOf(item, from) -> returns last index of the item
//   Note: returns -1 if there is no matching item in the array
console.log(ages.indexOf(10));//0
console.log(ages.indexOf(10,1));//4. start looking at 10 starting from index if 1
console.log(ages.lastIndexOf(10));//4
console.log(ages.indexOf(19));//3
console.log(ages.indexOf(1));//-1
//7. includes(item, starting index) -> returns true if item is in the array
const itemExist=ages.includes(20);
console.log(itemExist);//false
const itemExist1=ages.includes(21);
console.log(itemExist1);//true
//var ages=[10,34,21,19,10];
//index      0  1  2. 3. 4
const itemExist2=ages.includes(21,3);
console.log(itemExist2);//false because There is no 21 after 3rd index