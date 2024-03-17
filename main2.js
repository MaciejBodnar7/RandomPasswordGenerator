console.log('RandomPasswordGenerator by MB');

const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const charactersNumbers = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

const charactersSymbols = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

const charactersOnly = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Checkbox
const checkOne = document.querySelector('#numbers');
const checkTwo = document.querySelector('#symbols');
// ------------

let passElOne = document.getElementById('pass-el-one');
let passElTwo = document.getElementById('pass-el-two');

const copyButton = document.getElementById('btn-copy');

function checkBoxRender() {
  if (checkOne.checked == true && checkTwo.checked == true) {
    //Generate All

    passElOne.textContent = ''; // clear text on start
    passElTwo.textContent = ''; // clear text on start
    function getRandom() {
      let random = Math.floor(Math.random() * characters.length);
      return random; // zwraca jedna losowy charakter z array
    }

    // render
    for (let i = 0; i < 14; i++) {
      passElOne.textContent += characters[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
      passElTwo.textContent += characters[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
    }
  } else if (checkOne.checked == true) {
    // Generate characters+numbers = charactersNumbers[]
    passElOne.textContent = ''; // clear text on start
    passElTwo.textContent = ''; // clear text on start
    function getRandom() {
      let random = Math.floor(Math.random() * charactersNumbers.length);
      return random; // zwraca jedna losowy charakter z array
    }

    // render
    for (let i = 0; i < 14; i++) {
      passElOne.textContent += charactersNumbers[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
      passElTwo.textContent += charactersNumbers[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
    }
  } else if (checkTwo.checked == true) {
    // Generate characters+symbols = charactersSymbols[]
    passElOne.textContent = ''; // clear text on start
    passElTwo.textContent = ''; // clear text on start
    function getRandom() {
      let random = Math.floor(Math.random() * charactersSymbols.length);
      return random; // zwraca jedna losowy charakter z array
    }

    // render
    for (let i = 0; i < 14; i++) {
      passElOne.textContent += charactersSymbols[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
      passElTwo.textContent += charactersSymbols[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
    }
  } else if (checkOne.checked == false && checkTwo.checked == false) {
    // Generate characters = charactersOnly[]
    passElOne.textContent = ''; // clear text on start
    passElTwo.textContent = ''; // clear text on start
    function getRandom() {
      let random = Math.floor(Math.random() * charactersOnly.length);
      return random; // zwraca jedna losowy charakter z array
    }

    // render
    for (let i = 0; i < 14; i++) {
      passElOne.textContent += charactersOnly[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
      passElTwo.textContent += charactersOnly[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
    }
  }
}

// function generatePassword() {
//   passElOne.textContent = ''; // clear text on start
//   passElTwo.textContent = ''; // clear text on start
//   function getRandom() {
//     let random = Math.floor(Math.random() * characters.length);
//     return random; // zwraca jedna losowy charakter z array
//   }

//   // render
//   for (let i = 0; i < 14; i++) {
//     passElOne.textContent += characters[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
//     passElTwo.textContent += characters[getRandom()]; // wywołuje 14 razy funkcje dodając do wygenerowanych wcześniej nową liczbe
//   }
// }

function copyToClipboard() {
  const content = passElOne.textContent;
  navigator.clipboard.writeText(content);
}

function copyToClipboardTwo() {
  const content = passElTwo.textContent;
  navigator.clipboard.writeText(content);
}
