const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el cateto a -> ', (answer) => {
    const a  = Number(answer);
    if (Number.isNaN(a)) {
        console.log('Cateto "a" inválido.');
        rl.close();
        return;
    }

    rl.question('Ingrese el cateto b -> ', (answer) => {
        const b = Number(answer);
        if (Number.isNaN(b)) {
            console.log('Cateto "b" inválido.');
            rl.close();
            return;
        }
    
        const hypotenuse = Math.sqrt((a**2) + (b**2));
        console.log('La hipotenusa es: ' + hypotenuse);
        rl.close();
    })
})