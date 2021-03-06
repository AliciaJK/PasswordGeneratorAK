// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();  //need to create a generate password function at some point
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//dont really get what Im going here
function generatePassword(){}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// this is the possible selections: 

var alphaCaps = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L","M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y","Z"];  
var alphaLower =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y","z"];
var number = ["1", "2", "3","4", "5", "6", "7", "8","9"]; 
var specialChar = ["!", "@", "#", "$", "%","^", "&", "*", "(", ")", ".", ",", ">", "<", "-"]; 


// need the use to select generate passoword
// this will be linked to the generateBtn above. 

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1 need pop up asking for passowrd length
var passwordLength = prompt("How many characters is your password?")

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

if (userNum===true && userLowercase===true && userCaps===true && userSpChar===true){
// then concat all lists 
passwordArray = userNum.concat(userLowercase, userCaps, userSpChar);
console.log(passwordArray)

  } else if(userNum===false && userLowercase===true && userCaps===true && userSpChar===true){
  // then concat true lists 
  passwordArray = userSpChar.concat(userLowercase, userCaps)
  console.log(passwordArray)

  } else if(userNum===false && userLowercase===false && userCaps===true && userSpChar===true){
  // then concat true lists 
  passwordArray = userSpChar.concat(userCaps);
  console.log(passwordArray)

  } else if(userNum===false && userLowercase===false && userCaps===false && userSpChar===true){
  // then concat true lists
  passwordArray = userSpChar.concat(userLowercase, userCaps);
  console.log(passwordArray)

  } else if(userNum===false && userLowercase===false && userCaps===false && userSpChar===false){
  // then end the whole thing

  } else if(userNum===true && userLowercase===false && userCaps===true && userSpChar===true){
  // then concat true lists
  passwordArray = userSpChar.concat(userNum, userCaps);
  console.log(passwordArray)
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
//i is the counter (tells how long the passowrd needs to be by taking the user input of length )
for(var i=0;i < passwordLength;i++)
{var index = Math.floor(Math.random() * passwordArray.length);

console.log(alphaCaps[index])
// now randomize the variable you just listed. 
function shuffle(passwordArray)

// print passwork in this box       <button id="generate" class="btn">Generate Password</button>


// if user presses cancel at any point in time 