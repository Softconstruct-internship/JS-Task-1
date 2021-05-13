let a = +prompt('Enter a number', '');

if (a % 4 === 0 && a % 400 !== 0) {
    console.log('Նահանջ տարի')
} else {
    console.log('Նահանջ տաիր չէ')
}