function Rectangle(width, height) {
    this.height = height;
    this.width = width;
  }
  
  Rectangle.prototype.calculateSquare = function () {
    return this.height * this.width;
  };
  
  Rectangle.prototype.toString = function () {
    return `Rectangle with height:${this.height} and width:${this.width}`;
  };
  
  function Square(side) {
    this.height = side;
    this.width = side;
  }
  
  Square.prototype.toString = function () {
    return `Square with height:${this.height} and width:${this.width}`;
  };
  
  Square.prototype = new Rectangle();
  
  const rect = new Rectangle(4, 5);
  console.log(rect.calculateSquare());
  
  const sqr = new Square(4);
  console.log(sqr.toString());
  