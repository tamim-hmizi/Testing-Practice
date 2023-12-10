let capitalize = (word) => {
  let finalWord = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    finalWord += word[i];
  }

  return finalWord;
};

let reverseString = (word) => {
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
};

let calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};

let caesarCipher = (word, shift) => {
  const shiftChar = (char, shift) => {
    let asciiNum = char.charCodeAt();
    if (char.match(/[A-Z]/)) {
      return String.fromCharCode(((asciiNum - 65 + shift) % 26) + 65);
    } else if (char.match(/[a-z]/)) {
      return String.fromCharCode(((asciiNum - 97 + shift) % 26) + 97);
    } else {
      return char;
    }
  };
  let solved = "";
  for (let i = 0; i < word.length; i++) {
    solved += shiftChar(word[i], shift);
  }
  return solved;
};

let analyzeArray = (numbers) => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return {
    average,
    min,
    max,
    length: numbers.length,
  };
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
