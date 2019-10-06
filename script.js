var lowerCase = confirm("Would you like to include lowercase letters?")
var upperCase = confirm("Would you like to include uppercase letters?")
var numericChar = confirm("Would you like to include numeric characters?")
var specialChar = confirm("Would you like to include special characters?")
var passwordLength = prompt("How long would you like your password to be? (8-128)")
var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperArray = lowerArray.map(toUpper)
var numArray = [1,2,3,4,5,6,7,8,9,0]
var specialString = "\\ !#$%&'()*+,-./:;<=>]?@[^_`{|}~\""
var specialArray = specialString.split("")

var generateBtn = document.querySelector('#generate')

function toUpper(x){
    return x.toUpperCase();
}

function randomPassword(length,array){
    var pass = "";
    for (var z = 0; z < length; z++) {
        var i = Math.floor(Math.random() * array.length);
        pass += array.charAt(i);
    }
    return pass;
}




if (lowerCase && !upperCase && !numericChar && !specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,lowerArray))
    
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
    generateBtn.addEventListener("click",randomPassword(passwordLength,upperArray))
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
    generateBtn.addEventListener("click",randomPassword(passwordLength,numArray))
}
else if (!lowerCase && !upperCase && !numericChar && specialChar) {
    generateBtn.addEventListener("click",randomPassword(passwordLength,specialArray))
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