//////1//////
function task1(array) {
    const lastIndexOfZero = array.lastIndexOf(0);
    let result = 1;
    if(lastIndexOfZero === -1) {
        return "Nothing to calculate";
    }
    for(let i = 0 ; i < lastIndexOfZero ; ++i) {
        if(array[i] > 0) {
            result *= array[i];
        }
    }
    return result;
}

console.log(task1([1,2,3,-3,-2,-1,0,50,24]));

//////2//////
function task2(array) {
    const firstIndexOfZero = array.indexOf(0);
    const lastIndexOfZero = array.lastIndexOf(0);
    if(firstIndexOfZero === -1) {
        return "Nothing to calculate";
    }
    if(firstIndexOfZero === lastIndexOfZero) {
        let sum = 0;
        for(let i = 0 ; i < firstIndexOfZero ; ++i) {
            sum += array[i];
        }
        return sum;
    }
    let sum = 0;
    for(let i = firstIndexOfZero ; i < lastIndexOfZero ; ++i) {
        if(array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}

console.log(task2([1,2,3,-3,-2,-1,0,50,24]));

//////3//////
function task3(array) {
    let sumOfUniqueNumbers = 0;
    let setOfNumbers = new Set();
    for(let val of array) {
        if(!setOfNumbers.has(val)) {
            sumOfUniqueNumbers += val;
            setOfNumbers.add(val);
        } else {
            sumOfUniqueNumbers -= val;
        }
    }
    return sumOfUniqueNumbers;
}

console.log(task3([1, 2, 2, 3, 3, 4, 5]));


//////4//////
function task4(number) {
    let countOfUniqueDigits = 0;
    let setOfDigits = new Set();
    while(number){
        if(!setOfDigits.has(number%10)) {
            countOfUniqueDigits++;
            setOfDigits.add(number%10);
        } else {
            countOfUniqueDigits--;
        }
        number = Math.floor(number / 10);
    }
    return countOfUniqueDigits;
}

console.log(task4(103401));

//////5//////
function isPrime(number) {
    if(number === 0 || number === 1) {
        return false;
    }
    for(let i = 2 ; i <= Math.sqrt(number) ; ++i) {
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}

function task5(array) {
    let sumOfPrimeNumbers = 0;
    for(let val of array) {
        if(isPrime(val)) {
            sumOfPrimeNumbers += val;
        }
    }
    return sumOfPrimeNumbers;
}

console.log(task5([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 17, 10021]));

//////6//////
function task6(array) {
    let maximumPrimeNumber = -Infinity;
    for(let val of array) {
        if(val > maximumPrimeNumber && isPrime(val)){
            maximumPrimeNumber = val;
        }
    }
    if(maximumPrimeNumber === -Infinity) {
        return "No Prime Number";
    }
    return maximumPrimeNumber;
}

console.log(task6([1, 2, 17, 5, 2, 4, 19, 20]));

//////7//////
function task7(array) {
    let negNumbers = [];
    let zeroes = [];
    let posNumbers = [];
    for(let val of array) {
        if(val === 0) {
            zeroes.push(val);
        } else if(val > 0) {
            posNumbers.push(val);
        } else {
            negNumbers.push(val);
        }
    }
    return negNumbers.concat(zeroes).concat(posNumbers);

}

console.log(task7([1, -1 , 2, -2, 3, -3, 0, 0, -4, 4]));

//////8//////
function task8(array) {
    let powerOfTwo = 2;
    let count = 0;
    for(let i = 0 ; i < array.length ; ++i) {
        if(array[i] > powerOfTwo && array[i] < powerOfTwo << 1) {
            ++count;
        }
        powerOfTwo = powerOfTwo << 1;
    }
    return count;
}

console.log(task8([1,5,15,35,64]));

//////9//////
function task9(array1,array2) {
    let uniqueNumbersOfArray2 = new Set();
    for(let val of array2) {
        uniqueNumbersOfArray2.add(val);
    }
    for(let val of uniqueNumbersOfArray2) {
        if(array1.indexOf(val) === -1) {
            array1.push(val);
        }
    }
    return array1;
}

console.log(task9([1, 2, 3],[1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 4, 7]));

//////10//////
function findPosition(val, sortedArray) {
    let start = 0;
    let end = sortedArray.length - 1;
    let middle = Math.floor( (start + end) / 2);
    while(val != sortedArray[middle] && start !== end) {
        if(val < sortedArray[middle]) {
            start = middle + 1;
        } else {
            end = middle;
        }
        middle = Math.floor( (start + end) / 2);
    }
    if(val > sortedArray[middle]) {
        return middle;
    }
    return middle + 1;
}

function task10(sortedArray,array) {
    for(let val of array) {
        let position = findPosition(val, sortedArray);
        sortedArray.splice(position,0,val);
    }
    return sortedArray;
}

console.log(task10([7, 5, 3, 1],[8, 6, 4, 2, 0]));