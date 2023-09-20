// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLowLetters = ["abcdefghijklmnopqrstuvwxyz"]
var passwordUpLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var passwordNumbers = ["0123456789"]
var passwordSpecialChar = ["!@#$%&*?,"]
var answerValue1 = 0
var answerValue2 = 0
var answerValue3 = 0
var answerValue4 = 0
var finalValue = 0
var finalArray = []
var passwordNum1 = 0
var ranNum = 0
var arrayGen = []


// 26 + 26 +10 + 9 = 71


// Write password to the #password input
function writePassword() {
  var password = passwordPrompt();
  var passwordText = document.querySelector("#password");

  passwordText.value = arrayGen;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function passwordPrompt(){

  var passwordNum = prompt("How many characters do you want your password to be?", "Please input a number between 8-128");
  
  passwordNum1 = parseInt(passwordNum);

  if (passwordNum1 >= 8 && passwordNum1 <= 128) {
    Prompt5()
  }
  else if (passwordNum1 < 8 || passwordNum1 > 128) {
    alert("Please input a number between 8-128")
    passwordPrompt()
    }
    }  
    
    
    function Prompt5() {
    
      var passwordLow = confirm("Do you want lowercase letters?")
      if (passwordLow===true){
        var passwordArray1 = passwordLowLetters
        var answerValue1 =  26
        
      }
      else if (passwordLow===false) {
        var passwordArray1 = []
        var answerValue1 = 0
      }



    var passwordUp = confirm("Do you want uppercase letters letters?")
      if (passwordUp===true){
      var passwordArray2 =passwordUpLetters
      var answerValue2 = 26
     
    }
    else if (passwordUp===false) {
      var passwordArray2 = []
      var answerValue2 = 0
    }



    var passwordNumb = confirm("Do you want numbers?")
    if (passwordNumb===true){
      var passwordArray3 =passwordNumbers
      var answerValue3 =  10
      
    }
    else if (passwordNumb===false) {
      var passwordArray3 = []
      var answerValue3 = 0
    }


    var passwordSpec = confirm("Do you want special characters?")
    if (passwordSpec===true){
      var passwordArray4 = passwordSpecialChar
      var answerValue4 = 9
     
    }
    else if (passwordSpec===false) {
      var passwordArray4 = []
      var answerValue4 = 0
    }
   
  
  finalValue = answerValue1+answerValue2+answerValue3+answerValue4-1
  finalArray = passwordArray1 + passwordArray2 + passwordArray3 + passwordArray4
 
  
if (finalValue === -1) {
  alert("Must click OK on one of the password options!")
  passwordPrompt()  
}   
else if (finalValue != -1)
console.log(finalArray.length)  
finalPassword()
}

function finalPassword() {
  
  for (arrayGen.length=0; arrayGen.length< passwordNum1; arrayGen.length++) {
  
  min = Math.ceil(0);
  max = Math.floor(finalValue);
  ranNum =  Math.floor(Math.random() * (max - min) + min);
  console.log(ranNum)
  arrayGen = arrayGen + finalArray[ranNum]
  console.log(arrayGen)
  }

}
  






// create a funtion to take in all the password criteria

  // prompt user for lenght of password and save as a variable
  // check to make sure the lenght is between 8 and 128 characters
  // confirm lowercase, uppercase, numberic and special character
  // validate one of the 4 options were selected
  // create an object to store the user input

// create a separate global array for each of the 4 confirmations

//inside passwordPrompt function
  //create a variable to store user input from the password option function
  //create a new array that will take in all possible charcters that an be used 
  //for my new password
  //create conditional statements to push into possible character array....
  //ie if the user selected lower case then we need to push those elements in
  //the lowercase array into pssible character array
  //loop through the possible character array and retrun
  //characters based on the lenght given by user
  //return the result and pass to be generated on the page

