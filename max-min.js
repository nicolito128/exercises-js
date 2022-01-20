
function maxAndMin(numbers) {
    if (!Array.isArray(numbers)) return null;

    // If any element is not a number the result will be 'true'
    const hasOnlyNumbers = numbers.every(number => typeof number === 'number');
    if (!hasOnlyNumbers) return null;

    if (numbers.length < 1) return null;
    if (numbers.length == 1) return numbers[0];
    if (numbers.length == 2) {
        if (numbers[0] >= numbers[1]) {
            return numbers[0] - numbers[1];
        }
        return numbers[1] - numbers[0];
    }

    let max = numbers[0];
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let pivot = numbers[i];

        if (max < pivot) {
            max = pivot;
        }

        if (min > pivot) {
            min = pivot;
        }
    }

    const result = max - min;
    console.log("Valor Máximo: " + max);
    console.log("Valor Mínimo: " + min);
    console.log("Resultado de restar el valor máximo y mínimo: " + result);

    return result;
}

maxAndMin([9, 8, 7, 6, 5, 4, 3, 2, 1])