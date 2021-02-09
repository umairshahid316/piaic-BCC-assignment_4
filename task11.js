var input = prompt("enter a number");
var numArray = input.split("");
var a = numArray.length
var sum = 0
for (var i = 0; i < input.length; i++) {
    sum += parseInt(numArray[i]);
    average = sum / a;
}
document.write(average);