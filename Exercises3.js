//////28//////
function productOfSums(n, p, a) {
    let result = 1;
    let valueARaisedMTimes = 1;
    for (let m = 1; m <= n; ++m) {
        valueARaisedMTimes *= a;
        let sum = 0;
        let tempValueA = valueARaisedMTimes;
        for (let k = 0; k <= p; ++k) {
            sum += tempValueA;
            tempValueA *= a;
        }
        result *= m * m * sum;
    }
    return result;
}

console.log(productOfSums(2, 0, 2));

//////29//////
function findPrimeNumbersInGivenRange(n) {
    let result = [];
    let isPrime = [];
    let currentPrimeNumber = 2;
    for (let i = 2; i <= n; ++i) {
        isPrime[i] = true;
    }
    do {
        for (let i = currentPrimeNumber * currentPrimeNumber; i <= n; i += currentPrimeNumber) {
            isPrime[i] = false;
        }
        for (let i = currentPrimeNumber + 1; i <= n; ++i) {
            if (isPrime[i]) {
                currentPrimeNumber = i;
                break;
            }
        }
    } while (currentPrimeNumber * currentPrimeNumber < n)
    for (let i = 2; i < isPrime.length; ++i) {
        if (isPrime[i]) {
            result.push(i);
        }
    }
    return result;
}

console.log(findPrimeNumbersInGivenRange(101));

//////30//////
function findNumbersInGivenRange(n, m) {
    let result = [];
    let maxPossibleNumber = Math.floor(Math.sqrt(m));
    for (let i = 2; i <= maxPossibleNumber; ++i) {
        let current = i * i;
        while (current > n && current <= m) {
            result.push(current);
            current *= i;
        }
    }
    return result;
}

console.log(findNumbersInGivenRange(0, 10));

//////2//////
function calculateTask2(n, m) {
    let result = 0;
    for (let i = n; i <= m; ++i) {
        result += i ** i;
    }
    return result;
}

console.log(calculateTask2(1, 3));

//////3//////
function calculateTask3(n) {
    let result = 0;
    for (let i = 1; i <= n; ++i) {
        let current = 1;
        for (let j = 1; j <= i; ++j) {
            current *= i + j * j;
        }
        result += (i + 1) * current;
    }
    return result;
}

console.log(calculateTask3(4));

//////4//////
function calculateTask4(x, n) {
    let result = 0;
    let powerOfX = x;
    let factOfI = 1;
    for (let i = 1; i <= n; ++i) {
        result += i ** i * powerOfX / factOfI;
        powerOfX *= x;
        factOfI *= i;
    }
    return result;
}

console.log(calculateTask4(1, 4));

//////5//////
function calculateTask5(n) {
    let result = 0;
    let factOfN;
    let index = 0;
    let oldFact = 1;
    for (let i = 1; i <= n; ++i) {
        let current = (-1) ** (i % 2);
        for (let j = index + 1; j <= 2 * i * i + 1; ++j) {
            oldFact *= j;
            if (j === n) {
                factOfN = oldFact;
            }
        }
        index = 2 * i * i + 1;
        current *= oldFact;
        result += current;
    }
    return result / factOfN;
}

console.log(calculateTask5(1));

//////6//////
function findPrimeDivisors(n) {
    let currentPrimeDivisor = 2;
    let primeDivisors = new Set();
    while (n != 1) {
        if (n % currentPrimeDivisor === 0) {
            n /= currentPrimeDivisor;
            primeDivisors.add(currentPrimeDivisor);
        } else {
            ++currentPrimeDivisor;
        }
    }
    return primeDivisors;
}

console.log(Array.from(findPrimeDivisors(100)));

//////7//////
function sumOfDigitsSquare(n, m) {
    let result = [];
    for (let i = 1; i <= n; ++i) {
        let sum = 0;
        let current = i;
        while (current != 0) {
            sum += (current % 10) ** 2;
            current = Math.floor(current / 10);
        }
        if (sum === m) {
            result.push(i);
        }
    }
    return result;
}

console.log(sumOfDigitsSquare(1000, 2));

//////8//////
function perfectNumbers(n) {
    let result = [];
    for (let i = 2; i <= n; ++i) {
        let sum = 1;
        for (let j = 2; j <= Math.floor(Math.sqrt(i)); ++j) {
            if (i % j === 0) {
                sum += j + i / j;
            }
            if (sum > i) {
                break;
            }
        }
        if (sum === i) {
            result.push(i);
        }
    }
    return result;
}

console.log(perfectNumbers(500));

//////9//////
function findPifagorNumbers(n) {
    let result = [];
    let maximumPossible = Math.ceil(Math.sqrt(n));
    for (let i = 2; i < maximumPossible; ++i) {
        for (let j = 1; j < i; ++j) {
            if (j * j + i * i > n) {
                break;
            }
            let a;
            let b;
            let c;
            if (i * i - j * j < 2 * i * j) {
                a = i * i - j * j;
                b = 2 * i * j;
                c = i * i + j * j;
            } else {
                b = i * i - j * j;
                a = 2 * i * j;
                c = i * i + j * j;
            }
            let currentTrio = `a:${a} b:${b} c:${c}`;
            result.push(currentTrio);
        }
    }
    return result;
}

console.log(findPifagorNumbers(25));

//////10//////
function findHowManyDigits(n) {
    let result = 1;
    while(10 ** result < n) {
        result++;
    }
    return result;
}

function findArmstrongNumbers(n) {
    let result = [];
    for(let i = 10 ; i < n ; ++i) {
        let current = i;
        let power = findHowManyDigits(i);
        let sum = 0;
        while(current) {
            let digit = current % 10;
            sum += digit ** power;
            current = Math.floor(current / 10);
        }
        if(sum === i) {
            result.push(i);
        }
    }
    return result;
}

console.log(findArmstrongNumbers(10000));