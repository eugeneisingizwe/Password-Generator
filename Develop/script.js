//Global scope variables declared for all functions - Array of options for the compture to chose from
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "(", ")", ",", ".", "/", ":", ";", "<", ">", "?", "[", "]", "`", "{", "}", "|", "~", "*", "_", "-", "+", "="];


// locates the DOM in the HTML - Accessing the element by ID
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //Arrays used to create blanks and letters on the screen 
  var selectLetter = [];
  var finalPassword = [];
//Promtes length of password at least 8 characters and no more than 128 characters
  var passwordLenght = parseInt(prompt("How many charactars would like your password to be? Please choose between 8 and 128"));
  if (passwordLenght < 8 || passwordLenght > 128){
    alert("please enter number between 8 and 128");
    return null;
 }
// //Determines the passed value and the type 
  if (Number.isNaN(passwordLenght)){
    alert("Please enter numbers only");
    return null;
  }

  //Confirms whether or not for the user to incldue lowerCase, uppserCase, number, and/or specail characters  

  var lowerCase = confirm("Password will include lower case letters!")
  var upperCase = confirm("Password will include upper case letters!")
  var number = confirm("Password will incldue numbers!")
  var specialCharacters = confirm("Password will include special characters!")

  //check condtion for at least one password 

if(!lowerCase && !upperCase && !number && !specialCharacters){
  alert("You must select at least one option");
  return null;
}

//Adding a concat() method to merge the arrys used to create the blanks and letters
if(lowerCase){
  selectLetter = selectLetter.concat(alphabet)
}

if(upperCase){
  selectLetter = selectLetter.concat(upperAlpha)
}

if(number){
  selectLetter = selectLetter.concat(numbers)
}

if(specialCharacters){
  selectLetter = selectLetter.concat(symbols)
}
console.log(selectLetter)

//Returns a string of concatented characters of length password 
for (var i = 0; i < passwordLenght; i++){
  var randomCharacter = random(selectLetter);
  console.log(randomCharacter)

  finalPassword.push(randomCharacter);
}

return finalPassword.join("");

}
  function random(array){
    var randomIndex = Math.floor(Math.random()*array.length)
   var randomCharacter = array[randomIndex];
   return randomCharacter;
}

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");

  //Converted to password to make comparison easier
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var copy = document.querySelector("#copy");
copy.addEventListener("click", function(){
  copyPassword();
})

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("copy");
  alert("Passowrd copied to clipboard!");
}

