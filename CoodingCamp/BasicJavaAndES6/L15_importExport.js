//-->  Create a Module Script
/*
A script that uses this module type can now use the import and export features
<script type="module src="filename.js"></script>
*/

import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");
console.log(cap);


//--> Use export to Share a Code Block

// export, When you export a variable or function, you can import it in another file and use it without having to rewrite the code. 
const capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };//  exported which has function
//export { add, subtract };// you can export multiple funct
export const foo = "bar";//variable is exported
export const bar = "foo";//variable is exported


//-->  Use * to Import Everything from a File: import * as
//The above import statement will create an object
import * as myMathMOdule from "./string_function";
myMathMOdule.capitalizeString1("Adam");
console.log(myMathMOdule.capitalizeString1("Adam"))//adam

//--> Create an Export Fallback with export default
//export default if only one value is being exported from a file.

//Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

//Named function
export default function add(x, y) {
    return x + y;
}

//Anonymous function
export default function (x, y) {
    return x + y;
}

//-->  Import a Default Export
//The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is

// Only change code above this line
import subtract from "./math_functions.js"; subtract(7, 4);