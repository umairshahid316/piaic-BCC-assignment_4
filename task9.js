var arr = [24, 53, 78, 91, 12]
var big = 0;

document.write("Array " + " ")

for (a in arr) {
    document.write(arr[a] + " ")
    if (arr[a] > big) {
        big = arr[a];
    }

}

document.write("<br/> Big number is " + big)