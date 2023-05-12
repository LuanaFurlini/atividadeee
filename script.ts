function ola(){
    console.log('Ola!')
}
let tata: boolean = false;

function criarElemento(){
    //selecionar em qual elemento voce quer
    //criar ou destruir o novo elemento
    let div : HTMLElement | null = 
    document.querySelector('#esq')!;

    if(tata == false){

    //cria o novo elemento
    let paragrafo = document.createElement('b');
    let texto = document.createTextNode('Lado esquerdo!!');
    paragrafo.appendChild(texto);
    //visualiza o novo elemento dentro
    //do elemento ja existente que voce selecionou
    div.appendChild(paragrafo);
    tata = true;
    }
}

function mudarElemento(){
    if(tata == true){
    let b : HTMLElement | null =
    document.querySelector('b')!;
    b.innerText = 'to com fome!!';
    }
}

function deletarElemento(){
    if(tata == true){
    let b : HTMLElement | null =
    document.querySelector('b')!;

    b.remove();
    tata = false;
    }
}