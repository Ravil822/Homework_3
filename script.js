/// set varibles for buttons
var generatePassword = document.getElementById("generate");
var copyPassword = document.getElementById("clipboard");
// var numbers = "0123456789";
// var loverCase = "abcdefghijklmnopqrstuvwxyz";
// var upperCase = "ABCDEFGHIJKLMNOPQRDTUVWXYZ"
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = "!@#$%^&*(){}{}=<>/<>"
var passwordResult = document.getElementById("result");

// varibles for password criteria
var length = prompt("How many characters would you like? Must be must be between 8 and 128 characters");
var useSymbols = confirm("Would you like to use symbols?");
var useLower = confirm("Would you like to use lowercase letters?");
var upperLower = confirm("Would you like to use uppercase letters?");
  
function generatePasswordLeght() {
    if (length < 8 || length < 128) {
        alert("Must be must be between 8 and 128 characters");
    } else {
        password = numbers + loverCase + upperCase + symbols;
        for (var i = 0; i < length; i++) {
            var passwordResult = charAt(Math.floor(Math.random() * password.length))
        }
        console.log(passwordResult);


}

function generatePasswordLeght();
