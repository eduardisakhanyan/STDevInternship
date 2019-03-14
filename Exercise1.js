//////1//////
function solve1(x) {
    if (x > -10 && x <= -6) {
        return x + 1;
    }
    if (Math.abs(x) <= 3) {
        return x * x;
    }
    return x;
  }
  
  //////2//////
  function solve2(a, b, x) {
    if (a + b > 10) {
        return a * x + b;
    }
    if (a + b >= -15 && a + b < 2) {
        return b * x - a;
    }
    return a + b;
  }
  
  //////3//////
  function solve3(a, x) {
    if (Math.abs(x) <= 4) {
        return x + 3 * a;
    }
    if (x > 5 && x <= 8) {
        return a * x - 2;
    }
    if (Math.abs(x) > 20) {
        return x * x;
    }
    return 3 * x;
  }
  
  //////4//////
  function isLeap(year) {
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        return true;
    }
    return false;
  }
  
  //////5//////
  {
    let x;
    let y;
    if (x < y) {
        [x, y] = [(x + y) / 2, x * y / 2];
    } else {
        [y, x] = [(x + y) / 2, x * y / 2];
    }
  }
  
  //////6//////
  function getTriangleType(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilateral triangle";
        }
        if (a === b || a === c || b === c) {
            return "Isosceles triangle";
        }
        return "Just a triangle :D";
    } else {
        return "No such triangle";
    }
  }
  
  //////7//////
  function findSolution(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        if (discriminant === 0) {
            return `Solution is ${-b / 2 * a}`;
        }
        return `Solutions are ${(-b + discriminant) / 2 * a}
                          and ${(-b - discriminant) / 2 * a}`;
    }
    return "no solution";
  }
  
  //////8//////
  function doesFit(a, b, c, d) {
    if (a >= c && b >= d) {
        return "Fits";
    }
    if (a >= d && b >= c) {
        return "Fits";
    }
    return "Does not fit";
  }
  
  //////9//////
  class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
  }
  
  function typeOfParallelogramm(A, B, C, D) {
    let sideAB2 = (A.x - B.x) ** 2 + (A.y - B.y) ** 2;
    let sideAD2 = (A.x - D.x) ** 2 + (A.y - D.y) ** 2;
    let sideBD2 = (D.x - B.x) ** 2 + (D.y - B.y) ** 2;
    if (sideAB2 === sideAD2) {
        if (sideBD2 === sideAB2 + sideAD2) {
            return "Square";
        }
        return "Rhomb";
    } else if (sideBD2 === sideAB2 + sideAD2) {
        return "Rectangle";
    }
  }
  
  //////10//////
  class Circle extends Point {
    constructor(x, y, r) {
        super(x, y);
        this.r = r;
    }
  }
  
  function findPointsOfContact(circle1, circle2) {
    let distanceOfCentres = Math.sqrt((circle1.x - circle2.x) ** 2 + (circle1.y - circle2.y) ** 2);
    if (distanceOfCentres < circle1.r + circle2.r) {
        return 2;
    }
    if (distanceOfCentres === circle1.r + circle2.r) {
        return 1;
    }
    return 0;
  }
  
  //////11//////
  function ifPointContainsInArea1(x, y) {
    if (x >= 0 && x < 3 && y >= Math.pow(Math.E, -x) && y <= Math.pow(Math.E, x)) {
        return true;
    }
    if (x < 0 && x > -3 && y < Math.pow(Math.E, -x) && y > Math.pow(Math.E, x)) {
        return true;
    }
    return false;
  }
  
  //////12//////
  function ifPointContainsInArea2(x, y) {
    if (y < 3 + 2 * x && y < -x && y > (x - 1) / 3) {
        return true;
    }
    return false;
  }