/*
Arrays:
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

//-->1.push(): add element  at the end of the array
friendList.push("alex");//Appends new elements to the end of an array, and returns the new length of the array.
console.log(friendList);

//-->2.unshift(): Add element at the beginning
friendList.unshift("Marry");
console.log(friendList);

//-->3.pop(): deletes the last item of array
friendList.pop();
console.log(friendList);

//-->4.shift(): Delete 1st element
friendList.shift();
console.log(friendList);

var age=[10, 2, 55];
console.log(age);
console.log(typeof(age));//Object

console.clear();
var ages=[10,34,21,19,10];
console.log(ages)
console.log(typeof(ages));

//-->5.isArray -> checks if the variable is an array or not
const isTrue=Array.isArray(ages);
console.log(isTrue);//true
console.log(Array.isArray('30'));//false

//-->6. indexOf(item, from) -> returns first index of the item
//   lastIndexOf(item, from) -> returns last index of the item
//   Note: returns -1 if there is no matching item in the array
console.log(ages.indexOf(10));//0
console.log(ages.indexOf(10,1));//4. start looking at 10 starting from index if 1
console.log(ages.lastIndexOf(10));//4
console.log(ages.indexOf(19));//3
console.log(ages.indexOf(1));//-1

//-->7. includes(item, starting index) -> returns true if item is in the array
// /Determines whether an array includes a certain element, returning true or false as appropriate.
const itemExist=ages.includes(20);
console.log(itemExist);//false
const itemExist1=ages.includes(21);
console.log(itemExist1);//true
//var ages=[10,34,21,19,10];
//index      0  1  2. 3. 4

const itemExist2=ages.includes(21,3);
console.log(itemExist2);//false because There is no 21 after 3rd index

//9. concat -> combines arrays
var drinks = ['water', 'coke','soda','fanta'];
var snacks= ['doritos','sunchips','lays','ruffles'];
var shoppingList = drinks.concat(snacks);
console.log(shoppingList);//["water", "coke", "sode", "doritos", "sunchips", "lays"]

//10. slice (start-INCLUDED, end-EXCLUDED);
const favDrinks=drinks.slice(1,3);
console.log(favDrinks);//["coke", "soda"]
const favSnacks=snacks.slice(1);
console.log(favSnacks);//["sunchips", "lays", "ruffles"]
//NOTE: negative index meant start from the last
const leastFavSnacks=snacks.slice(-2);//copy last 2 index
console.log(leastFavSnacks);//["lays", "ruffles"]

//11. reverse() -> reverses the array
var myNums=[4,2,6,1,7,5,-7];
console.log(`ORIGINAL : ${myNums}`);//"ORIGINAL : 4,2,6,1,7,5,-7"
myNums.reverse();
console.log(`REVERSED : ${myNums}`);//"REVERSED : -7,5,7,1,6,2,4"

//12. sort() -> sorts an array in ascending(smallest to greatest) order
myNums.sort();
console.log(myNums);//[-7, 1, 2, 4, 5, 6, 7]
//getting the array in decending order
//sort() + reverse()  = Decending Order
myNums.reverse();
console.log(myNums);//[7, 6, 5, 4, 2, 1, -7]

//hw

/*
1.Create a function which returns the number of true values there are in an array.
Eg:
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
2.A repdigit is a positive number composed out of the same digit. Create a function that takes an integer and returns whether it's a repdigit or not.
isRepdigit(66) ➞ true
isRepdigit(6666) ➞ true
isRepdigit(0) ➞ true
isRepdigit(-11) ➞ false
3.Create a function that counts the integer's number of digits.
Eg:
count(318) ➞ 3
 
count(-92563) ➞ 5
4.Create a function that takes an array of numbers and returns the second largest number.
secondLargest([10, 40, 30, 20, 50]) ➞ 40
secondLargest([25, 143, 89, 13, 105]) ➞ 105
secondLargest([54, 23, 11, 17, 10]) ➞ 23
*/