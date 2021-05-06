
//--> Random Numbers
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());


//--> Generate Random Whole Numbers
function randomWhole() {
    return Math.floor(Math.random() * 20);
}
console.log(randomWhole());

//--> Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(15, 151);
console.log(myRandom);

//--> parseInt() function parses a string and returns an integer.
function convertToInteger(str) {
    return parseInt(str);
}
console.log("002");//002, why it did not give 2??
console.log("9.2");//9.2 , why not 9
console.log("sdf");//sdf

//If it is not defined in function
var a = parseInt("005");
console.log(a);//5

var a = parseInt("2.5");
console.log(a);//2 converted to integer

var a = parseInt("a23");
console.log(a);//null

//--> parseInt Function with a Radix,  parseInt(string, radix);
function convertToInteger1(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger1("10011"));//19


var a = parseInt("10011", 2);
console.log(a)//19

var a = parseInt("11", 2);
console.log(a)//3