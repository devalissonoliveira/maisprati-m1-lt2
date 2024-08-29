// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

const pessoas = [
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

for(let dado of pessoas){
    console.log(`Nome: ${dado.nome}, Idade: ${dado.cidade}, Cidade: ${dado.cidade}`);    
}