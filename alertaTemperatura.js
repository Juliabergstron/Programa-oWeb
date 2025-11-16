function checarTemperatura(temperatura) {

    if (temperatura < 10) {
        return "Alerta de frio";
    } 
    else if (temperatura >= 10 && temperatura <= 25) {
        return "Temperatura ideal";
    } 
    else {
        return "Alerta de calor";
    }
}

function mostrarAlerta() {
    const valor = Number(document.getElementById("temp").value);
    const resposta = checarTemperatura(valor);

    document.getElementById("resultado").innerText =
        "Resultado: " + resposta;
}