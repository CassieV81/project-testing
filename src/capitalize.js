
export default function capitalize(value) {
  let arr = value.split('');
  let firstArr = arr[0].toUpperCase();
  let realValue = arr.splice(0, 1, firstArr);
  return arr.join('');
} 
// capitalize('value');