
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

function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);