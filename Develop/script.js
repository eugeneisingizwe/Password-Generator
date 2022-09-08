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
  var passwordLenght = parseInt(prompt("please choose a passowrd length of at least 8 characters and no more than 128 characters"));
  if (passwordLenght < 8 || passwordLenght > 128){
    alert("please enter betweern 8 characters and 128 charactars.");
    return null;
  }
//Determines the passed value and the type 
  if (number.isNaN(passwordLenght)){
    alert("please enter numbers only");
    return null;
  }

  //Confirms whether or not to incldue lowerCase, uppserCase, number, and/or specail characters  

  var lowerCase = confirm("Include lower case letters?")
  var upperCase = confirm("Include upper case letters?")
  var numbers = confirm("Incldue numbers")
  var specialCharacters = confirm("Include special characters?")

  //check condtion for at least one password 

if(!lowerCase && !upperCase && !numbers && !specialCharacters){
  alert("select at least one option");
  return null;
}

//Adding a concat() method to merge the arrys used to create the blanks and letters
if(lowerCase){
  selectLetter = selectLetter.concat(lowerCase)
}

if(upperCase){
  selectLetter = selectLetter.concat(upperCase)
}

if(numbers){
  selectLetter = selectLetter.concat(numbers)
}

if(specialCharacters){
  selectLetter = selectLetter.concat(specialCharacters)
}

for (let index = 0; index < passwordLenght; index++){
  var randomCharacter = random(selectLetter);

  finalPassword.poush(randomCharacter);
}

return finalPassword.join(" ");

}

function random(array){
  return array[Math.floor(Math.random()*array.lenght)];
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
