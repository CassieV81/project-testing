
export default function calculator() {
  const add = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return 'Not an integer';
    } else {
      return x + y;
    }
  };
  const subtract = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return 'Not an integer';
    } else {
      return x - y;
    }
  };
  const multiply = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return 'Not an integer';
    } else {
      return x * y;
    }
  };
  const divide = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      return 'Not an integer';
    } else {
      return x / y;
    }
  };

  return {add, subtract, multiply, divide}
}