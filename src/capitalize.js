
export default function capitalize(value) {

  if (typeof value === 'string') {
    let arr = value.split('');
    let firstArr = arr[0].toUpperCase();
    arr.splice(0, 1, firstArr);
    return arr.join('');
  } else {
    return 'Not a string';
  }
  
} 