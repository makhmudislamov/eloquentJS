/*
    Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
    For numbers divisible by 3, print "Fizz" instead of the number, 
    and for numbers divisible by 5 (and not 3), print "Buzz" instead.
    When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by 
    both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
    (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
    So if you solved it, your labor market value just went up.)
*/

// PSEUDOCODE
// loop over number 1-100
// if a number is divisible by 3:
// print Fizz
// if a number is divisible by 5:
// print Buzz
// if a number is divisible by 3 and 5:
// print FizzBuzz

for (let number = 1; number <= 100; number++) {
    if (number % 3 == 0) {
        console.log(number + "Fizz");
    } else if (number % 5 == 0) {
        console.log(number + "Buzz");      
    } else if () {
        // console.log("LALALALALALALA");   
        console.log(number);
           
    }
       
}

