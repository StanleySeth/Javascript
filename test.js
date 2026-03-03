//  Task: Write a for loop to print the division table of 5 from 5 x 1 to 5 x 10.
for (let M = 1; M <= 10; M++) {
    console.log("5 / ",M," = ", (5 / M));
}

console.log("===========================")
function greet(name) {
    console.log("Hello " + name,",how are you");
}
function processUser(callback) {
    const name = "Sylvia";
    callback(name);   // calling the function passed in
}
processUser(greet);