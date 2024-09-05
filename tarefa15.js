// Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.

const transacoes = [
    {
        tipo: 'entrada',
        valor: 1000
    },
    {
        tipo: 'saida',
        valor: 700
    },
    {
        tipo: 'saida',
        valor: 299
    },
];


let saldoFinal = 0;

transacoes.forEach(dadosTransacao =>{
    switch (dadosTransacao.tipo){
        case 'entrada':
            saldoFinal += dadosTransacao.valor;
            break;
        case 'saida':
            saldoFinal -= dadosTransacao.valor;
            break;
    }
})

console.log(`Saldo: R$${saldoFinal}`);
