let matrix = task11([1, 1, 1, 1, 2, 2, 2, 2, 4, 3, 2, 1, 4, 4, 4, 4]);

//////11//////
function task11(arr) {
    let matrix = [];
    let matrixSize = Math.sqrt(arr.length);
    for (let i = 0; i < matrixSize; ++i) {
        let line = [];
        for (let j = 0; j < matrixSize; ++j) {
            line.push(arr[i * matrixSize + j]);
        }
        matrix.push(line);
    }
    return matrix;
}
console.log(matrix);

//////12//////
function task12(matrix) {
    let result = 0;
    for (let line of matrix) {
        for (let val of line) {
            if (val % 3 == 2) {
                result += val * val;
            }
        }
    }
    return Math.sqrt(result);
}

console.log(task12(matrix));

//////13//////
function task13(matrix, k) {
    let oldLineK = matrix[k].map((val) => val);
    matrix[k].sort((a, b) => a - b);
    for (let j = 0; j < matrix.length; ++j) {
        if (j === k) {
            continue;
        }
        let line = matrix[j].map((val) => val);
        for (let i = 0; i < oldLineK.length; ++i) {
            let index = matrix[k].indexOf(oldLineK[i]);
            matrix[j][i] = line[index];
        }
    }
    return matrix;
}

console.log(task13([[1, 2, 3, 4], [2, 3, 4, 5], [4, 3, 2, 1], [1, 1, 1, 1]], 2));

//////14//////
function task14(matrix) {
    let result = [];
    for (let line of matrix) {
        let lineMax = Math.max(...line);
        result.push(line.lastIndexOf(lineMax));
    }
    return result;
}

console.log(task14(matrix));

//////15//////
function isPrime(num) {
    if (num === 1 || num === 0) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); ++i) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findMinimumPrimeNumber(arr) {
    let result = Infinity;
    for (let val of arr) {
        if (val < result) {
            if (isPrime(val)) {
                result = val;
            }
        }
    }
    if (result === Infinity) {
        return "No Prime";
    }
    return result;
}

function task15(matrix) {
    let result = [];
    for (let line of matrix) {
        let minimumPrime = findMinimumPrimeNumber(line);
        result.push(minimumPrime);
    }
    return result;
}

console.log(task15(matrix));

//////16//////
function isSorted(arr) {
    if (arr.length === 1) {
        return true;
    }
    let ascending = false;
    if (arr[0] < arr[1]) {
        ascending = true;
    }
    for (let i = 1; i < arr.length - 1; ++i) {
        if (ascending) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        } else {
            if (arr[i] < arr[i + 1]) {
                return false;
            }
        }
    }
    return true;
}

function task16(matrix) {
    for (let line of matrix) {
        if (!isSorted(line)) {
            matrix = matrix.filter((val) => val != line);
        }
    }
    return matrix;
}

console.log(task16([[1, 2, 3], [3, 2, 1], [1, 3, 2], [1, 1, 1]]));

//////17//////
function task17(matrix) {

}

//////18//////
function task18(matrix) {

}

//////19//////
function task19(matrix) {

}

//////20//////
function task20(matrix) {
    for (let line of matrix) {
        let lineLength = line.length;
        for (let i = 0; i < Math.floor(line.length / 2); ++i) {
            [line[i], line[lineLength - i - 1]] = [line[lineLength - i - 1], line[i]];
        }
    }
    return matrix;
}

console.log(task20(matrix));

//////21//////
function task21(matrix) {
    let middle = Math.floor(matrix.length / 2);
    for (let i = 0; i < middle; ++i) {
        for (let j = 0; j < middle; ++j) {
            [matrix[i][j], matrix[i + middle][j + middle]] = [matrix[i + middle][j + middle], matrix[i][j]];
        }
    }
    return matrix;
}

console.log(task21(matrix));

//////22//////
function task22(matrix) {
    let result = [];
    let i = 0;
    let j = 0;
    let matrixSize = matrix.length;
    let goUp = true;
    let n = 0;
    while (n != matrixSize * matrixSize) {
        if (goUp) {
            while (i >= 0 && j < matrixSize) {
                result.push(matrix[i][j]);
                --i;
                ++j;
                ++n;
            }
            if (j != matrixSize) {
                i = 0;
            } else {
                --j;
                i += 2;
            }
        } else {
            while (j >= 0 && i < matrixSize) {
                result.push(matrix[i][j]);
                ++i;
                --j;
                ++n;
            }
            if (i != matrixSize) {
                j = 0;
            } else {
                --i;
                j += 2;
            }
        }
        goUp = !goUp;
    }
    return result;
}

console.log(task22([[1, 2, 3, 10], [4, 5, 6, 11], [7, 8, 9, 12], [13, 14, 15, 16]]));