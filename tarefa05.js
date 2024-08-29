// Objetivo: Crie um array de objetos alunos, cada um com propriedades nome, nota1, e nota2. Use for of para calcular a média das notas de cada aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    {
        nome: "Ana",
        nota1: 8.45,
        nota2: 4.21
    },
    {
        nome: "Carlos",
        nota1: 9.67,
        nota2: 7.85
    },
    {
        nome: "Juliana",
        nota1: 2.13,
        nota2: 9.98
    }
];

for(let dado of alunos){
    let media = (dado.nota1 + dado.nota2)/2;
    console.log(`Nome: ${dado.nome}, Média: ${media.toFixed(2)}`);    
}