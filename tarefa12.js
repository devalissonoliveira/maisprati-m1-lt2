// Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    {
        produto: 'Mouse Gamer',
        quantidade: 10,
        minimo: 5
    },
    {
        produto: 'Teclado Mecânico',
        quantidade: 5,
        minimo: 6
    },
    {
        produto: 'Monitor Gamer',
        quantidade: 2,
        minimo: 4
    }
]

estoque.forEach(dadosProduto =>{
    if(dadosProduto.quantidade < dadosProduto.minimo){
        dadosProduto.quantidade *= 2;
    }
})

console.log(estoque);
