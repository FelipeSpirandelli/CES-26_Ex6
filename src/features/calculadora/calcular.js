const calcular = (numero1, numero2, operation) => {
    switch(operation){
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "*":
            return numero1 * numero2;
        case "/":
            return numero1 / numero2;
    }
}

export default calcular;