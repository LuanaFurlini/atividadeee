function handleToDo(){
    let input: HTMLInputElement | null = document.querySelector("#tarefa")!;

    if(input.value !== ""){
        let lista: HTMLUListElement | null = document.querySelector("ul")!;
        let card: HTMLDivElement = document.createElement("div");
        let texto = document.createTextNode(input.value);
        card.appendChild(texto);
        lista.appendChild(card);
    }
}