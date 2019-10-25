


function SortBinaryTree(arr) {

    // first get the number of zeros in the array
    let zeros = 0 ;
    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] === 0 ) {
            zeros++;
        }
    }

    for ( let i = 0; i < arr.length; i++ ) {
        if ( i < zeros ) {
            arr[i] = 0;
        } else {
            arr[i] = 1;
        }
    } 

    return arr;
}


// input is array of integers


console.log(SortBinaryTree([1,0,1,0,1,0,1]))
