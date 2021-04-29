/*
Arithmetic Operators
+,-,*,/,%,++,--,**,
% means remainder or Mod
x++ ---> POST INCREMENT
x-- ---> POST DECREMENT
++x ---> PRE INCREMENT
--y ---> PRE DECREMENT
*/
console.clear();
var x=12;
var y=3;
console.log(x+y);//12
console.log(x-y);//6
console.log(x*y);//27
console.log(x/y);//3
console.log(x%y);//0 
// Increment Decrement
console.log(x++);//12
console.log(x);//13
console.log(y--);//3
console.log(y);//2
console.log(++x);//14
console.log(x);//14
console.log(--y);//1
console.log(y);//1
//x=14
x+=3;// SAME AS x=x+3;
console.log(x);//17
//y=1
y-=3;//y=y-3
console.log(y)
x*=3;//x=3*x;
console.log(x);//51
y/=3;
console.log(y);//-0.66
//Exponent
console.log(x**2);//SAME AS x*x  2601

//Arithmetic Operators-Rounding
var a=2.3664;
console.log(Math.ceil(a))//Rounds up
console.log(Math.floor(a))//Rounds down
console.log(Math.round(a))//Rounds to closest one


var roundedNumber = Math.round(a)
var fixedNumber=a.toFixed(2);//How many digits should be after coma
console.log(fixedNumber);

