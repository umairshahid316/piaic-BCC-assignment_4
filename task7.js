var str = " The quick brown fox jumps over the lazy dog";
var word = str.split(" ");
var count = 0;
for (var a = 0; a < word.length; a++) {
    if ((wrod[a] === "The" || (word[a] === "the"))) {
        count += 1;
    }
}
document.write("text:" + str + "<br>" + word);