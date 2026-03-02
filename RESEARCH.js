// What is the difference between a dictionary in python, an object in javascript and a json data when dealing with APIs
//1.A Dictionary
//->A Python dictionary, a JavaScript object, and JSON are all used to represent data in key–value pairs, but they are not the same.
//->A Python dictionary is a built-in data structure in Python used to store data in key–value pairs. It is written using curly braces {} and keys are separated from values using a colon:
//->A dictionary can store different data types such as strings, numbers, lists, and even other dictionaries. It exists only within Python programs.
//2. An Object
//A JavaScript object is also a data structure used to store data in key–value pairs. It is similar in appearance to a Python dictionary. However, a JavaScript object can also contain functions (called methods). It exists only within JavaScript programs.
//3.JSON
//JSON (JavaScript Object Notation) is not a data structure but a text-based data format used to transfer data between systems, especially in APIs. JSON requires keys to be written in double quotes and does not support functions. When data is received from an API, JSON is converted into a Python dictionary in Python or a JavaScript object in JavaScript.

//Python dictionaries and JavaScript objects are programming language data structures, while JSON is a language-independent data format used for data exchange in APIs.



//Triple equal sign - Research
//Is called the strict equality operator.
//It is used to compare two values to determine whether they are equal in both value and data type.
//When using ===, the comparison will return true only if:
//The values are equal, and the data types are the same
//If either the value or the data type is different, the result will be false.
let N = true === true        // true
let X = 5 === "5"      // false
let Y = true === 5     // false
console.log(N)
console.log(X)
console.log(Y)

console.log("====================================")

// Research on arrow function, functions with parameters and anonymous functions in javascript.
//1.Arrow function
//An arrow function uses the => symbol.
//An arrow function is always written as a function expression.
//Note:This works only if the function has only one statement.
//They cannot be used as constructors.
//They are commonly used in callbacks.
//They allow implicit return when there is only one expression.
console.log("+++++++++++++++++++++++++++++")
//2.Anonymous function
//An anonymous function is a function without a name. It is usually stored in a variable or used as a callback function.
const greet = function() {
    console.log("Hello");
};
greet()
hey();
console.log("+++++==================++++++==")
//3.Functions with parameters
//A function with parameters is a function that accepts input values (arguments) when it is called. These parameters allow the function to work with different data.
function hey(name, age) {
    console.log("My name is ",name," and I am ",age," years old.");
}
hey("Stanley", 19);