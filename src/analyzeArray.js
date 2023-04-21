const arrayAverage = (objArray) => {
  let sum = objArray.reduce((total, current) => {
    return total + current;
  }, 0) 
  let average = sum / objArray.length;
  return average;
}

export default function analyzeArray(objArray) {
  if (!Array.isArray(objArray)) {
    throw new Error('Input is not an array');
  }
  if (!objArray.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new Error('Array contains non-number elements');
  }
  let object = {
    average: arrayAverage(objArray),
    min: Math.min(...objArray),
    max: Math.max(...objArray),
    length: objArray.length
  };
  return object;
}
