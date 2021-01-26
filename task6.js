var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

for (var c = 1; c < o.length; c++) {

    document.write(c + o[c] + " " + aCities[Number(c) - 1] + "<br/>")

}