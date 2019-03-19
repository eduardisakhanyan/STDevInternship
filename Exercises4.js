//////36//////
function deleteZeroes(arr) {
    return arr.filter(value => value !== 0);
}

// let array = [1, 3, 5, 0, 0, 4, 0, 7];

// console.log(deleteZeroes(array));

//////37//////
function descendingOrder(a, b) {
    return a < b;
}

function findPivotIndex(arr, left, right, compareCallBack) {
    let smallerIndex = left;
    let biggerIndex = right - 1;
    let pivot = arr[biggerIndex]
    while (biggerIndex > smallerIndex) {
        if (compareCallBack(arr[biggerIndex - 1], pivot)) {
            arr[biggerIndex] = arr[biggerIndex - 1];
            --biggerIndex;
        } else {
            [arr[smallerIndex], arr[biggerIndex - 1]] = [arr[biggerIndex - 1], arr[smallerIndex]];
            ++smallerIndex;
        }
    }
    arr[biggerIndex] = pivot;
    return biggerIndex;
}

function quickSort(arr, compareCallBack, left = 0, right = arr.length) {
    if (right - left <= 1) {
        return;
    }
    let pivotIndex = findPivotIndex(arr, left, right, compareCallBack);
    quickSort(arr, compareCallBack, left, pivotIndex);
    quickSort(arr, compareCallBack, pivotIndex + 1, right);
    return arr;
}

// let array = [1, 3, 5, 0, -5, 4, 0, 7];

// console.log(quickSort(array, descendingOrder));

//////40//////
let matrix1 = [[1, 2, 3],
              [5, 6, 1],
              [9, 0, 0]];
let row = 2;

quickSort(matrix1, (line1, line2) => line1[row] > line2[row]);
console.log(matrix1);

//////43//////
function sumOfElementsOfSortedLines(matrix) {
    let sum = 0;
    for(let arr of matrix) {
        let sumOfline = 0;
        for(let i = 0 ; i < arr.length; ++i) {
            if(arr[i] >= arr[i + 1] || i == arr.length - 1) {
                sumOfline += arr[i];
            } else {
                sumOfline = 0;
                break;
            }
        }
        sum += sumOfline;
    }
    return sum;
}

let matrix2 = [[1, 2, 3],
              [10, 6, 1],
              [9, 0, 0]];

console.log(sumOfElementsOfSortedLines(matrix2));

//////41//////
function findMinimumOfEachRow(matrix) {
    let lineLength = matrix[0].length;
    let rowLength = matrix.length;
    let arrOfMinimals = [];
    for(let j = 0; j < rowLength; ++j) {
        let minimal = Infinity;
        for(let i = 0 ; i < lineLength ; ++i) {
            if(matrix[i][j] < minimal) {
                minimal = matrix[i][j];
            }
        }
        arrOfMinimals.push(minimal);
    }
    return arrOfMinimals;
}

let matrix3 = [[1, 2, 3],
              [10, -4, 1],
              [9, 0, 0]];

console.log(findMinimumOfEachRow(matrix3));

//////51//////
function runMatrximBySpiral(matrix) {
   let lineFinish = matrix[0].length - 1;
   let rowFinish = matrix.length - 1;
   let lineStart = 0;
   let rowStart = 0;
   let spiralArr = [];
   while(lineStart <= lineFinish && rowStart <= rowFinish) {
       for(let i = lineStart ; i <= lineFinish ; ++i) {
           spiralArr.push(matrix[rowStart][i]);
       }
       ++rowStart;
       for(let i = rowStart ; i <= rowFinish ; ++i) {
           spiralArr.push(matrix[i][lineFinish]);
       }
       --lineFinish;
       for(let i = lineFinish ; i >= lineStart ; --i) {
           spiralArr.push(matrix[rowFinish][i]);
       }
       --rowFinish;
       for(let i = rowFinish ; i >= rowStart ; --i) {
           spiralArr.push(matrix[i][lineStart]);
       }
       ++lineStart;
   }
   return spiralArr;
}

let matrix4 = [[1, 2, 3, 4], 
              [12, 13, 14, 5],    
              [11, 16, 15, 6],
              [10, 9, 8, 7]];
let matrix5 = [[1, 2, 3], 
              [8, 9, 4],    
              [7, 6, 5]];   
let arr = runMatrximBySpiral(matrix4);
console.log(arr);