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