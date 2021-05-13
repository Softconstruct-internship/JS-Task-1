const x = +prompt("Enter a number", "")
let y = 0
if (-10 < x && x <= -6) {
    console.log(y += x + 1)
} else if (-3 <= x && x <= 3) {
    console.log(y += Math.pow(x, 2))
} else {
    console.log(y += x)
}

