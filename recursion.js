/* 
    Define a recursive function isEven corresponding to this description. 
    The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/


const isEven = num => {
    
    // if (num < 0) {
    //     return false;
    // } 
    if (isEven(num - 2) == 0)
        return true;

}

console.log(isEven(50));