//--> Build JavaScript Objects


//Objects are similar to arrays, you access the data in objects through properties.
//if  object has any non-string properties, it will automatically typecast them as strings.
// Accessing Object Properties with Dot Notation  (.) and bracket notation ([])

var cat={
    "name":"Whisker",
    "legs":2,
    "friends": ["a", "b"],
    2:"two from cat",
    size:"big",
    "drinks and food":"water and milk"
    
};
//(.) notation
var catName= cat.name;
var catSize=cat.size;
console.log(catName);//Whisker
console.log(cat.size);//Big

//[] notation, if the property has a space
var food=cat["drinks and food"];
console.log(food)

//Accessing Object Properties with Variables
var numberTwo="2";//both 2 and "2" works for assigning variables.
var numberTwo=2;
var player=cat[numberTwo];
console.log(player);

//-->Updating Object Properties
//1st Way class.property
cat.name="Whiskers Friend";
console.log(cat.name)
//2nd Way class[]
cat.name="whiskers brother";
console.log(cat.name)

//for numbers use bracket
cat[2]="two updated"
console.log(cat[2]);

//-->Add New Properties to a JavaScript Object
cat.voice="Miaw";
console.log(cat.voice);
cat["eye"]="blue";
console.log(cat.eye);

//-->Delete Properties from a JavaScript Object
delete cat.voice;
console.log(cat.voice);//undefined, because it was deleted

//--> Using Objects for Lookups
//Objects can be thought of as a key/value storage, like a dictionary.
function phoneticlookup(val){
    var result="";
    
    var lookup={
        
        1:"one",
        2:"two"
    };
    result=lookup[val];
    return result;
    }
    
    console.log(phoneticlookup(2));
    
    //--> Testing Objects for Properties
    //.hasOwnProperty(propname) , return true or false
    var myObj={
        top:"Hat",
        bottom:"shoes"
    }
    myObj.hasOwnProperty("top")
    
    1 59