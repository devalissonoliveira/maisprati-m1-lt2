// Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

const vendas = [
    {
        produto:"Mouse Gamer",
        quantidade: 10,
        valor: 100
    },
    {
        produto:"Teclado Mecânico",
        quantidade: 11,
        valor: 250
    },
    {
        produto:"Monitor Gamer",
        quantidade: 8,
        valor: 1050
    }
];

let valorTotaldeVendas = 0;

vendas.forEach((produtoVendido)=>{
  valorTotaldeVendas += produtoVendido.quantidade * produtoVendido.valor;       
})

console.log(`Valor total de vendas: ${valorTotaldeVendas.toFixed(2)}`);
