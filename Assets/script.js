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


function generatePassword(){
  return "password";
}

// create a funtion to take in all the password criteria

  // prompt user for lenght of password and save as a variable
  // check to make sure the lenght is between 8 and 128 characters
  // confirm lowercase, uppercase, numberic and special character
  // validate one of the 4 options were selected
  // create an object to store the user input

// create a separate global array for each of the 4 confirmations

//inside generatePassword function
  //create a variable to store user input from the password option function
  //create a new array that will take in all possible charcters that an be used 
  //for my new password
  //create conditional statements to push into possible character array....
  //ie if the user selected lower case then we need to push those elements in
  //the lowercase array into pssible character array
  //loop through the possible character array and retrun
  //characters based on the lenght given by user
  //return the result and pass to be generated on the page

