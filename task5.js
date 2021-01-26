
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var dup = [];

for (d in arr1) {


    for (r in dup) {

        if (arr1[d] != dup[r]) {
            dup[r] = arr1[d]

        }

    }



}

// for (r in dup) {
document.write(dup)
// }

