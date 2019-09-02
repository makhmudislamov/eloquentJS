/* 
    Write a program that creates a string that represents an 8×8 grid, 
    using newline characters to separate lines. At each position of the grid there is either
    a space or a "#" character. The characters should form a chessboard.
    Passing this string to console.log should show something like this:
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
    When you have a program that generates this pattern, 
    define a binding size = 8 and change the program so that it works for any size, 
    outputting a grid of the given width and height.
*/


var size = 8; //this is the variable setting

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

// outer loop handles the lines
for (var y = 0; y < size; y++) { 
// adding either ' ' or '#' to the string that's being populated
    for (var x = 0; x < size; x++) {
        // checking whether to add space or hash symbol
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    // adding new line
    board += "\n";
}

console.log(board);