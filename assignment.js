// Assignment research and come up with examples on Object and Array data types. Show how to access items of the object and of an array.
//Object Datatype-Same as a Dictionary. Stores data in key–value pair. You are describing something
let student = {
    name: "Stanley",
    age: 19,
    course: "Full-stack software development",
    institution: "Modcom Institute of Technology",
    isRegistered: true
};

console.log(student)//Runs all the values under student
console.log(typeof(student))   //Shows the datatype
console.log(student.isRegistered)//Outputs if the student is registered

console.log("===================================")

//Array Datatype-Same as a list. Stores multiple values in an ordered list.You have a list
let hobbies = ["Swimming", "Reading novels", "Playing chess", "PC gaming"];
console.log(hobbies[2]);
console.log(typeof(hobbies))
