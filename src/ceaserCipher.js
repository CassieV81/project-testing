
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
  let cipher = [];

  for (let i = 0; i < stringArray.length; i++) {
    if (alphabets.includes(stringArray[i])) {
      let idx = alphabets.indexOf(stringArray[i]);
      let newIdx = idx + shift;
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
      let idx2 = upperAlphabets.indexOf(stringArray[i]);
      let newIdx2 = idx2 + shift;
      if (newIdx2 > 25) {
        newIdx2 = newIdx2 - 26;
        cipher.push(upperAlphabets[newIdx2]);
      } else if (newIdx2 < 0) {
        newIdx2 = newIdx2 + 26;
        cipher.push(upperAlphabets[newIdx2]);
      } else {
        cipher.push(upperAlphabets[newIdx2]);
      }
    } else {
      cipher.push(stringArray[i]);
    }
  }
  return cipher.join('');
}