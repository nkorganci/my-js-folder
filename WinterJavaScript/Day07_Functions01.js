
//--> Functions: 
//A function is a set of statement that perform a task or calculate a value

function greet(){//DECLARING THE FUNCTION

    //BODY OF THE FUNCTION
    
    console.log("Hello World");
        
    }
    
    greet();//Calling the function
    
    
    //--> Parameters and Arguments
    //Functions can have input
    
    function greetPeople(name){//name is a PARAMETER(input) which can not be accessible outside of this function
    console.log("hello " + name);
    console.log(`Hi ${name}`);
        
    }
    
    greetPeople("Sam");//--> Sam is an ARGUMENT( value of parameter)
    greetPeople("adam");

//Functions
function sum(){
    var num1=4;
    var num2=5;
    var total=num1+num2;
    return total;
}
console.log(sum());//9

//Put that container to another var
const result=sum();
console.log(sum());

function square(s){
    return s*s;
}
console.log(square(5));//25

//You can not assign directly to a variable
const x =function square(s){
    return s*s;
}
console.log(x)

//But you can add as
function square1(s){
    return s*s;
}
var x1=square1(5);
console.log(x1)//25

//If we give 2 parameter
console.log(square(5,6));//25
console.log(square("5"));//25
console.log(square("h"));//null
console.log(square("adam"));//null

//Adding parameter in the body
function addNums(num1=3,num2=4,num3=5){//not common but we can
    console.log(num1+num2);//5,7(if you dont assign any parameter)
    return num1+num2+num3;
    
}
//New values replaced the old one, 3rd one is not override.
console.log(addNums(2,3));//10
//If you dont use any parameter, it will use default ones, 3,4,5
console.log(addNums());//7, 12

//Functions can be used before or after decleration
add(1,2);
function add(a, b){
    console.log(a+b);
}
add(1,2);

//We can declare function without a name which is called anonomies
var diff=function (x,y){
    var d=x-y;
    console.log(d);
}

diff(3,4);//-1

//Create a anonomies function with 3 parameter and put it in a variable, 
//arguments 3,4,5

var addition=function(a,b,c){
    return a+b+c;
}

console.log(addition(3,4,5));//12
