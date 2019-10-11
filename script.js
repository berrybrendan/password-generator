var lowerCase = confirm("Would you like to include lowercase letters?");
var upperCase = confirm("Would you like to include uppercase letters?");
var numericChar = confirm("Would you like to include numeric characters?");
var specialChar = confirm("Would you like to include special characters?");
var passwordLength = prompt("How long would you like your password to be? (8-128)");
var lowerString = 'abcdefghijklmnopqrstuvwxyz';
var upperString = lowerString.toUpperCase();
var numString = '1234567890';
var specialString = "\\ !#$%&'()*+,-./:;<=>]?@[^_`{|}~\"";
var specialArray = specialString.split("");
var passwordEl = document.getElementById('password')

var generateBtn = document.querySelector('#generate');


function randomPassword(length, string){
    var pass = "";
    for (var z = 0; z < length; z++) {
        var i = Math.floor(Math.random() * string.length);
        pass += string.charAt(i);
    }
    return pass;
}




if (lowerCase && !upperCase && !numericChar && !specialChar) {
    var lowerPass = randomPassword(passwordLength, lowerString);
    passwordEl.textContent = lowerPass;

    generateBtn.addEventListener("click",randomPassword(passwordLength, lowerString))

    
}/*
else if (lowerCase && upperCase && !numericChar && !specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}
else if (lowerCase && upperCase && numericChar && !specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}
else if (lowerCase && upperCase && !numericChar && specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}
else if (lowerCase && !upperCase && !numericChar && specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}
else if (lowerCase && !upperCase && numericChar && !specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}*/
else if (!lowerCase && upperCase && !numericChar && !specialChar) {
    var upperPass = randomPassword(passwordLength, upperString);
    passwordEl.textContent = upperPass;

    generateBtn.addEventListener("click",randomPassword(passwordLength, upperString))
}/*
else if (!lowerCase && upperCase && numericChar && !specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}
else if (!lowerCase && upperCase && !numericChar && specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}
else if (!lowerCase && upperCase && numericChar && specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}*/
else if (!lowerCase && !upperCase && numericChar && !specialChar) {
    var numPass = randomPassword(passwordLength, numString);
    passwordEl.textContent = numPass;

    generateBtn.addEventListener("click",randomPassword(passwordLength, numString))
}
else if (!lowerCase && !upperCase && !numericChar && specialChar) {
    var specialPass = randomPassword(passwordLength, specialString);
    passwordEl.textContent = specialPass;

    generateBtn.addEventListener("click",randomPassword(passwordLength, specialString))
}
/*else if (lowerCase && !upperCase && numericChar && specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}
else if (lowerCase && upperCase && numericChar && specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}
else if (lowerCase && upperCase && numericChar && specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
}*/