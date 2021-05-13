let x = +prompt("Enter a number", '');
let y = +prompt("Enter a number", '');
let z = +prompt("Enter a number", '');
if (x ** 2 < y ** 2 + z ** 2 && y ** 2 < x ** 2 + z ** 2 && z ** 2 < x ** 2 + y ** 2) {
    console.log("Սուրանկյուն եռանկյուն")
} else {
    console.log("Սուրանկյուն եռանկյուն չէ")
}
