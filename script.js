function realizarOperación(operación) {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)

    //Validar entrada de números
    if (isNaN(num1) || isNaN(num2)){
        document.getElementById("result").innerText = "Por favor ingrese números válidos.";
        return;
    }
    let resultado;
    if (operación === "suma"){
        resultado = num1 + num2;
    } else if (operación === "resta"){
        resultado = num1 - num2;
    } else if (operación === "multiplicación"){
        resultado = num1 * num2;
    } else if (operación === "división"){
        if (num2 === 0) {
            resultado = "Error: No se puede dividir entre cero.";
        } else {
            resultado = num1 / num2;
        }
    } else {
        resultado = "Error: Operación no válida.";
    }

    // Mostrar resultado
    document.getElementById("result").innerText = "resultado: " + resultado;
}