// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // I changed the generatePassword function to my varible passwordGen to render my random password generater. Unfortunately, it will only render once. For some reason I would not have it render with the function generatePassword.
  var password = passwordGen;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// I made a varible passLength to grab the user desired length.
var passLength = prompt ("Pick a number between 8 - 128.");
// varibles of upper, lower, numbers, and symnols.
var passUpper = ["QWERTYUIOPASDFGHJKLZXCVBNM"];
var passLower = ["qwertyuiopasdfghjklzxcvbnm"];
var passNum =[1234567890];
var passSym = ["!@#$%^&*"];
//an empty string varible
var passwordGen="";
// a function to grab the user desired length.
// I console logged it to see if what would happen if the wrong input was entered.
function getpassLength(){
  if (passLength < 8 || passLength > 128) {
    alert ("Password needs to be 8 - 128 characters");
    console.log("incorrect length");
  }
    
  else {
    console.log(passLength);
  }
}
// truthy or falsy choices to get user input.
var confirmUpper = confirm ("would you like upper case letters");
var confirmLower = confirm ("would you like lower case letters");
var confirmNum = confirm ("would you like numbers?");
var confirmSym = confirm ("would you like symbols?");
var addInpass = "";

//A function to make if statements and combine it with a varible that I named addInpass.
//this varible will take all the confirm choice that the user would like.
function confirmChoice(){

  if (confirmUpper == true){
    addInpass += passUpper;
  }
  if (confirmLower == true){
    addInpass += passLower;
  }
  if (confirmNum == true){
    addInpass += passNum;
  }
  if (confirmSym == true){
    addInpass += passSym;
  }
// console logged to see if the "if" statements were able to correctly combine the truthy choices.
  console.log(addInpass);

}

// a function to randomly generate the addInpass vairble with the user choice.
function generatePassword(){
  
  for (var i = 0; i < passLength; i++){
  passwordGen += addInpass[Math.floor(Math.random() * addInpass.length)]
  console.log(password);
}}


// called the functions getpassLenth, confirmChoice, and generatePassword.
getpassLength();
confirmChoice();
generatePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
