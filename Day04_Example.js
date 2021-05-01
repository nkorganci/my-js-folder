/*
Warm up:
1. Print :   I'm Ahmet
var sentence='I\'m Ahmet';
console.log(sentence);
2a.
Create variables and assign the values 
variable name:  country,       continent
variable value: USA,           North America
2b. Print 
'USA' is in the North America
*/

//1st One
var sentence='I\'m Ahmet';
console.log(sentence);
var sentence1=`I'm Ahmet`;
console.log(sentence1)
var sentence2="I'm Ayse";
console.log(sentence2);
var name="Ahmet"
console.log(`I'm ${name}`);

//2.a. 'USA' is in the North America
var country='USA';
var continent ='North America';

//2b
console.log("'USA' is in the North America");
var result=`'${country}' is in the ${continent}`;
console.log(result);

//Or I can print without a variable
console.log(`'${country}' is in the ${continent}`);


//1. Get one side of the square from the user and print the area of the square on the console
var sideOfSquare=prompt("Write the length of the square");
var area= sideOfSquare**2;
console.log("Area of the square: " + sideOfSquare*sideOfSquare);
console.log("Area of the square: " + sideOfSquare**2);//shorter one
console.log(`Area: ${area}`);//"Area: 25"

//2. Get both sides of the rectangle form the user and print the perimeter of the rectangle on the console
var length=prompt("write the length3 of the rectangle: ");
console.log(typeof(length));//String
var height=prompt("write the height: ")
var areaOfRectangle= 2*length+2*height;
//var areaOfRectangle= 2*(length+height);//This is a concat
console.log("Perimeter of the rectangle" + areaOfRectangle);

//3. Get the radius of the circle from user and print the area of the circle on the console
//Math.pow(2,3)// Math.pow(base, power)
const radius=prompt("write the radius: ")
const areaOfCircle=Math.PI*Math.pow(radius,2);
console.log("area of circle " + Math.round(areaOfCircle));

//5.Create a prompt : “Write your tweet” —-> use prompt. Type random text and calculate the number of sent character and the remaining character.Note  Max character is 280.
var writeYourTweet=prompt("Write your tweet: ");
//Note: max char is 280
var slicedTweet= writeYourTweet.slice(0,28);
var numberOfUsedchar= slicedTweet.length;
var numberOfRemaining=writeYourTweet.slice(281).length;
console.log(numberOfRemaining)