//--> Use class Syntax to Define a Constructor Function
//ES6 provides a new syntax to create objects, using the class keyword.
//the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm

//Old: In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
var spaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new spaceShuttle("Jupiter");

//New: The class syntax simply replaces the constructor function creation:
class spaceShuttle1 {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
const zeus1 = new spaceShuttle1("Jubiter");
console.log(zeus1.targetPlanet);
//It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.

//--> Use getters and setters to Control Access to an Object
//You can obtain values from an object and set the value of a property within an object.
//Example 1
class Book {
    constructor(author) {
        this._author = author;
    }
    //getter
    get writer() {
        return this._author;
    }
    //setter
    set writer(updateAuthor) {
        this._author = updateAuthor;
    }
}

const novel = new Book("Anonymous");
console.log(novel.writer);//Anonymous
novel.writer = "newAuthor";
console.log(novel.writer);//newAuthor
//It is convention to precede the name of a private variable with an underscore (_)

//Example 2
function makeClass() {
    class Thermostat {
        constructor(temp) {
            this._temp = 5 / 9 * (temp - 32);
        }
        get temperature() {
            return this._temp;
        }
        set temperature(updatedTemp) {
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;//setter but how do you understand
temp = thermos.temperature;
console.log(temp);//26