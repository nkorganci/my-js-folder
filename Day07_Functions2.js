//Functions can be used before or after decleration
add(1,2);
function add(a, b){
    console.log(a+b);
}
add(1,2);

//We can declare function without a name
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