// Create a for loop that is able to print out all the leap years from 2000 to 2026
for(let year = 2000; year<=2026; year++){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
     console.log(year, " is a leap year");
    }else {
        console.log(year, " is NOT a leap year")
    }
}

console.log("+++++++++++++++++++++++++++++++++++++++++++")
//Tasks Task: Write a for loop to print all odd numbers from 1 to 19. 
for (let number = 1; number <= 19; number++) {
    if (number % 2 === 0) {
        console.log(number, " is Even");
    } else {
        console.log(number," is Odd");
    }
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
//Task: Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let i = 10; i>=1; i--) {
    console.log(i);
}
console.log("---------------------------------------------")
//  Task: Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
let numbers = [10, 20, 4, 45, 99, 1];
let largest = numbers[0]; // Assume first element is largest

for (let N = 1; N < numbers; N++) {
    if (numbers[N] > largest) {
        largest = numbers[N];
    }
}
console.log("The largest number is: ",largest);
console.log("==============================================")
//  Task: Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
for (let M = 1; M <= 10; M++) {
    console.log("5 x ",M," = ", (5 * M));
}
