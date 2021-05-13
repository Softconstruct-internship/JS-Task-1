const a = +prompt("Enter a number", "")
const b = +prompt("Enter a number", "")
const c = +prompt("Enter a number", "")
if (a <= 0 || b <= 0 || c <= 0) {
    console.log("Այսպիսի եռանկյուն գոյություն ունենալ չի կարող")
} else {
    if ((a === b) && (a === c) && (b === c)) {
        console.log("Հավասարակողմ եռանկյունի")
    } else if ((a === b) || (b === c) || (c === a)) {
        console.log("Հավասարասրուն եռանկյուն")
    } else {
        console.log("Մնացաց դեպքերում")
    }
}
