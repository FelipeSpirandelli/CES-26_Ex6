const calcular = (numero1, numero2, operation) => {
    switch (operation) {
        case "+":
            return parseInt(numero1, 10) + parseInt(numero2, 10);
        case "-":
            return parseInt(numero1, 10) - parseInt(numero2, 10);
        case "*":
            return parseInt(numero1, 10) * parseInt(numero2, 10);
        case "/":
            return parseInt(numero1, 10) / parseInt(numero2, 10);
        default:
            return parseInt(numero1, 10);
    }
}


export default calcular;