var password = prompt("Enter Password");


var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var first = password.charAt(0);

if (!password.match(lowerCaseLetters) || !password.match(upperCaseLetters) || !password.match(numbers) || password.length < 8 || first.match(numbers)) {
    alert('Enter a Valid Password');
}

else {
    document.write("<h1>Password Matched.</h1>")
}