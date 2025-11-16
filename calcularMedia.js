function calcularMedia(n1, n2) {
    const media = (n1 + n2) / 2;

    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

function mostrarResultado() {
    const n1 = Number(document.getElementById("n1").value);
    const n2 = Number(document.getElementById("n2").value);

    const resultado = calcularMedia(n1, n2);

    document.getElementById("resultado").innerText =
        "Resultado: " + resultado;
}