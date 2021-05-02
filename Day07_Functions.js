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
    
    //2 Parameter
    
    function missingArgument(name, age, color){
        console.log(`May name ${name} and age is ${age} and color is ${color});
    };