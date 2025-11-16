function nomeDoDia(numero) {

    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

function mostrarDia() {
    const num = Number(document.getElementById("numero").value);
    const dia = nomeDoDia(num);

    document.getElementById("resultado").innerText = "Dia: " + dia;
}