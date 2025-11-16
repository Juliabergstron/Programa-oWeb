function formatarTelefone(numero) {
    const parte1 = numero.slice(0, 4);
    const parte2 = numero.slice(4);

    return parte1 + "-" + parte2; 
}

function mostrarTelefone() {
    const numero = document.getElementById("tel").value;
    const formatado = formatarTelefone(numero);

    document.getElementById("resultado").innerText =
        "Telefone formatado: " + formatado;
}