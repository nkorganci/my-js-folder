let str = "home free bal bel bil Coding Camp love hooyou Free 11223344 yes";
//--> Match Characters that Occur One or More Times , /a+/g
let regex11 = /o+/ig;
console.log(str.match(regex11))//["oo", "o", "o", "o"]

let regex12 = /ho+/ig;
console.log(str.match(regex12))//["hoo", "hoo"]

//-->Match Characters that Occur Zero or More Times, *, COULD NOT UNDERSTAND
let regex13 = /hoom*/;
console.log(str.match(regex13));//["hoo"]

//-->  Find Characters with Lazy Matching
//a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result)//["<h1>"]

//--> Match Beginning String Patterns
//you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
let reg1 = /^ho/;//if the sentence start with ^
console.log(reg1.test(str));

//--> Match Ending String Patterns
//You can search the end of strings using the dollar sign character $ at the end of the regex.
let reg2 = /yes$/;//you need to write all sentence, ye=false, yes=true
console.log(reg2.test(str));

//--> Match All Letters and Numbers
// \w This shortcut is equal to [A-Za-z0-9_]
let reg3 = /\w/g;
console.log(str.match(reg3).length);//52, \w(lovercase) all upper-lower cases letters and numbers.

//--> Match Everything But Letters and Numbers, \W (UPPERCASE)
let reg4 = /\W/g;
console.log(str.match(reg4).length);//11

//--> Match All Numbers, digit characters is \d, [0-9]
let reg5 = /\d/g;
console.log(str.match(reg5));

//-->  Match All Non-Numbers, non-digit characters is \D
let reg6 = /\D/g;
console.log(str.match(reg6));

//--> Restrict Possible Usernames, I COULD NOT UNDERSTAND
//Usernames can only use alpha-numeric characters.
// 1-The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// 2-Username letters can be lowercase and uppercase.
// 3-Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
let userName = "JackOfAllTrades";
let userCheck = /^[A-Za-z]{2,}\d*$/;
console.log(userCheck.test(userName));//True

//-->  Match Whitespace,  whitespace using \s
// This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. 
let sample = "Whitespace    is important in separating words";
let r1 = /\s/g;
console.log(sample.match(r1).length);//8

//--> Match Non-Whitespace Characters, non-whitespace using \S, except space.
let r2 = /\S/g;
console.log(sample.match(r2).length);

//-->  Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/;
console.log(ohStr.match(ohRegex));//"Ohhh no"

//--> Specify Only the Lower Number of Matches
//You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. 
//For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

let haStr = "Hazzzzah";
let haRegex = /z{3,3}/;
console.log(haStr.match(haRegex));

//--> Specify Exact Number of Matches, if you know it use this 
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
console.log(timStr.match(timRegex));//["Timmmmber"]
console.log(timRegex.test(timStr))//True

//--> Check for All or None
//specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
let favWord = "favorite";
let favRegex = /fav?rite/;//false
let favRegex = /favo?rite/;//true
console.log(favRegex.test(favWord));//true

//-->  Positive and Negative Lookahead, DID NOT UNDERSTAND
//A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

//negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

let quit = "qu";
let noquit = "qt";
let quRegex = /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
//Both of these match calls would return ["q"].

//A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);


//--> Check For Mixed Grouping of Characters
//If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

//Then check whether the desired string groups are in the test string by using the test() method.

let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

//--Reuse Patterns Using Capture Groups, COULD NOT UNDERSTAND
//You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

//To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.

//The example below matches any word that occurs twice separated by a space:

let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr);
repeatStr.match(repeatRegex);
//The test call would return true, and the match call would return ["regex regex", "regex"].


let repeatNum = "42 42 42";
let reRegex = /^(\D+)\S\1\S\1$/; // Change this line

//--> Use Capture Groups to Search and Replace , COULD NOT UNDERSTAND
//You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
//The replace call would return the string The sky is blue..

//--> Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\S+|\S+$/g;
let result = hello.replace(wsRegex, '');
console.log(result)