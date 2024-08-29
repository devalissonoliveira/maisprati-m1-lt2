// Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

const funcionarios = [
    {
        nome: "João Silva",
        cargo: "Analista de Dados",
        salario: 4500.00
    },
    {
        nome: "Maria Oliveira",
        cargo: "Desenvolvedora Full Stack",
        salario: 7200.00
    },
    {
        nome: "Pedro Santos",
        cargo: "Gerente de Marketing",
        salario: 3800.00
    }
];


const valorAComparar = 3998.75;

for (let dado of funcionarios){
    if(dado.salario > valorAComparar) {
        console.log(`Nome: ${dado.nome}, Cargo: ${dado.cargo}, Salário: ${dado.salario.toFixed(2)}`);        
    }
}