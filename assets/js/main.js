btnCriptografar.onclick = function () {
    let texto = texto_alvo.value;
    let textoCriptografado = texto.toLowerCase()
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    console.log(textoCriptografado);
    texto_salvo.innerHTML = textoCriptografado;
    hide();
    check();
}

btnDescriptografar.onclick = function () {
    let texto = texto_alvo.value;
    let textoDescriptografado = texto.toLowerCase()
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    console.log(textoDescriptografado);
    texto_salvo.innerHTML = textoDescriptografado;
    hide();
    check();
}

function hide() {
    if (texto_salvo.innerHTML != "") {
        sem_mensagens.style.display = "none";
        mensagem_salva.style.display = "block";
    }
}

function check() {
    if (texto_salvo.innerHTML == "") {
        sem_mensagens.style.display = "block";
        mensagem_salva.style.display = "none";
    }
}

btnCopiar.onclick = function () {
    var textoCriptografado = texto_salvo.innerHTML;
    navigator.clipboard.writeText(textoCriptografado);
}

