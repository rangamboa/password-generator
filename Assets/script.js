    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page

// Click the button to generate a password.

document.getElementById("generate").addEventListener("click", function(event) {
    event.preventDefault();
    console.log('button has been clicked.');

    // Present a series of prompts for password criteria.

    // Length must be at least 8 characters and no more than 128 characters.

    var passLength = prompt('1. How long do you want your password to be?\n- Minimum 8 characters\n- Maximum 128 characters');

    // Character types may or may not include lowercase, uppercase, numeric, and/or special characters.

    var passUpper = confirm('1. How long do you want your password to be?\n- Minimum 8 characters\n- Maximum 128 characters');

    var passLower = confirm('1. How long do you want your password to be?\n- Minimum 8 characters\n- Maximum 128 characters');

    var passNum = confirm('1. How long do you want your password to be?\n- Minimum 8 characters\n- Maximum 128 characters');

    var passSpec = confirm('1. How long do you want your password to be?\n- Minimum 8 characters\n- Maximum 128 characters');
});