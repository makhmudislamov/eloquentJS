/*
    The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:
    console.log(sum(range(1, 10)));
    Write a range function that takes two arguments, start and end, and returns an array containing 
    all the numbers from start up to (and including) end.
    Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
    Run the example program and see whether it does indeed return 55.
    As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” 
    value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the 
    old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step 
    values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

const range = (start, end, step = 1) => {
    let rangeArray = [];
     
        if (step > 0) {
            for (let num = start; num <= end; num += step) {
                rangeArray.push(num);
            }
        } else if (step < 0) { 
            for (let num = start; num >= end; num -= step) { // need to fix this condition
                // rangeArray.unshift(num);
                console.log(num);           
            }
        }
        return rangeArray;
}

const sum = (arr) => {
    let sumOfArray = 0;
    
    for (let num of arr) {
        sumOfArray += num;
    }
    return sumOfArray;
} 

console.log(range(10, 2, -1));
// console.log(sum(range(1,10)));
