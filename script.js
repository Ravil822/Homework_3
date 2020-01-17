/// set varibles for buttons
var generatePasswordBotton = document.getElementById("generate");
var copyPassword = document.getElementById("clipboard");
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRDTUVWXYZ"
var symbols = "!@#$%^&*(){}{}=<>/<>"
var passwordResult = document.getElementById("result");


// varibles for password criteria
var length, useSymbols, useLower, upperLower;
  
function generatePasswordLeght() {
    console.log(length);
    if (length < 8 || length > 128) {
        alert("Must be must be between 8 and 128 characters");
    } else {
        var newPassword = generatePassword();
        passwordResult.textContent = newPassword;
        }
        console.log(newPassword);
}

function generatePassword(){
    var availbleCharacters = "";
    availbleCharacters += numbers;
    var password = "";
    if(useSymbols){ 
        availbleCharacters += symbols
        password += symbols.charAt(Math.floor(Math.random() * symbols.length))
    } 
    if(useLower){ 
        availbleCharacters += lowerCase
        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length))
    }
    while(password.length < length) {
        password += availbleCharacters.charAt(Math.floor(Math.random() * availbleCharacters.length))

    }
    return password
};

generatePasswordBotton.addEventListener("click", function(){
 length = parseInt(prompt("How many characters would you like? Must be must be between 8 and 128 characters"));
useSymbols = confirm("Would you like to use symbols?");
useLower = confirm("Would you like to use lowercase letters?");
upperLower = confirm("Would you like to use uppercase letters?");
generatePasswordLeght();

});
