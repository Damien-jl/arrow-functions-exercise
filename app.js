//1.
const double = arr => arr.map(val => val * 2);
  
//2.
const squareAndFindEvens = (numbers) => {
    var squares = numbers.map(num => num ** 2)
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
  }