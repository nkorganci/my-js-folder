

//=============== promt(),  function prompt(message) =============================//

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