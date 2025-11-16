function classificarMoeda(valor) {

    if (valor === 0.01) {
        return "1 centavo";
    } 
    else if (valor === 0.05) {
        return "5 centavos";
    } 
    else if (valor === 0.10) {
        return "10 centavos";
    } 
    else if (valor === 0.25) {
        return "25 centavos";
    } 
    else if (valor === 0.50) {
        return "50 centavos";
    } 
    else if (valor === 1.00) {
        return "1 real";
    } 
    else {
        return "valor desconhecido";
    }
}

function mostrarClassificacao() {
    const valor = Number(document.getElementById("moeda").value);
    const resposta = classificarMoeda(valor);

    document.getElementById("resultado").innerText =
        "Classificação: " + resposta;
}