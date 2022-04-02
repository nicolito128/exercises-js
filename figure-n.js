
function makeFigure(symbol, rows, columns) {
    return Array(columns)
        .fill(symbol.repeat(rows))
        .join("\n")
}

console.log(makeFigure("+", 5, 3))
console.log(makeFigure("-", 3, 2))