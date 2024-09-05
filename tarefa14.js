// Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

const empresa = {
    departamentos: [
        {
            nome: 'NTI',
            funcionarios:['Alisson', 'Dudu', 'Jeferson']
        },
        {
            nome: 'Secretaria',
            funcionarios:['Eliete', 'Sulamita', 'Amanda']
        },
        {
            nome: 'Comercial',
            funcionarios:['Jacira', 'Leonara', 'Andressa']
        },
    ]
};

for ( let index in empresa.departamentos){
    let departamento = empresa.departamentos[index];

    for(let dadosFuncionario of departamento.funcionarios){
        console.log(`${dadosFuncionario}: ${departamento.nome}`);        
    }    
}