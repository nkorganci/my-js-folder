//--> Using the Test Method
//Regular expressions are used in programming languages to match parts of strings.
//.test() method with /string/, it is case sensitive

let str = "home free bal bel bil Coding Camp love you Free 11223344";
let testRegex = /Coding/;//no need to use quote marks, CODING will give false
let result = testRegex.test(str);
console.log(result);//true

//--> Match a Literal String with Different Possibilities
let regex = /free|Coding|Hi/;
let result1 = regex.test(str);
console.log(result1);//True

//--> Ignore Case While Matching
//flog i ignores case - the i flag. use it by appending it to the regex. example  /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
let regex1 = /FREE/i;
console.log(regex1.test(str));//true

//--> Extract Matches with  .match()  ( .test() and .match()    are opposite)
let regex2 = /free/;
console.log(str.match(regex2));//["free"]

//--> Find More Than the First Match
//To search or extract a pattern more than once, you can use the g flag at the end of regex
let regex3 = /free/ig;//more than one flag can be added
console.log(regex3.test(str));//true
console.log(str.match(regex3))//["free", "Free"]

//-->  Match Anything with Wildcard Period, The wildcard is also called dot and period
let regex4 = /ho./;
let regex5 = /h..s/;
console.log(regex4.test(str));//true
console.log(regex5.test(str));//false, . replace a character.
console.log(str.match(regex4));//Returns ["hom"], . added only one character

//-->  Match Single Character with Multiple Possibilities
//search for a literal pattern with some flexibility with character classes. , regex /b[aiu]l/
let regex6 = /b[ae]l/ig;//1st letter is b, last letter is l, middle letters can be ae.
console.log(str.match(regex6))// ["bal","bel"]

let regex7 = /[aeiou]/ig;
console.log(str.match(regex7))//["o", "e", "e", "e", "a", "e", "i", "o", "i", "a", "o", "e", "o", "u", "e", "e"]

//--> Match Letters of the Alphabet, use character sets to specify a group of characters to match
let regex8 = /b[c-e]/ig;
console.log(str.match(regex8))//["be"]


//--> Match Numbers and Letters of the Alphabet at the same time,  /[a-z0-9]/ig
let regex9 = /[1-3a-c]/ig;
console.log(str.match(regex9));//["b", "a", "b", "b", "C", "C", "a", "1", "1", "2", "2", "3", "3"]
console.log(str.match(regex9));

//-->  Match Single Characters Not Specified, you do not want to match , negated character sets, ^
//  /[^aeiou]/gi
let regex10 = /[^a-p2-3 ]/ig;
console.log(str.match(regex10));//["r", "v", "y", "u", "r", "1", "1", "4", "4"]