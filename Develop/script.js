// Assignment Code
var generateBtn = document.querySelector("#generate");

var confirmLowercase;
var confirmUppercase;
var confirmCharacter;
var confirmNumber;

var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var character = '!@#$%^&*()-=`~+_{}[]<>,./?|"'.split("")
var number = "0123456789".split("")

var choices;

generateBtn.addEventListener("click", function () {
    pass = generatePassword();
    document.getElementById("password").placeholder = pass;
});

// Start function to generate password
function generatePassword() {
    enter = prompt("How many characters would you like for password? Choose a number between 8-128");
    if (!enter) {
        alert("Please enter a number");
    } else if (enter < 8) {
        enter = (alert("Please choose a number higher than 7"));        
    } else if (enter > 128) {
        enter = (alert("Please choose a number less than 129"));
    } else {

        confirmLowercase = confirm("Will this contain Lowercase letters?");
        confirmUppercase = confirm("Will this contain Uppercase letters?");
        confirmCharacter = confirm("Will this contain special characters?");
        confirmNumber = confirm("Will this contain numbers?");

         }

         if (!confirmLowercase && !confirmUppercase && !confirmCharacter && !confirmNumber) {
            choices = alert("Please select at least one character");
        } else if (confirmLowercase && confirmUppercase && confirmCharacter && confirmNumber) {
            choices = lowercase.concat(number, uppercase, character);
        } else if(confirmUppercase && confirmCharacter && confirmNumber) {
            choices = uppercase.concat(character, number);
        } else if (confirmLowercase && confirmCharacter && confirmNumber) {
            choices = lowercase.concat(number, character);
        } else if (confirmLowercase &confirm && confirmCharacter) {
            choices = lowercase.concat(uppercase, character);
        } else if (confirmLowercase &confirm && confirmNumber) {
            choices = lowercase.concat(uppercase, number);
        } else if (confirmCharacter && confirmNumber) {
            choices = character.concat(number);
        } else if (confirmLowercase && confirmCharacter) {
            choices = lowercase.concat(character);
        } else if(confirmUppercase && confirmCharacter) {
            choices = uppercase.concat(character);
        } else if (confirmLowercase && confirmNumber) {
            choices = lowercase.concat(number);
        } else if (confirmLowercase &confirm) {
            choices = lowercase.concat(uppercase);
        } else if(confirmUppercase && confirmNumber) {
            choices = uppercase.concat(number);
        } else if (confirmLowercase) {
            choices = lowercase;
        } else if (confirmUppercase) {
            choices = uppercase;
        } else if (confirmCharacter) {
            choices = character;
        } else if (confirmNumber) {
            choices = number;
        } 
         

        var password = [];

        for (var i = 0; i < enter; i++) {
            var pickChoices = choices[Math.floor(Math.random() * choices.length)];
            password.push(pickChoices);
        }

        var pass = password.join("");
        UserInput(pass);
        return pass;
    }
    // This puts the password value into the textbox
    // Changed function input to use textcontent
    function UserInput(pass) {
        document.getElementById("password").textContent = pass;
    
    }
    
        

