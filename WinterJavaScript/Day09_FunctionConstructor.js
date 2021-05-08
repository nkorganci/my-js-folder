//NORMAL FUNCTION IN JS
function car(brand, model, year){
    return {//We can return object in JS
      brand, model, year
    };
  }
  //calling the car function
  const carFunction = car('Honda', 'Accord', 2010);
  //
  console.log(carFunction);
  /*
  [object Object] {
    brand: "Honda",
    model: "Accord",
    year: 2010
  }
  */
  console.log(carFunction.brand);//"Honda"
  console.log(carFunction.model);//"Accord"
  console.log(carFunction.year);//2010
  //CONSTRUCTORS IN JS
  function Car(brand, model, year){
    //this keyword is a reference to the object in the code
    this.brand=brand;
    this.model=model;
    this.year=year;
  }
  //Calling the car constructor
  const carConstructor=new Car('Tesla','model 3', 2020);
  console.log(carConstructor);
  console.log(carConstructor.brand);//"Tesla"
  console.log(carConstructor.model);//"model 3"
  console.log(carConstructor.year);//2020
  const carConstructor1=new Car('BMW','E3000', 2021);
  console.log(carConstructor1);
  console.log(carConstructor1.brand);//"BMW"
  console.log(carConstructor1.model);//"E3000"
  console.log(carConstructor1.year);//2021

  function Person(name, age, hasWorkPermit, Languages){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.Languages=Languages;
  }
  var personConstructor = new Person('Jim', 23, false, ['English, German']);
  console.log(personConstructor)
  console.log(personConstructor.Languages[0]);
  
  //DESTRUCTURING
//--> 1-Ojbect Dstructuring
var user={
    name:"Sam",
    location:"Dallas",
    email:"sam@gmail.com"
}

//WAY 1
var name1 =user.name;
var locaton1 = user.location;
console.log(locaton1);

//WAY 2
//I can use destructing to make this code shorter
var{name, location, email}=user;
console.log(name);
console.log(location);

//--> 2-Destructuring Function
function getUser(){
    return{
        name2:"sam2",
        location2:"New York2",
        email2: "sam2@hotmail.com"
        
    }
}

var {name2, location2,email2}=getUser();
console.log(name2);

//--> 3-Destructuring Arrays
var user1=["Time", "Columbus","tim2@gmail.com"]
//Without destructuring
var userName=user1[0];
console.log(userName);

//with destructuring
var [userName1,userState1, userEmail1]=user1;
console.log(userName1)