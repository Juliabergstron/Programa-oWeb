function tipoDeTriangulo(L1, L2, L3) {

    if (L1 === L2 && L2 === L3) {
        return "Equilátero (todos iguais)";
    }
    else if (L1 === L2 || L1 === L3 || L2 === L3) {
        return "Isósceles (dois lados iguais)";
    }
    else {
        return "Escaleno (nenhum lado igual)";
    }
}

function mostrarTipo() {
    const L1 = Number(document.getElementById("lado1").value);
    const L2 = Number(document.getElementById("lado2").value);
    const L3 = Number(document.getElementById("lado3").value);

    const resultado = tipoDeTriangulo(L1, L2, L3);

    document.getElementById("resultado").innerText = 
        "Tipo: " + resultado;
}