// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

const pedidos = [
    {
        cliente: "João Silva",
        produto: "Mouse Gamer",
        quantidade:10
    },
    {
        cliente: "Maria Oliveira",
        produto: "Teclado Mecânico",
        quantidade:11
    },
    {
        cliente:"Pedro Santos",
        produto: "Monitor Gamer",
        quantidade:8
    },
    {
        cliente: "João Silva",
        produto: "Mouse Pad Gamer",
        quantidade: 10
    },
    {
        cliente:"Maria Oliveira",
        produto: "Organizador de Cabo",
        quantidade:11
    }
];

let qtdProduClientes = {};

pedidos.forEach((dadosPedido)=>{    
    if(qtdProduClientes[dadosPedido.cliente]){
        qtdProduClientes[dadosPedido.cliente] += dadosPedido.quantidade
    } else {
        qtdProduClientes[dadosPedido.cliente] = dadosPedido.quantidade
    }
})

console.log(qtdProduClientes);
