/*
If Statement
if(light===green){
goStraight();
}else{
stop();
}
&&, ||, ! operators are used for comparison
*/
console.clear();
const x=4, y=5, z=2;
if(x>y){
  console.log('x is greater than 5');
}else if(x===y){
  console.log('x is equal to y')
}else{
  console.log('non of the above statement is true');//prints this block 
}
if(x>y && x>z){
  console.log('Block 1')
}else if(x>y || x>z){
  console.log('Block 2')//block 2
}else{
  console.log('BLock 3')
}
/* 
FALSE:
false, null, 0, NaN, "", undefined
*/
if(false){
     console.log('Block 1');
}else{
    console.log('Block 2');//this prints
}
if(null){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
if(0){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
if(NaN){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
if(""){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
if(undefined){
    console.log('Block 1');
}else{
    console.log('Block 2');
}
// BELOW ARE TRUE
if(true){
    console.log('Block 1');//Prints 
}else{
    console.log('Block 2');
}
if(6){
    console.log('Block 1');//Prints 
}else{
    console.log('Block 2');
}
if('ahmet'){
    console.log('Block 1');//Prints 
}else{
    console.log('Block 2');
}