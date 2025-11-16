function podeDirigir() {
    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18) {
        document.getElementById("resultado").textContent = "Pode ser habilitado(a)";
    } else {
        document.getElementById("resultado").textContent = "Não pode ser habilitado(a)";
    }
}
