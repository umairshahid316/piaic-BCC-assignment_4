var arr1 = [10, 20, 4, 40, 60, 70]
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var result = [...new Set([...arr2, ...arr1])];

document.write(result)


