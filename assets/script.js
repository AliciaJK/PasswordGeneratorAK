// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();  //need to create a generate password function at some point
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
generateBtn.addEventListener("click", writePassword);
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//dont really get what Im going heregit git
function generatePassword(){


var thePassword = "";

// Add event listener to generate button

// this is the possible selections: 

var alphaCaps = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y","Z"];  
var alphaLower =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y","z"];
var number = ["1", "2", "3","4", "5", "6", "7", "8","9"]; 
var specialChar = ["!", "@", "#", "$", "%","^", "&", "*", "(", ")", ".", ">", "<", "-"]; 


var passwordLength = 8


 function thePrompts () {
   passwordLength = prompt("How many characters is your password?")

   if (passwordLength <8 || passwordLength >128)
    thePrompts();
 }


 thePrompts();
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1 need pop up asking for passowrd length
//var passwordLength = prompt("How many characters is your password?")

// 2 ask user if they want numbers  //ok will be true and cancel will be false 
var userNum = confirm("Do you want numbers?")

//3 ask for special characters
var userSpChar = confirm("Do you want special characters?")

//4 ask for capital letter
var userCaps = confirm("Do you want capital letters?")

// do they want lower case 
var userLowercase = confirm("Do you want lowercase letters?")

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// if  user select  A and B and D then concat those & then random select

var passwordArray = []

if (userNum){
passwordArray = passwordArray.concat(number);
console.log(passwordArray)
} 
  
if (userSpChar){
  passwordArray = passwordArray.concat(specialChar);
  console.log(passwordArray)
  } 

  if (userLowercase){
    passwordArray = passwordArray.concat(alphaLower);
    console.log(passwordArray)
    } 

    if (userCaps){
      passwordArray = passwordArray.concat(alphaCaps);
      console.log(passwordArray)
      } 


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
        
      //i is the counter (tells how long the passowrd needs to be by taking the user input of length )
      for(var i=0;i < passwordLength;i++){
        var thePassword = thePassword + passwordArray[ Math.floor(Math.random() * passwordArray.length)];

      console.log(thePassword)
      }


      //this calls the password we created
return thePassword;
}
