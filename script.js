// set varibles for buttons
var generatePasswordBotton = document.getElementById("generate");
var copyPassword = document.getElementById("clipboard");

// set varible for password result
var passwordResult = document.getElementById("result");

// varibles for password criteria
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRDTUVWXYZ"
var symbols = "!@#$%^&*(){}{}=<>/<>"
var length, useSymbols, useLower, useUpper;
  
// function that check characters length
function generatePasswordLeght() {
    console.log(length);
    if (length < 8 || length > 128) {
        alert("Must be must be between 8 and 128 characters");
    } else {
        let newPassword = generatePassword();
        passwordResult.textContent = newPassword;
    }   
}

// function to generate password
function generatePassword(){
    var availbleCharacters = "";
    availbleCharacters += numbers;
    var password = "";
    if(useSymbols){ 
        availbleCharacters += symbols;
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    } 
    if(useLower){ 
        availbleCharacters += lowerCase;
        password += lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
    }
    if(useUpper){ 
        availbleCharacters += upperCase;
        password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));
    }
    while(password.length < length) {
        password += availbleCharacters.charAt(Math.floor(Math.random() * availbleCharacters.length));
    }
    return password;  
};

// create event to generate password botton
generatePasswordBotton.addEventListener("click", function(){
 length = parseInt(prompt("How many characters would you like? Must be must be between 8 and 128 characters"));
useSymbols = confirm("Would you like to use symbols?");
useLower = confirm("Would you like to use lowercase letters?");
useUpper = confirm("Would you like to use uppercase letters?");
generatePasswordLeght();
});

// create event to generate copy password botton
copyPassword.addEventListener("click", function(){
    var text = passwordResult.textContent;
    navigator.clipboard.writeText(text).then(function() {
        alert('Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
});




