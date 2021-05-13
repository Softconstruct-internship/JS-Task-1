let x = +prompt('Enter a number', '');
let y;
if (x >= 0 && x <= 5) {
    y = 2 * (x ** 2) + 3 * x - 1
} else {
    y = x + 1
}
console.log(y)