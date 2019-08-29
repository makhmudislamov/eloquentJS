/*
    Write a loop that makes seven calls to console.log 
    to output the following triangle:
    #
    ## 
    ###
    ####
    #####
    ######
    #######
*/

/*
WHILE LOOP SOLUTION
let triangleHash = "#";
while ( triangleHash.length <= 7 ) {
    console.log(triangleHash);
    triangleHash += "#"
}
*/ 


// FOR LOOP SOLUTION
for (let triangleHash = "#"; triangleHash.length <= 7; triangleHash += "#") {
    console.log(triangleHash);
}


