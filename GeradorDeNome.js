function geraNome(primeiroNome, sobrenome) {
    // concatenação com espaço
    return primeiroNome + " " + sobrenome;
}

function mostrarNome() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;

    const nomeCompleto = geraNome(nome, sobrenome);

    document.getElementById("resultado").innerText =
        "Nome completo: " + nomeCompleto;
}