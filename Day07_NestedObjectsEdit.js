//Nested Objects
var personInformation={
    first:"Jim",
    lastN:"Carry",
    age:50,
    address:{
        street:"5th Ave",
        city:"new York city",
        state:"New york"
    },
    hobbies:["music","sports","150K yearly"],
    salary:function(){
        return "150K yearly"
    }
};

console.log(personInformation);
console.log(personInformation.lastN);//Carry
console.log(personInformation.hobbies[1]);//Sport