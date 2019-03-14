////////1////////
function getSumOfSquares(n) {
    let result = 0;
    for (let i = 1; i <= n; ++i) {
        result += i * i;
    }
    return result;
}

console.log(getSumOfSquares(10));

////////2////////
function getPowerOfTwo(n) {
    let result = 1;
    result = result << n;
    return result;
}

console.log(getPowerOfTwo(4));

////////3////////
function findMinimumSumOfSquares(A) {
    let result = 0;
    let CEcounter = 1;
    while (result <= A) {
        result += CEcounter * CEcounter++;
    }
    return result;
}

console.log(findMinimumSumOfSquares(56));

////////4////////
function getSumOfPowerOfTwo(n) {
    let result = 0;
    for (let i = 1; i <= n; ++i) {
        result += getPowerOfTwo(i);
    }
    return result;
}

console.log(getSumOfPowerOfTwo(4));

////////5////////
function getSomeWeirdSum(n) {
    let result = 0;
    let divisor = Math.sin(1);
    for (let i = 1; i <= n; ++i) {
        result += i / divisor;
        divisor += Math.sin(i + 1);
    }
    return result;
}

console.log(getSomeWeirdSum(1));

////////6////////
function getAnotherWeirdSum(n) {
    let result = 0;
    for (let i = 1; i <= n; ++i) {
        result = Math.sqrt(2 + result);
    }
    return result;
}

console.log(getAnotherWeirdSum(2));

////////2////////
function findSumWithGivvenEpsilon(x, eps) {
    let result = 0;
    let currentElement = x;
    let CEcounter = 1;
    while (currentElement > eps) {
        result += currentElement;
        currentElement *= x * x / ((1 + CEcounter) * (2 + CEcounter));
        CEcounter += 2;
    }
    return result;
}

console.log(findSumWithGivvenEpsilon(2, 0.1));