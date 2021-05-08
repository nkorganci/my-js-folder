//ARROW FUNCTIONS
//Normal function with 1 parameter
function sum(a){
    return a+100;
  }
  //to get the value from this function, we use function name
  console.log(sum(9));//109
  //I can use variable to use the normal function
  var sumResult=function(a){//anonymous function
    return a+100;
  }
  console.log(sumResult(10));//110

  //ARROW FUNCTION CASE 1
  //. 1. MUST. Remove function keyword and use => symbol between input and body
  var arrow=(a)=>{
    return a+100;
  }
  console.log(arrow(11));//111. WORKS FINE But we can make this shorter
  // 2. OPTIONAL We can delete curly braces and return keyword
  var arrow=(a)=> a+100;
  console.log(arrow(12));//112. WORK FINE 
  // 3. OPTIONAL We can remove paranthesis around the parameter IF THERE IS SINGLE PARAMETER
  var arrow= a => a+100;
  console.log(arrow(13));//113



  //ARROW FUNCTION CASE 2
  //Traditional function with 2 parameter
  function sum1(a,b){
    return a+b+100;
  }
  console.log(sum1(2,3));//2+3+100 = 105
  var sumResult1=function (a,b){
    return a+b+100;
  }
  console.log(sumResult1(3,4));//3+4+100 = 107
  //CONVERTING TO ARROW FUNCTION
  //. 1. MUST. Remove function keyword and use => symbol between input and body
  var arrow1=(a,b)=>{
    return a+b+100;
  }
  console.log(arrow1(4,5));//109
  // 2. OPTIONAL We can delete curly braces and return keyword
  var        arrow1=(a,b) => a+b+100;
  console.log(arrow1(6,7));//113


  
  //ARROW FUNCTION CASE 3
  //Traditional function with no parameter
  var x=10,y=20;
  function sum2(){
    return x+y+200;
  }
  console.log(sum2());//10+20+200=230
  var sumResult2=function (){//anonymous function with no parameter
    return x+y+200;
  }
  console.log(sumResult2());//230
  //CONVERTING TO ARROW FUNCTION-
  // 1. MUST. Remove function keyword and use => symbol between input and body
  var arrow2 = ()=>{
    return x+y+200;
  }
  //STARTED RECORDING 
  console.log(arrow2());//230
  // 2. OPTIONAL We can delete curly braces and return keyword
  var arrow3=()=> x+y+200;
  console.log(arrow3());//230