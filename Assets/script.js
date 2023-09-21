// Assignment Code
// variable creator
var generateBtn = document.querySelector("#generate");
var passwordLowLetters = ["abcdefghijklmnopqrstuvwxyz"]
var passwordUpLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var passwordNumbers = ["0123456789"]
var passwordSpecialChar = ["!@#$%&*?,"]
var passwordArray = []
var answerValue = 0
var inputNum = 0
var ranNum = 0
var arrayGen = []

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
  
  //converts input to a number
  inputNum = parseInt(passwordNum);

  
  //checks if input value falls within range
  if (inputNum >= 8 && inputNum <= 128) {
    Prompt()
  }
  else  {
    alert("Please input a number between 8-128")
    passwordPrompt()
    }
  
    }  
    
    //prompts for password criteria
    function Prompt() {
    
      var passwordLow = confirm("Do you want lowercase letters?")
      if (passwordLow===true){
        passwordArray = passwordArray + passwordLowLetters
        answerValue =  26
        
      }
      



    var passwordUp = confirm("Do you want uppercase letters letters?")
      if (passwordUp===true){
      passwordArray = passwordArray + passwordUpLetters
      answerValue = answerValue + 26
     
    }
   

    var passwordNumb = confirm("Do you want numbers?")
    if (passwordNumb===true){
      passwordArray = passwordArray + passwordNumbers
      answerValue =  answerValue + 10
      
    }
   

    var passwordSpec = confirm("Do you want special characters?")
    if (passwordSpec===true){
      passwordArray = passwordArray + passwordSpecialChar
      answerValue = answerValue + 9
     
    }
   
   
  // will be used for random numberr generator.  Subtracted 1 because arrays start at 0
  answerValue = answerValue-1
   
  // makes sure one of the password options is picked
if (answerValue === -1) {
  alert("Must click OK on one of the password options!")
  passwordPrompt()  
}   
else if (answerValue != -1)
 
finalPassword()
}
// creates a random number based on lenght of my final array that included all user input password options
function finalPassword() {
  
  for (arrayGen.length=0; arrayGen.length< inputNum; arrayGen.length++) {
  
  min = Math.ceil(0);
  max = Math.floor(answerValue);
  ranNum =  Math.floor(Math.random() * (max - min) + min);
  arrayGen = arrayGen + passwordArray[ranNum]
  console.log(arrayGen)
  }

}
  
