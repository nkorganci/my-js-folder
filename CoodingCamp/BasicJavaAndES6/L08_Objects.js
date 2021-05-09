//--> Build JavaScript Objects


// Objects are similar to arrays, you access the data in objects through properties.
// if  object has any non-string properties, it will automatically typecast them as strings.
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

    //-->Manipulating Complex Objects

var myMusic=[
    {//object in an array
    "artist":"Billy Joel",
    "title":"Piano Man",
    "Release_year": 1973,
    "formats":["CD", "8t","LP"],
    "gold": true 
        
    },//After each object add comma
    //Add record here
    
    {//second object in array
      
    "artist":"beau",
    "title":"Cereal Man",
    "Release_year": 19,
    "formats":["Youtube video"],
    "gold": true   
        
    }
]
    
//--> Accessing Nested Objects

var myStorage={
    "car": {
        "inside":{
            "glove box":"maps", "passenger seat":"crumbs" 
        }
     },
    "outside":{
        "trunk":"jack"
        }
};

var gloveBoxContents=myStorage.car.inside["passenger seat"];
console.log(gloveBoxContents);


//--> Accessing Nested Arrays
//Objects can contain both nested objects and nested arrays.

var ourPets=[
    {
        animalType:"cat",
        names:[
            "meowzer",
            "fluffy",
            "Kit-Cat"
        ]
    },//End of the 1st object in array
    
    {
        animalType:"dog",
        names:[
            "Spot",
            "Browser",
            "Frankie"
        ]
    }//End of the 2nd opbjec.

];

var animalT= ourPets[0].names[1];
var animalT2= ourPets[1].names[0];

console.log(animalT);
console.log(animalT2);



//--> Record Collection
// Setup
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  //Keep a copy of the collction for tests
  var collectionCopy=JSON.parse(JSON.stringify(collection))//copy of the object
  
  // Only change code below this line
  function updateRecords(id, prop, value) {
    if(value===""){
        delete collection[id][prop];
    }else if(prop==="tracks"){
        collection[id][prop]=collection[id][prop] || [];
        collection[id][prop].push(value);
    }else{
        collection[id][prop]=value;
    }
    return collection;
  }
  
  //Alter values blow to test your code
  updateRecords(2468, "tracks", "test");
  console.log(updateRecords(5439, 'artist', 'ABBA'));