//--> Array to Store a Collection of Data
//Array.length
// one-dimensional array,
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
console.log(simpleArray.length);

//multi-dimensional array
let complexArray = [{a:1,b:2},[{c:"Hi"}]];
console.log(complexArray.length);//2
console.log(complexArray[1].length);//1

//--> Access an Array's Contents Using Bracket Notation
let myArray = ["a", "b", "c", "d"];
myArray[2]="hi";
console.log(myArray);

//--> Add Items to an Array with push() and unshift()
let arr=[1,2,3];

arr.push(4);// add end of the array
console.log(arr);

arr.unshift(0);//at the beginning of the array
console.log(arr);

//--> Remove Items from an Array with pop() and shift()
let arr1=[1,2,3];
arr1.pop();//delete the last one
console.log(arr1);

arr1.shift();//delete the first one
console.log(arr1);

//--> Remove Items Using splice(),  remove any number of consecutive elements 
//splice() can take up to 3 parameters, we'll focus on just the first 2.
//The first two parameters of splice() are integers which represent indexes, or positions
let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2,1);// 2 starting index, 1 number of elements to be deleted.
console.log(array)

//--> Add Items Using splice(), 
//you can use the third parameter, comprised of one or more element(s), to add to the array. 
const numbers = [10, 11, 12, 12, 15];
numbers.splice(3,1,13, 14);//starting index 3, delete element/s 1, add 13, 14
console.log(numbers)

//--> Copy Array Items Using slice()
//slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index)
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);
console.log(weatherConditions.slice(1,3));//["snow", "sleet"]
console.log(todaysWeather);//["snow", "sleet"]

//--> Copy an Array with the Spread Operator
//The spread syntax simply looks like this: ...
//spread operator allows us to easily copy all of an array's elements
let a=[1,2];
let b=[...a];
console.log(b);

//Example 2
function copy(arr, num){
    let newArr=[];
    while(num>=1){
        newArr.push(...arr);
        num--;
    }
    return newArr;
}
console.log(copy([true,false,true],2));//[true, false, true, true, false, true]

//-->  Combine Arrays with the Spread Operator
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

//--> Check For The Presence of an Element With indexOf()
// indexOf(), that allows us to quickly and easily check for the presence of an element on an array. indexOf() takes an element as a parameter, and when called, it returns the position, or index, of that element, or -1 if the element does not exist on the array.
//Example 1
function quickCheck(arr, elem) {
    return arr.indexOf(elem)>-1;//In order to Return true
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

//--> Iterate Through All an Array's Items Using For Loops
//be able to iterate through each item to find one or more elements that we might need
//Example: find the numbers greater than 10

function greaterThanTen(arr){
    let newArr=[]; 
    for (let i=0;i<arr.length;i++){
        if(arr[i]>10){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));
