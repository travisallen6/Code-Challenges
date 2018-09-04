/*
    Level 4: Nesting Structure Comparison
    Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structure as the first array.

    For example:

    // should return true
    [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
    [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

    // should return false 
    [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
    [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

    // should return true
    [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

    // should return false
    [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
    For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
*/

// SOLUTION: 
Array.prototype.sameStructureAs = function (other) {
    function compareArr(array1, array2) {
        if(array1.length !== array2.length) return false;
        for(let i=0; i < array1.length; i++) {
            if(Array.isArray(array1[i]) && Array.isArray(array2[i])) {
                return compareArr(array1[i], array2[i]);       
            } else if( Array.isArray(array1[i]) !== Array.isArray(array2[i])) {
                return false;
            }
        }
        return true;
    }
    let arr1 = this;
    let arr2 = other;
    return compareArr(arr1, arr2);
};