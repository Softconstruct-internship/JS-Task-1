const x = +prompt("Enter a number", "")
const a = +prompt("Enter a number", "")

let y = 0
if (-4 <= x && x <= 4) {
    console.log("1", y += x + 3 * a)
} else if (5 < x && x <= 8) {
    console.log("2", y += a * x - 2)
} else if (x > 20 || x < -20) {
    console.log("3", y += Math.pow(x, 2))

} else {
    console.log("4", y += 3 * x)
}