var email = prompt("Enter Email");

var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if (email.match(mailformat)) {
    alert("Valid email address!");
}
else {
    alert("You have entered an invalid email address!");
}