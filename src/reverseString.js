
export default function reverseString(value) {
  if (typeof value === 'string') {
    let arr = value.split('');
    let reverseArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reverseArr.push(arr[i]);
    }
    return reverseArr.join('');
  } else {
    return 'Not a string';
  }
  
}