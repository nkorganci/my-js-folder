
//Comparison with the Equality Operator
function testEqual(val){
    if(val==12){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

//Strict Equality Operator

//3 ===  3-->true, 3 === '3'-->false

function testStrict(val){
    if(val===7){
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7));//Equal
console.log(testStrict("7"));//Not Equal

  
    
    // 3 == '3'//true
    function testStrict2(val){
    if(val==7){
        return "Equal";
    }
    return "Not Equal";

}
    console.log(testStrict2(7));//Equal
    console.log(testStrict2("7"));//Equal

    //Example
function compareEquality(a,b){
    if(a==b){
        return "Equal";
    }
    return "Not Equal";
    
}

console.log(compareEquality(2,"2"));

//--> Inequality Operator-convert data types of values while comparing.
function compareEquality(a,b){
    if(a!=b){
        return "Equal";
    }
    return "Not Equal";
    
}

//--> Strict Inequality Operator
console.log(compareEquality(1,"2"));//true

function strictEqual(a){
    if(a!==10){
        return true;
    }
    return false;
}

console.log(strictEqual("10"));//True
console.log(strictEqual(10));//false
console.log(strictEqual(17));

//--> Less Than Operator

function lessThan(a){
    if(a<10){
        return "<10";
    }
    if(a<30){
        return "<30";
    }
    return "None of them"
}

console.log(lessThan(3));
console.log(lessThan(25));
console.log(lessThan(66));

//--> Logical And/Or Operator




//--> Returning Boolean Values from Functions

//If else can be shortened
function isEqualIf(a,){
    
    if(a===b){
        return true;
    }else{
        return false;
    }
}


//=== strict equality
function isEqual(a,b){
    return a===b;//strict equality
}


console.log(isEqual(2,2));//True
console.log(isEqual(2,"2"));//false, values and typs must be same.
console.log(isEqual(2,10));

//== equality
function isEqual(a,b){
    return a==b;
}

console.log(isEqual(2,2));//true
console.log(isEqual(2,"2"));//true