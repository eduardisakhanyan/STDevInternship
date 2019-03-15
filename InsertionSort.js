function findPosition(arr, x , index) {
    for (let i = index; i >= 0; --i) {
        if (x < arr[i]) {
            [arr[index], arr[i]] = [arr[i], arr[index]];
        }    
    }
}

let array = [15, 2, 3, 8];
for (let i = 0; i < array.length; ++i) {
    findPosition(array, array[i] , i);
}
console.log(array);