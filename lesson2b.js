//Comparison Operators
//They usually evaluates to  a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20
console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)
console.log("===================================================")
//Logical operators
//They are used to evaluate two or more conditions and they also give a boolean answer
//Logical AND (&&) -> It evaluates if both the conditions/statements are true
console.log((number1<number2) && (number2>number1) && (number3>number2))
console.log("===================================================")

//Logical OR (||)-It requires only one condition to be true
console.log((number1>number2) || (number2>number1))
console.log("===================================================")

//Logical NOT (!)-It is used to negate a condition/statement. It reverses the value
console.log(!(number1<number2))