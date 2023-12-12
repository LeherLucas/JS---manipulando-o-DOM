const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    } )
} )

/* addEventListener é utilizado quando queremos adicionar um evento, no caso
o de quando clicamos executa a função dizOi. Quando utilizamos uma função anônima, esta
é lida apenas uma vez, quando ocorre algum evento
 diferente da função declarada que é executada sempre.
 () => é o mesmo que utilizar a função anônima, na verdade é uma maneira reduzida de
 escrever a função anônima */ 

/* Quando chamamos uma função, geralmente deixamos o espaço no () vazio para
executar, mas como colocamos um parâmetro na função, na hora que vamos executa-la
precisamos escrever o que queremos que a função execute */
function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
}else{
    peca.value = parseInt(peca.value) + 1;
}
}

function atualizaEstatisticas(peca){
    estatistica.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    } )
}