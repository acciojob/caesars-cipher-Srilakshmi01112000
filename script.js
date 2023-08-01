// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
 for (let i = 0; i < encodedString.length; i++) {
    const char = encodedString[i];

    // Check if the character is an uppercase letter
    if (/[A-Z]/.test(char)) {
      // Get the character code and decode it
      let charCode = encodedString.charCodeAt(i);
      let decodedCharCode = charCode - 13;

      // If the decoded character code is less than 'A', wrap around to the end of the alphabet
      if (decodedCharCode < 65) {
        decodedCharCode += 26;
      }

      // Convert the decoded character code back to a character and push it to the decodeArr
      decodeArr.push(String.fromCharCode(decodedCharCode));
    } else {
      // For non-alphabetic characters, just push them to the decodeArr as they are
      decodeArr.push(char);
    }
  }

  // Join the characters in decodeArr to form the decoded string
  const decodedString = decodeArr.join('');
  return; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
