// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.

const produtos = [
    {
        nome: "Mouse Gamer",
        preco: 100,
        desconto:0
    },
    {
        nome: "Teclado Mecânico",
        preco: 250,
        desconto:0
    },
    {
        nome: "Monitor Gamer",
        preco: 1050,
        desconto:0
    },
];

const novoDesconto = 10;

produtos.forEach((produto)=> {
    produto.desconto = novoDesconto;
    produto.preco = produto.preco - ((produto.preco*produto.desconto)/100)

    console.log(`Nome: ${produto.nome}, Preço: ${produto.preco}, Desconto: ${produto.desconto}%`);
    
})