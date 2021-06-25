var match;
var passLength;
var passUpper;
var passLower;
var passNum;
var passSpec;
var result;
var bankUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var bankLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var bankNum = ["1","2","3","4","5","6","7","8","9","0"];
var bankSpec = ["!","@","#","$","%","&","*"]

console.log(bankUpper);
console.log(bankLower);
console.log(bankNum);
console.log(bankSpec);

    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page

// Listens for a button click.

document.getElementById("generate").addEventListener("click", function(event) {

    event.preventDefault();

    console.log('\nButton has been clicked.');

    // Calls functions to present a series of prompts for password criteria. Responses to prompts will be stored in variables for determining randomization of password.

    checkLength();

    // If the character length requirement has been satisfied, the character types function is called. Otherwise, no function are called and the process ends.

    if (match == 1) charTypes();
    else console.log('User has terminated process.')
});

function checkLength() {

    console.log('Length function has been called.');

    // Length must be at least 8 characters and no more than 128 characters.

    passLength = prompt('1. How long do you want your password to be?\n- Minimum 8 characters\n- Maximum 128 characters');

    // Reset criteria checker.

    match = 0;

    // This cycles through all permitted password lengths (8-128 characters).

    for (let i = 8; i < 129; i++) {
        if (passLength == i) match = 1; // The user's number meets the requirement.            
    }
    // Does the user's number meet the requirement?

    if (match == 1) console.log(passLength + ' meets length requirement.');
        else {
            result = confirm('Number is invalid.\n- OK to restart\n- Cancel to quit');
            console.log(passLength + ' fails length requirement.');

            // If the user clicks OK, the process begins again. Otherwise the function returns.

            if (result == true) checkLength();
            else return;
        }
}

function charTypes () {

    console.log('Types function has been called.');

    // Character types may or may not include lowercase, uppercase, numeric, and/or special characters. Answers to these prompts only need to be true or false.

    passUpper = confirm('1. Do you want your password to contain uppercase characters?\n- OK for yes\n- Cancel for no');

    passLower = confirm('2. Do you want your password to contain lowercase characters?\n- OK for yes\n- Cancel for no');

    passNum = confirm('3. Do you want your password to contain numbers?\n- OK for yes\n- Cancel for no');

    passSpec = confirm('4. Do you want your password to contain special characters?\n- OK for yes\n- Cancel for no');

    console.log(passLength, passUpper, passLower, passNum, passSpec);

    if (passUpper === false && passLower === false && passNum === false && passSpec === false) {
       console.log('Need at least one character type.');
       result = confirm('At least one character type is required.\n- OK to restart\n- Cancel to quit');
  
       // If the user clicks OK, the process begins again. Otherwise the function returns.

       if (result == true) charTypes();
       else return;
    }

    
}