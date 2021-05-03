//--> While Loops

var myArray = [];
var number=5;
while(number>=0){
  myArray.push(number);
  number--;
}

console.log(myArray);

//--> For Loops

var forLoopArray=[];
for(var i=0;i<5;i++){
    forLoopArray.push(i);
}
console.log(forLoopArray);

//--> Odd/Even Numbers With a For Loop

var oddEven=[];
for(var i=0;i<5;i++){
    if(i%2==0){
        oddEven.push(i);
    }
}

console.log(oddEven);


//--> Iterate Through an Array with a For Loop
    
    
    var arr1=[1,2, 3, 4];
    var total=0;
    for(var i=0;i<arr1.length;i++){
        console.log(arr1[i]);//prints one by one
        total +=arr1[i];//Addition of array values
    }
    
    console.log(total);
    
    //--> Nesting For Loops
    
    var arr2 = [ [1,2], [3,4], [5,6] ];
    var sum=0;
    for(var i=0; i<arr2.length;i++){
        for(var j=0; j<arr2[i].length;j++){
            sum =sum+arr2[i][j];
            
        }
    }
    
    console.log(sum);
    
    
    //--> Do...While Loops
    
    var arr3=[];
    var i=0;
    do{
        arr3.push(i);
        i++;
    }while (i<4);
    
    console.log(i, arr3);
    
    2:24 Profile Lookup aa
    //sdf
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    