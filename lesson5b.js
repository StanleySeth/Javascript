//Arrow functions with parameters
//Parameters are functions that are executed when

const greet = (name) =>{
    console.log("Hello",name,"How have you been? I hope you are good.")
}
greet("Matugah");
greet("Stanley");

//Example 2
console.log("=========================")
//Below is a function to find the area of a circle
const pi = 3.142
const CircleArea = (pi, radius) =>{
    let area = pi * radius ** 2
    console.log("The area of the circle is: ",area,"cm\u00B2")
}
CircleArea(pi,28);
CircleArea(pi, 7);

console.log("================================")
//Come up with your own example of an arrow that utilizes 3 parameters
const CuboidVolume = (l, w, h) =>{
    let volume = l * w * h
    console.log("The volume of the Cuboid is: ",volume,"cm\u00B3")
}
CuboidVolume(2,3,4)
CuboidVolume(5,9,6)
