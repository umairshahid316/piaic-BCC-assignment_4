var date = new Date();
document.write("current Date:" + date + "<br>");
var newDate = date.getTime();
console.log(newDate);
var miliSec = newDate;
Minutes = miliSec / 60000;
document.write("Minutes from 1 Jan 1970=" + Minutes)