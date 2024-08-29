// Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

const clientes = [
    {
        nome: "Luana Silva",
        idade: 32,
        cidade: "São Paulo"
    },
    {
        nome: "João Pedro Santos",
        idade: 45,
        cidade: "Rio de Janeiro"
    },
    {
        nome: "Maria Eduarda Oliveira",
        idade: 28,
        cidade: "Belo Horizonte"
    }
];

let qtd = 0;

clientes.forEach((cliente)=>{
    if(cliente.idade > 30){
        qtd++;
    }
})

console.log(`Quantidade de clientes com mais de 30 anos: ${qtd}`);
