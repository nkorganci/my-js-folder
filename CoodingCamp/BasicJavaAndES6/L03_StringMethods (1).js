//String methods

//--->StringLength
var name = "Adam";
var nameLength = 0;//Must be initialized in order to use another operation.
nameLength = name.length;
console.log(nameLength);

//--->First Character
var firstChar = name[0];//VariableName[indexNumber]
console.log(firstChar)

//Any char value
var firstChar = name[2];
//var firstChar=name[9];//If index number bigger, undefined
console.log(firstChar)
var lastChar = name[name.length - 1]//last char
console.log(lastChar);



//--->String Immutable
//name[0]="B";//can not be assigned a single char
console.log(name);
name = "Badam" // But you can assign whole word
console.log(name);


//--->String with Function

function wordBlanks(myAge, myName, MyCountry) {
    var result = "";
    result = "my name is " + myName + " and my country is " + MyCountry;
    return result;
}

console.log(wordBlanks("11", "Adam", "Usa"));