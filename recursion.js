/* 
    Define a recursive function isEven corresponding to this description. 
    The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/



const isEven = num => {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else if (num < 0) {
        // multiplying to -1
        return isEven(-num);
    } else {
        return isEven(num-2);
    }
}

console.log(isEven(21));