var date = new Date();
var day = date.getDate();

if (day < 16) {
    document.write("<h1>First fifteen days of the month</h1>")
}

else {
    document.write("<h1>Last days of the month</h1>")
}