//Functions
console.clear();

//--> Reusable JavaScript with Functions

function f() {

    console.log("call function");
    var a = 2;
    console.log(a)
}

f();//You can call as much as you want

//--> Passing Values to Functions with Arguments

function f1(a, b) {
    console.log(a, b);
}
f1(5, 9);


function f2(a, b) {
    var c = a + b;
    console.log(c);
}
f2(5, 9);


function f3(a, b) {
    console.log(a * b);
}
f3(5, 9);
