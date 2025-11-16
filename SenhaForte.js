function senhaForte(senha) {

    if (senha.length > 8 && senha !== "12345678") {
        return true;
    } else {
        return false;
    }
}

function verificar() {
    const senha = document.getElementById("senha").value;
    const resposta = senhaForte(senha);

    document.getElementById("resultado").innerText =
        "Senha forte? " + resposta;
}