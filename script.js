var generateBtn = document.querySelector("#generate");

function myFunction() {
  var length = prompt("How many characters?"); // minimum 8, maximum 256

  while (length < 8 || length > 129) {
    length = prompt("How many characters?");
  }

  var upper = confirm("Would you like to include upper case letters?");
  var lower = confirm("Would you like to include lower case letters?");
  var special = confirm("Would you like to include special characters?");
  var number = confirm("Would you like to include numbers?");

  var upperCasePool = [
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
  var lowerCasePool = [
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

  var specialCharacterPool = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "~",
    "-",
    "=",
  ];

  var numberCasePool = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var selectedPool = [];

  // filter
  if (upper === true) {
    selectedPool = selectedPool.concat(upperCasePool);
  }

  if (lower === true) {
    selectedPool = selectedPool.concat(lowerCasePool);
  }

  if (special === true) {
    selectedPool = selectedPool.concat(specialCharacterPool);
  }

  if (number === true) {
    selectedPool = selectedPool.concat(numberCasePool);
  }

  var generatedPassword = "";

  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random() * selectedPool.length);

    generatedPassword = generatedPassword + selectedPool[randomNumber];
    // generatedPassword += myLetter;
  }

  return generatedPassword;
}

// generateBtn.addEventListener("click", myFunction);

// if (window.prompt === "yes" || window.prompt === "YES") {

//   prompt()

// } else if (window.prompt = "" || window.prompt = null) {

// });

//just commented out 1:49pm
// buttonEl.addEventListener("click", function () {
//   alert("button clicked");
// });

// function generatePassword() {
// console.log("You clicked the button!");
// window.alert("Hello! Please select password length");

// let lower = "abcdefghijklmnopqrstuvwxyz";
// let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// lower = lower.split("");
// upper = upper.split("");
// console.log(lower);
// for (let i = 0; i < str.length; i++) {
//   console.log(str.charCodeAt(i), str[i]);
// }

//let length = prompt('enter a length')

// 1. prompt the user for the password criteria
// a. password length 8 - 128
// b. lowercasse, uppercase, numbers, special characters
// 2. validate the input.
// 3. Generate password based on criteria

//   return "Generated password will go here!";
// }

// Write password to the #password input
function writePassword() {
  var password = myFunction();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
