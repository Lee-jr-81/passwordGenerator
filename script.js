// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// Global variable declarations
//
let calcArraySum;
let randomLowerCase;
let randomUpperCaseIndex;
let randomLowerCaseIndex;
let randomNumberCaseIndex;
let randomSpecialCaseIndex;
let passConvert;
let passLength; // User chooses number between 10 - 64.
let passType = 0; // Increments if user adds 'yes' to password type function.
let lowercaseChar; // Variable to store prompt value
let uppercaseChar; // Variable to store prompt value
let numberChar; // Variable to store prompt value
let specialChar; // Variable to store prompt value
let charIncrement = 0; // variable to store character multiplier
let finalIndex;
let passwordfinal = "";

let lowerArray = [];
let upperArray = [];
let numberArray = [];
let specialArray = [];
let choiceArray = [];
let finalArray = [];
let shuffleArray = [];
let indexArray = [];

// FUNCTION TO PROMPT USER FOR PASSWORD OPTIONS

function getPasswordOptions() {
  // Initial setup calls
  function charLength() {
    passLength = prompt(
      "Choose a number between 10 and 64 for your password length: "
    );
    passConvert = parseInt(passLength);
    if (passConvert >= 10 && passConvert <= 64) {
      alert("Great! Your length is selected, lets move on...");
    } else {
      alert("Sorry! Your numbers werent correct, please try again...");
      charLength();
    }
  }
  // In order to read 'charLength' inner function, i need to call it inside the outer function. LEXICAL SCOPING.
  charLength();
  //
  //
  // Lowercase function call
  function lowercaseSelect() {
    lowercaseChar = prompt(
      "Do you want to include lowercase characters? Y or N:"
    );
    const lowercaseConvert = lowercaseChar.toUpperCase();
    console.log(lowercaseConvert);
    if (lowercaseConvert === "Y" || lowercaseConvert === "N") {
      if (lowercaseConvert === "Y") {
        charIncrement++;
        choiceArray.push("lowerCase");
      }
    } else {
      alert("Sorry! Your input was invalid, please type either Y or N:");
      lowercaseSelect();
    }
  }
  lowercaseSelect();

  //
  //
  // Uppercase function call
  function uppercaseSelect() {
    uppercaseChar = prompt(
      "Do you want to include uppercase characters? Y or N:"
    );
    const uppercaseConvert = uppercaseChar.toUpperCase();
    console.log(uppercaseConvert);
    if (uppercaseConvert === "Y" || uppercaseConvert === "N") {
      if (uppercaseConvert === "Y") {
        charIncrement++;
        choiceArray.push("upperCase");
      }
    } else {
      alert("Sorry! Your input was invalid, please type either Y or N:");
      uppercaseSelect();
    }
  }
  uppercaseSelect();

  //
  //
  // number function call
  function numberSelect() {
    numberChar = prompt("Do you want to include number characters? Y or N:");
    const numberConvert = numberChar.toUpperCase();
    console.log(numberConvert);
    if (numberConvert === "Y" || numberConvert === "N") {
      if (numberConvert === "Y") {
        charIncrement++;
        choiceArray.push("number");
      }
    } else {
      alert("Sorry! Your input was invalid, please type either Y or N:");
      numberSelect();
    }
  }
  numberSelect();

  //
  //
  // Special function call
  function specialSelect() {
    specialChar = prompt("Do you want to include special characters? Y or N:");
    const specialConvert = specialChar.toUpperCase();
    console.log(specialConvert);
    if (specialConvert === "Y" || specialConvert === "N") {
      if (specialConvert === "Y") {
        charIncrement++;
        choiceArray.push("special");
      }
    } else {
      alert("Sorry! Your input was invalid, please type either Y or N:");
      specialSelect();
    }
  }
  specialSelect();

  if (choiceArray.length === 0) {
    alert("Sorry! You havent pressed anything. Try again.");
    getPasswordOptions();
  }
  calcArray();
  console.log(charIncrement);
  console.log(choiceArray);
  // getRandom();
}

// Function for calculating how many arrays i need to access

function calcArray() {
  calcArraySum = passConvert / charIncrement;
  console.log(calcArraySum);
}

// Function for getting a random element from an array

function getRandomLower() {
  for (i = 0; i < calcArraySum; i++) {
    randomLowerCaseIndex = Math.floor(
      Math.random() * lowerCasedCharacters.length
    );
    lowerArray.push(lowerCasedCharacters[randomLowerCaseIndex]);
  }
  // console.log(lowerArray);
}

function getRandomUpper() {
  for (i = 0; i < calcArraySum; i++) {
    randomUpperCaseIndex = Math.floor(
      Math.random() * upperCasedCharacters.length
    );
    upperArray.push(upperCasedCharacters[randomUpperCaseIndex]);
  }
  // console.log(upperArray);
}

function getRandomNumber() {
  for (i = 0; i < calcArraySum; i++) {
    randomNumberCaseIndex = Math.floor(
      Math.random() * numericCharacters.length
    );
    numberArray.push(numericCharacters[randomNumberCaseIndex]);
  }
  // console.log(numberArray);
}

function getRandomSpecial() {
  for (i = 0; i < calcArraySum; i++) {
    randomSpecialCaseIndex = Math.floor(
      Math.random() * specialCharacters.length
    );
    specialArray.push(specialCharacters[randomSpecialCaseIndex]);
  }
  // console.log(specialArray);
}

// Function/Logic for determining what arrays to include
function callArrays() {
  if (choiceArray.includes("lowerCase")) {
    getRandomLower();
    for (i = 0; i < lowerArray.length; i++) {
      finalArray.push(lowerArray[i]);
    }
  }

  if (choiceArray.includes("upperCase")) {
    getRandomUpper();
    for (i = 0; i < upperArray.length; i++) {
      finalArray.push(upperArray[i]);
    }
  }

  if (choiceArray.includes("number")) {
    getRandomNumber();
    for (i = 0; i < numberArray.length; i++) {
      finalArray.push(numberArray[i]);
    }
  }

  if (choiceArray.includes("special")) {
    getRandomSpecial();
    for (i = 0; i < specialArray.length; i++) {
      finalArray.push(specialArray[i]);
    }
  }
  while (indexArray.length < finalArray.length) {
    randomChoice = Math.floor(Math.random() * finalArray.length);
    if (!indexArray.includes(randomChoice)) {
      indexArray.push(randomChoice);
    }
    // console.log(indexArray);
  }
  for (i = 0; i < indexArray.length; i++) {
    shuffleArray.push(finalArray[indexArray[i]]);
  }
  console.log(finalArray);
  console.log(shuffleArray);
  for (i = 0; i < shuffleArray.length; i++) {
    passwordfinal = passwordfinal + shuffleArray[i];
  }
  return passwordfinal;
  console.log(passwordfinal);
}
console.log(shuffleArray);
// const shuffledArr = finalArray.sort(() => Math.random() - 0.5);
// console.log(shuffledArr);

// console.log(choiceArray);

// Function to generate password with user input
function generatePassword() {
  programReset();
  getPasswordOptions();
  // shuffleArray = [];
  callArrays();
  // arrayReset();

  // return callArrays();
}

// Function to reset all arrays
function programReset() {
  calcArraySum = null;
  randomLowerCase = null;
  randomUpperCaseIndex = null;
  randomLowerCaseIndex = null;
  randomNumberCaseInde = null;
  randomSpecialCaseIndex = null;
  passConvert = null;
  passLength = null; // User chooses number between 10 - 64.
  passType = 0; // Increments if user adds 'yes' to password type function.
  lowercaseChar = null; // Variable to store prompt value
  uppercaseChar = null; // Variable to store prompt value
  numberChar = null; // Variable to store prompt value
  specialChar = null; // Variable to store prompt value
  charIncrement = 0; // variable to store character multiplier
  finalIndex = null;
  passwordfinal = "";

  lowerArray = [];
  upperArray = [];
  numberArray = [];
  specialArray = [];
  choiceArray = [];
  finalArray = [];
  shuffleArray = [];
  indexArray = [];
  // passwordfinal = "";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = passwordfinal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ///////////////////////////////////////////
// My code starts here

// HERE ARE THE PROMPTS
//
//
//
// getPasswordOptions();
// callArrays();
// getRandomLower();
// getRandomUpper();
// getRandomNumber();
// getRandomSpecial();
// callArrays();
// charLength();
// lowercaseSelect();
// uppercaseSelect();
// numberSelect();
// specialSelect();

//
//
// Lowercase function setup
//

//
//
//
//  Uppercase function setup
//

//
//
// Number function setup
//

//
//
//
// Special character function setup
//

//
//
//
//
//
//
//
//
//
//
//
////////////////////////////////////////////////////////////////////////////////////
// MY CODE STARTS HERE
//
//
// 1 x prompt for number of letters
// 4 x prompts and confirms for the length of the password.
//
// DONT FORGET TO ONLY RUN GAME LOGIC IF ONE OF THREE LETTERS IS CHOSEN!!
//
//
// Prompt user to select BASIC, INTERMEDIATE or PRO password
// *Bug to fix* *prompt allowing access when nothing is selected*
// let numberDecider;
// let userPasswordOption = prompt(
//   "Would you like a Basic, Intermediate or Pro level password? Press B , I or P:"
// );
// let userPasswordModify = userPasswordOption.toUpperCase();
// if (userPasswordModify === "B") {
//   numberDecider = 3;
// } else if (userPasswordModify === "I") {
//   numberDecider = 4;
// } else {
//   numberDecider = 5;
// }

// Grab 4 random numbers from each one of my base arrays.
// Declare variables to work with
// const lowerArray = [];
// const upperArray = [];
// const numberArray = [];
// const specialArray = [];

// for (i = 0; i < numberDecider; i++) {
//   let randomLowerCaseIndex = Math.floor(
//     Math.random() * lowerCasedCharacters.length
//   );

// console.log(lowerCasedCharacters[randomLowerCase]);
//   lowerArray.push(lowerCasedCharacters[randomLowerCaseIndex]);
// }
// console.log(lowerArray);

// for (i = 0; i < numberDecider; i++) {
//   const randomUpperCase = Math.floor(
//     Math.random() * upperCasedCharacters.length
//   );
//   console.log(upperCasedCharacters[randomUpperCase]);
// }

// for (i = 0; i < numberDecider; i++) {
//   const randomNumeric = Math.floor(Math.random() * numericCharacters.length);
//   console.log(numericCharacters[randomNumeric]);
// }

// for (i = 0; i < numberDecider; i++) {
//   const randomSpecial = Math.floor(Math.random() * specialCharacters.length);
//   console.log(specialCharacters[randomSpecial]);
// }
