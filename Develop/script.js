// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// need the use to select generate passoword
// this will be linked to the generateBtn above. 


// 1 need pop up asking for passowrd length



// 2 ask user for numbers 




//3 ask for special characters




//4 ask for capital or lower case




// 5 generate password



// print passwork in this box       <button id="generate" class="btn">Generate Password</button>



// if user presses cancel at any point in time 