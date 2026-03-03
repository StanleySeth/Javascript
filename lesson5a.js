//Arrow functions
//This is a function that was introduced in the ECMA Script 6 and they give us the latest/modern way of defining functions in a comact manner.
//At times the arrow functions are said to be anonymous functions, why is it so? -This is because they use the name of the variables they are contained in 

const sayHello = () => {
    console.log("This is an Arrow Function")
}
sayHello();
console.log("==========================")
//Create an arrow function that is able to find the product of three numbers.
num = 2
num1 = 3
num2 = 4
Answer = num * num1 * num2
const product = () => {
    console.log("The product is: ",Answer)
}
product()