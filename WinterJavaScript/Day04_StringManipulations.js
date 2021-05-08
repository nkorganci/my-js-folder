//Promt:Like scanner, it gets data from user.

const answer= prompt('What is your name: ');
console.log(answer);//Wrote... in the console

//-->=======================STRING MANIPULATIONS=================
//-->Length
var str= 'I love javascript';
console.log(str.length);
var length=str.length;//assign to a variable is a better method.
console.log(length);

//-->IndexOf- Returns the position of the first occurrence of a substring.
var index=str.indexOf('love');
console.log(index);//2

//-->Slice(index,end) and substring(start, end)
var a=str.slice(2,6);//love
console.log(a);

var a=str.slice(6,2);//empty string
console.log(a);


var a=str.slice(-3);//ipt, returns last 3 character.
console.log(a);

//-->substring()
var a=str.substring(-1);//Return all string
console.log(a);


var a=str.substring(2,6);//love
console.log(a);

var a=str.substring(6,2);//love, substring change the order of numbers
console.log(a);

//-->toUpperCase and toLowerCase()

var str= 'I love javascript';
console.log(str);

const toUpper=str.toUpperCase();
console.log(toUpper);

const toLower=str.toLowerCase();
console.log(toLower);


//--> concat()
var fName="John";
var lName="Walten";
var age=50;

var info=fName+ ' ' + lName + ' '+age;
console.log(info);//John Walten 50

var concatted= fName.concat(lName);//JohnWalten
console.log(concatted);

//--> trim(); Removes space at the beginning and at the end
var words='  Today is Saturday   ';
console.log(words);

var trimmed=words.trim();
console.log(trimmed);

//--> charAt(); get index, return that character.
var ch2= words.charAt(2);//T
console.log(ch2);

//--> split(); //split words from ' ' spaces.

var split=words.split(' ');
console.log(split)//["", "", "Today", "is", "Saturday", "", "", ""]

var str2="TX, CA, NY";
var splitted2=str2.split(",");
console.log(splitted2);//["TX", " CA", " NY"], returns array



//Example
/*
Ask user to enter a name: and print “Hello, Name”
Make sure only the first initial is always capital and the rest always small
Eg:
var name=ahmet;   =>>>>Ahmet
var name=aHmet;  =>>>>Ahmet
var name=AHMET =>>>>Ahmet
*/


var name = prompt("Write your name");
//capitilize the first letter
var fLetter=name.slice(0,1).toUpperCase();
//get the rest of the letters in lower case
var last= name.slice(1).toLowerCase();
//Printing
console.log("Hello, " +fLetter+last);
console.log(`Hello, ${firstLetter}${restOfWord}`);