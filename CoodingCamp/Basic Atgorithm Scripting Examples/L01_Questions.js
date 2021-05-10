
//--> Reverse a String
function reverseString(str){
    let arr = str.split("").reverse();
    let newArr= arr.join("")
   
    return newArr;
}

reverseString("hello");
console.log(reverseString("Hello"));

//--> Factorialize a Number
// Return the factorial of the provided integer.
function fact(num){
    var prod=1;
    for(let i=1;i<=num;i++){
        prod=prod*i;
        
    }
    return prod;
}

console.log(fact(3));

//--> Find the Longest Word in a String
function longest(str1){
let arr1=str1.split(" ");
let maxLength=0;
let maxStr="";
for(let i=0; i<arr1.length; i++){
    if(arr1[i].length>=maxLength){
        maxLength=arr1[i].length;//Length of the longest word
        maxStr=arr1[i];//longest word
    }
}
return maxStr;
}

console.log(longest("The quick brown fox jumpedjumped over the lazy dog"));


//--> Return Largest Numbers in Arrays
//Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.


//Problem Explanation
//You will get an array that contains sub arrays of numbers and you need to return an array with the largest number from each of the sub arrays.

//1st Way
function largestOfFour(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        for (let j = 0; j < arr[i][j]; j++) {
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        result.push(max);
    }
    return result;
};


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//2nd Way
function largestOfFour1(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(Math.max(...arr[i]));
    }
    console.log(newArr);
    return newArr;
}

largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//3rd Way
function largest(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
}
console.log(largest([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//--> Confirm the Ending
//Check if a string (first argument, str) ends with the given target string (second argument, target).

//1st Way
function confirmedEnding(str, end) {
    if (str.substr(-end.length) === end) {
        return true;
    }
    return false;
}

console.log(confirmedEnding("Hi", "i"));

//2nd Way

function ending(str, end) {
    return str.endsWith(end)
}
console.log(ending("Home", "me"));

//--> Repeat a String Repeat a String
//Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

//1st Way
function repeatStringNumTimes(str, num) {
    let result = "";
    if (num < 0) {
        return result;
    }
    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;
}
console.log(repeatStringNumTimes("abc", 3));


//2nd Way
function repeatStringNumTimes1(str, num) {
    if (num > 0)
        return str.repeat(num)
    else
        return "";

}
console.log(repeatStringNumTimes1("abc", 3));

//--> Truncate a String
//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
    let result = "";
    if (str.length > num) {
        result = str.substr(0, num).concat("...");
        //result = str.slice(0, num)+"..."
        //result =str.split("").splice
    }
    return result;
}

console.log(truncateString("adf adf", 2));