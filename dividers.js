const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// "Escriba un programa que entregue todos los divisores del número entero ingresado:"
rl.question('Ingrese un número para obtener todos sus divisores -> ', answer => {
    const num = parseInt(answer);
    if (Number.isNaN(num)) {
        console.log('El valor ingresado no es válido.');
        rl.close();
        return;
    }

    let dividers = [];
    for (let i = 1; i <= num; i++) {
        const remainder = (num % i);
        if (remainder === 0) dividers.push(i);
    }

    console.log(dividers.join(' '));
    rl.close();
})