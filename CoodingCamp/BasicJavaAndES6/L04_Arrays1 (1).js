//---> Arrays

// append data to the end of an array is via the push() function.

//--> .push() function

var arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
arr1.push("3");//String can be added too
console.log(arr1);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);//added as 2nd dimension
arr2.push(2);// added to 1st dimention
console.log(arr2);



//--> .pop() function, remove and return the last element

var popRemove = [1, 3, 5, 0];
console.log(popRemove);
var removed = popRemove.pop();
console.log(removed);
console.log(popRemove);

//Ex: Remove the last element

var myArray = [["John", 23], ["cat", 2]];
var lastCh = myArray.pop();
console.log(lastCh);


//-->shift()  removes and return the first element
var ourArray = ["Stimpson", "J", ["cat"]];
console.log(ourArray);
var removedFromOurArray = ourArray.shift();
console.log(removedFromOurArray);
console.log(ourArray);



//--> unshift(): adds the element at the beginning of the array.

var a = ["Stimpson", "J", "cat"];
a.shift();
a.unshift("Happy");
console.log(a);
