//Functions with parameters
//Parameters->Values that get passed as arguments when we invoke a function.
//They help us create functions that can be reusable throughout the program.    

function greetings(name){
    console.log("Hello",name, "How've you been?")
}
greetings("Stanley")
console.log("-===-==-=-=========-=-=-=-=-=-")
//Below is a function with parameters to calculate the sum of two numbers
function addition(a, b){
    sum = a + b
    console.log("The sum of the numbers is ",sum)
}
addition(30, 50)
console.log("=================================")
//By use of function that accepts parameters, calculate the area of a triangle whose base is    and height is
function Area(B,H){
    multiply = 1/2*(B * H)
    console.log("The Area of the triangle is ",multiply,"cm\u00B2")
}
Area(20, 12)
//Find the simple interest given the principal as 50000, rate as 5% and time as 8 years
console.log("=================================")
function SI(p,r,t){
    simpleinterest = (p * r * t)/100
    console.log("The Simple Interest is Kshs.",simpleinterest)
}
SI(50000, 5, 8)
