// Declaring variables.

var match;
var passLength;
var passUpper;
var passLower;
var passNum;
var passSpec;
var result;
var random1;
var random2;
var passwordArray = [];
var password;
var bank = [];
var bankUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var bankLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var bankNum = ["1","2","3","4","5","6","7","8","9","0"];
var bankSpec = ["!","@","#","$","%","&","*"]

// console.log(bankUpper);
// console.log(bankLower);
// console.log(bankNum);
// console.log(bankSpec);

// Listens for a button click.

document.getElementById("generate").addEventListener("click", function(event) {

    event.preventDefault();
    
    console.log('\nGenerate button has been clicked.');

    // Calls functions to present a series of prompts for password criteria. Responses to prompts will be stored in variables for determining randomization of password.

    checkLength();

    // If the character length requirement has been satisfied, the character types function is called. Otherwise, no function are called and the process ends.

    if (match == 1) charTypes();
    else console.log('User has terminated process.')
});

function checkLength() {

    console.log('Length selection function has been called.');
    
    // Reset password length in case user decided to start over.

    passLength = 0;

    // Length must be at least 8 characters and no more than 128 characters.

    passLength = prompt('1. How long do you want your password to be?\n- Minimum 8 characters\n- Maximum 128 characters');

    // Reset criteria checker.

    match = 0;

    // This cycles through all permitted password lengths (8-128 characters).

    for (let i = 8; i < 129; i++) {
        if (passLength == i) match = 1; // The user's number meets the requirement.            
    }
    // Does the user's number meet the requirement?

    if (match == 1) console.log(passLength + ' characters meets length requirement.');
        else {
            result = confirm('Number is invalid.\n- OK to restart\n- Cancel to quit');
            console.log(passLength + ' fails length requirement.');

            // If the user clicks OK, the process begins again. Otherwise the function returns.

            if (result == true) checkLength();
            else return;
        }
}

function charTypes () {

    console.log('Types selection function has been called.');

    // Resetting variables.

    bank = [];
    passwordArray = [];
    password = "";
    match = 0;

    // Character types may or may not include lowercase, uppercase, numeric, and/or special characters. Answers to these prompts only need to be true or false.

    // The array of selected character types is then added to the overall "bank" array.

    passUpper = confirm('2. Do you want your password to contain uppercase characters?\n- OK for yes\n- Cancel for no');

    if (passUpper === true) {
        console.log('Password will contain uppercase characters.');
        bank.push(bankUpper);
    }

    passLower = confirm('3. Do you want your password to contain lowercase characters?\n- OK for yes\n- Cancel for no');

    if (passLower === true) {
        console.log('Password will contain lowercase characters.');
        bank.push(bankLower);
    }

    passNum = confirm('4. Do you want your password to contain numbers?\n- OK for yes\n- Cancel for no');

    if (passNum === true) {
        console.log('Password will contain numbers.');
        bank.push(bankNum);
    }

    passSpec = confirm('5. Do you want your password to contain special characters?\n- OK for yes\n- Cancel for no');

    if (passSpec === true) {
        console.log('Password will contain special characters.');
        bank.push(bankSpec);
    }

    match = 1;

    // Checks if at least one character type is selected.

    if (passUpper === false && passLower === false && passNum === false && passSpec === false) {
       console.log('Need at least one character type.');
       result = confirm('At least one character type is required.\n- OK to restart\n- Cancel to quit');
  
       // If the user clicks OK, the process begins again. Otherwise the function returns.

       if (result == true) charTypes();
       else { match = 0; return; }
    }

    if (match == 1) {

        // This section will randomly select characters from the selected arrays.

        console.log('Password length: ' + passLength);
        
        // This loops as many times as the length of the password.

        for (i = 0; i < passLength; i++) {
            random1 = Math.floor(Math.random() * bank.length);
            random2 = Math.floor(Math.random() * bank[random1].length);

            console.log("Character " + (i+1) + "/" + passLength + ": " + bank[random1][random2]);

            passwordArray.push(bank[random1][random2]);
            // console.log(passwordArray);
            password = passwordArray.join('');
            console.log('Building password... ' + password);
            // document.getElementById("output").setAttribute.textContent=password;
        }
    }

    // THEN the password is either displayed in an alert or written to the page
}