//Write a function that prints the numbers from 1 to n. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
for (let N =1; N<=50; N++) {
     if(N % 3 == 0 && N % 5 == 0){
        console.log("FizzBuzz")
    }
    else if (N % 3 === 0) {
        console.log("Fizz");
    }
    else if(N % 5 === 0){
        console.log("Buzz");
    }

    else{
        console.log(N)
    }

}