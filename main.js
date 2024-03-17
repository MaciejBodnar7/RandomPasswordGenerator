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

let passElOne = document.getElementById('pass-el-one');
let passElTwo = document.getElementById('pass-el-two');

const copyButton = document.getElementById('btn-copy');

function generatePassword() {
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
}

function copyToClipboard() {
  console.log(passElOne.textContent);
  const content = passElOne.textContent;
  navigator.clipboard.writeText(content);
}
