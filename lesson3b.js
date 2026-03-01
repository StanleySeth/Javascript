//While loop
//Below is a simple syntax of the While loop
//1. Initialization of a variable.
//  2. While keyword. 
// 3. Condition to be checked. 
// 4.Body of the while loop. 
// 5.Increment/Decrement.
let i = 0
while (i <= 10) {
    console.log("The new value is: ",i);
    i++
}

console.log("================================================")
//Come up with a js example of a map loop 
//map() is an array method that loops over each element and applies a function to it, returning a new array with the result
//Returns a new array, does not modify the original.
//Can use arrow functions or named functions.

const numbers = [1, 2, 3, 4];
const multiples = numbers.map(num => num * 2);
console.log(multiples);

console.log("========================")
const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]