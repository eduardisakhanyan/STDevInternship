function findPosition(arr, x , index) {
    for (let i = index - 1; i >= 0; --i) {
        if (x >= arr[i]) {
            break;
        }
        [arr[i+1], arr[i]] = [arr[i], arr[i+1]];    
    }
}

let array = [1, 2, 3, 8, 1, 87];
for (let i = 0; i < array.length; ++i) {
    findPosition(array, array[i] , i);
}
console.log(array);