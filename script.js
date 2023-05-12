function ola() {
    console.log('Ola!');
}
var tata = false;
function criarElemento() {
    //selecionar em qual elemento voce quer
    //criar ou destruir o novo elemento
    var div = document.querySelector('#esq');
    if (tata == false) {
        //cria o novo elemento
        var paragrafo = document.createElement('b');
        var texto = document.createTextNode('Lado esquerdo!!');
        paragrafo.appendChild(texto);
        //visualiza o novo elemento dentro
        //do elemento ja existente que voce selecionou
        div.appendChild(paragrafo);
        tata = true;
    }
}
function mudarElemento() {
    if (tata == true) {
        var b = document.querySelector('b');
        b.innerText = 'to com fome!!';
    }
}
function deletarElemento() {
    if (tata == true) {
        var b = document.querySelector('b');
        b.remove();
        tata = false;
    }
}
