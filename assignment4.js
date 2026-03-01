let gross_salary = 18000; 
let contribution;

// Determine monthly contribution using if-else
if (gross_salary < 6000) {
    contribution = 150;
} else if (gross_salary < 8000) {
    contribution = 300;
} else if (gross_salary < 12000) {
    contribution = 400;
} else if (gross_salary < 15000) {
    contribution = 500;
} else if (gross_salary < 20000) {
    contribution = 600;
} else if (gross_salary < 25000) {
    contribution = 750;
} else if (gross_salary < 30000) {
    contribution = 850;
} else if (gross_salary < 50000) {
    contribution = 1000;
} else if (gross_salary < 100000) {
    contribution = 1500;
} else {
    contribution = 2000;
}

// Display results
console.log("Gross Salary: " + gross_salary);
console.log("Monthly Contribution: " + contribution);