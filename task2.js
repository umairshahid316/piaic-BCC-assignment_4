var names = ["Asad", "Humza", "Daniyal"]
var scores = [345, 453, 278]

for (r in names) {
    var per = scores[r] * 100 / 500;
    document.write("Score of " + names[r] + " is " + scores[r] + ". Percentage: " + per + "% <br/>")

}