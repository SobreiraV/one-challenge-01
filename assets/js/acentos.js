texto_alvo.onkeyup = function () {
    var texto = texto_alvo.value;
    texto = texto.replace(/[áàãâäå]/gi, "a");
    texto = texto.replace(/[éèêë]/gi, "e");
    texto = texto.replace(/[íìîï]/gi, "i");
    texto = texto.replace(/[óòõôö]/gi, "o");
    texto = texto.replace(/[úùûüŭ]/gi, "u");
    texto = texto.replace(/[ñ]/gi, "n");
    texto = texto.replace(/[č]/gi, "c");
    texto = texto.replace(/[´`~^¨]/gi, "");
    texto_alvo.value = texto;
}