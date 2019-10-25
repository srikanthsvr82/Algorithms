
function FindPair(arr, sum) {

    // sort the input array first
    arr.sort()

    // have two pointers starting from left and right and check the sum if the sum of left and right is less than expected sum then increment the left otherwise decrement right until we find one

    for ( let i = 0, j = arr.length -1 ; i < j ; ) {

        if ( arr[i] + arr[j] < sum ) i++;
        if ( arr[i] + arr[j] > sum ) j--;

        if ( arr[i] + arr[j] === sum ) {
            return [i, j]; 
        }
    }

    return arr
}

console.log(FindPair([8, 7, 2, 5, 3, 1], 10))



