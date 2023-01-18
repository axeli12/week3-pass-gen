// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    pass = generatePassword();
    document.getElementById("password").placeholder = pass;
});

// Start function to generate password
function generatePassword() {
    enter = prompt("How many characters would you like for password? Choose between 8-128");
    if (!enter) {
        alert("Please enter a number");
    } else if (enter < 8) {
        enter = (alert("Please choose a number higher than 7"));        
    } else if (enter > 128) {
        enter = (alert("Please choose a number less than 129"));
    } else {
        

             }
            }
        

