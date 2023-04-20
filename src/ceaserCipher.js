
const getAlphabets = () => {
  const alphabet = [];

  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

const getUpperAlphabets = () => {
  const alphabet = [];

  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

export default function ceaserCipher(string, shift) {
  let stringArray = string.split('');
  let alphabets = getAlphabets();
  let upperAlphabets = getUpperAlphabets();
  let idx;
  let newIdx;
  let cipher = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (alphabets.includes(stringArray[i])) {
      idx = alphabets.indexOf(stringArray[i]);
      newIdx = idx + shift;
      if (newIdx > 25) {
        newIdx = newIdx - 26;
        cipher.push(alphabets[newIdx]);
      } else if (newIdx < 0) {
        newIdx = newIdx + 26;
        cipher.push(alphabets[newIdx]);
      } else {
        cipher.push(alphabets[newIdx]);
      }
    } else if (upperAlphabets.includes(stringArray[i])) {
      idx = upperAlphabets.indexOf(stringArray[i]);
      newIdx = idx + shift;
      if (newIdx > 25) {
        newIdx = newIdx - 26;
        cipher.push(upperAlphabets[newIdx]);
      } else if (newIdx < 0) {
        newIdx = newIdx + 26;
        cipher.push(upperAlphabets[newIdx]);
      } else {
        cipher.push(upperAlphabets[newIdx]);
      }
    } else {
      cipher.push(stringArray[i]);
    }
  }
  return cipher.join('');
}