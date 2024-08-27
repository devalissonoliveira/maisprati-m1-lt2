// Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

let produto = {
    valor01: 1000,
    valor02: 2000,
    valor03: 3000,
    valor04: 4000,
    valor05: 5000,
}

function apenasValorMaiorQue (objeto, valor){
    let novoObjeto = {};
    for(let propriedade in objeto){
        if (objeto[propriedade] > valor){
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }   
    return novoObjeto;
}


console.log(apenasValorMaiorQue(produto, 2000))