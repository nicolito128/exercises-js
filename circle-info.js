const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el radio de un círculo -> ', answer => {
    const radio = Number(answer);
    if (Number.isNaN(radio)) {
        console.log('El radio ingresado no es un número válido.');
        rl.close();
        return;
    }

    const perimeter = (2 * Math.PI * radio);
    const area = (Math.PI * radio**2);

    console.log('Perímetro: ' + perimeter);
    console.log('Área: ' + area);
    rl.close();
});