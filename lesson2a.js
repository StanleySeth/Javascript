//Oject Datatype
//An object in Javasript is a datatype that stores

let person = {
    Name : "Seth Stanley",
    Age : 19,
    isRegistered : true
};

console.log("The details of the person is: ", person)

//First method is by use of brackets
console.log(person["Age"])

//Second method is by use of dot(.) notation
console.log(person.Name)

//Check the data type
console.log(typeof(person))

console.log("=======================================================")
//Array Datatype:
//  This refers to a collection of items that are on indexes
let fruits = ["Mango", 'pineapple', "Banana", "Orange", "Melon", "Grapes", "Pawpaw", "Lemon", "Apple"]
console.log("The entire array of fruits is: ", fruits)
//To access the items of an array we use the index
console.log(fruits[3])

//You can slice items of an array 
console.log(fruits.slice(2, 5))