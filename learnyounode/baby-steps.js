let array = process.argv;
let result = null;
for (i = 2; i < array.length; i ++) {
    result += Number(array[i])
}
console.log(result);