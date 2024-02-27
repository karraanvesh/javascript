function linearSearch(arr , target) {
    let n = arr.length;
    for(let i = 0 ; i < n ; i++) {
        if(arr[i] == target) return i;
    }

    return NaN;
}

function binarySearch(arr , target) {
    let n = arr.length;
    let low = 0 , high = n - 1;

    while(low <= high) {
        let mid = low + Math.floor(((high - low) / 2 ));

        if(arr[mid] == target) return mid;

        if(arr[mid] > target)
        high = mid - 1;

        else
        low = mid + 1;
    }

    return NaN;
}

module.exports = {
    linear : linearSearch ,
    binary : binarySearch
}