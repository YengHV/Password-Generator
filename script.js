// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// add a funtion to the button
function bfunction() {
//make and define varibles
  var charUpper = ["Q,W,E,R,T,Y,U,I,O,P,A,S,D,F,G,H,J,K,L,Z,X,C,V,B,N,M"];

  var char = ["q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m"];

  var num = ["0,1,2,3,4,5,6,7,8,9"];

  var sym = ["!,@,#,$,%,^,&,*,?"];


  
  
//prompts to take user input
    var passlength = prompt ("how many characters would you like your password to be?");

    if (passlength < 8 || passlength > 128){
        
        alert("Password must be 8-128 characters")
    }

    var userlength = passlength;
    //confirm if user wants uppercase
    var confirmUppercase = confirm ("would you like Uppercase letters included?");
    //confim if user wants numbers
    var confirmNumber = confirm ("would you like numbers included");
    //confirm if user wants special charaters
    var confirmSp = confirm ("would you like special characters?");
    
    //if statements
    if (
      (confirmUppercase === true) ||
      (confirmNumber === true) ||
      (confirmSp === true)
    ) {
      //having trouble making the for loop to generate the passworld
      for (var i = 0; i < char.length; i++) {
        var userpassword = Math.round(Math.random(char.length) * userlength)
        
      
      
      }
    

  
    }
      

    }
