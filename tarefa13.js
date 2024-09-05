// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        {
            nome: 'Mouse Gamer',
            quantidade: 10,
            precoUnitario: 5
        },
        {
            nome: 'Teclado Mecânico',
            quantidade: 5,
            precoUnitario: 6
        },
        {
            nome: 'Monitor Gamer',
            quantidade: 2,
            precoUnitario: 4
        }
    ]
};

let valorTotalCar = 0;


carrinho.itens.forEach(dadosItem =>{
    valorTotalCar += dadosItem.precoUnitario;
})

console.log(`O valor total do carrinho é: R$${valorTotalCar}`);
