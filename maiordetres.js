function encontrarMaiorEntreTres(a, b, c) {

    if (a > b && a > c) {
        return a;
    } 
    else if (b > a && b > c) {
        return b;
    } 
    else {
        return c;
    }
}

function mostrarMaior() {
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const n3 = Number(document.getElementById("num3").value);

    const maior = encontrarMaiorEntreTres(n1, n2, n3);

    document.getElementById("resultado").innerText = 
        "O maior número é: " + maior;
}