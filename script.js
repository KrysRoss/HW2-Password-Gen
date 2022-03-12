// Assignment Code
var generateBtn = document.querySelector("#generate");

//* create options for user to choose from --> Lowercase, uppercase, numbers, special characters

const uppercaseArray = [
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
const numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowercaseArray = [
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
const specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

let finalPasswordChars = [];

//* confirm() statements to find out what user wants to include in password

function generatePassword() {
  const lowerBoolean = confirm(
    "Do you want lowercase letters in your password?"
  );
  const upperBoolean = confirm(
    "Do you want uppercase letters in your password?"
  );
  const numberBoolean = confirm("Do you want numbers in your password?");
  const specialBoolean = confirm(
    "Do you want special characters in your password?"
  );

  let passwordLength = prompt(
    "Pick a password length between 8 and 128 characters"
  );

  //* run code for lowercase
  if (lowerBoolean) {
    finalPasswordChars = finalPasswordChars.concat(lowercaseArray);
  }

  if (upperBoolean) {
    finalPasswordChars = finalPasswordChars.concat(uppercaseArray);
  }

  if (numberBoolean) {
    finalPasswordChars = finalPasswordChars.concat(numbersArray);
  }
  if (specialBoolean) {
    finalPasswordChars = finalPasswordChars.concat(specialArray);
  }

  let password = "";

  //* loop over the finalPasswordChars array and randomly select elements from it

  //* loop as many times as the user specifies with their desired password length

  for (let i = 0; i < passwordLength; i++) {
    //* create a random number to use as the random index in the finalPasswordChars array ==> finalPasswordChars[randomIndex]
    var index = Math.floor(Math.random() * finalPasswordChars.length);

    password += finalPasswordChars[index];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//*
