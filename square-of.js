const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, ingresa un número cualquiera -> ', answer => {
    const number = Number(answer)
    if (Number.isNaN(number)) {
        console.log('No ingresaste un número válido.')
        rl.close()
        return;
    }

    const squared = number**2;
    console.log('El cuadrado de ' + number + ' es: ' + squared);

    rl.close()
})