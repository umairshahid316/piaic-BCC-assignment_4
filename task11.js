var arr = ["cake", "apple pie", "cookie", "chips", "patties"]

var input = prompt("Enter search value");

for (a in arr) {

    if (input == arr[a]) {
        alert(input + " value found")
        break;
    }

}
