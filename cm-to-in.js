const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('/***** Centímetros a Pulgadas *****/')
rl.question('Ingrese una longitud -> ', answer => {
    // Centímetros
    const cm = Number(answer);
    if (Number.isNaN(cm)) {
        console.log('La longitud ingresada no es válida.')
        rl.close();
        return;
    }

    // Pulgadas
    const inches = cm / 2.54;
    console.log(cm + ' cm = ' + inches.toFixed(3) + ' in ')

    rl.close();
});