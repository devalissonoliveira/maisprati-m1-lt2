// Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as propriedades e exibir seus valores no console.

let carro = {
    marca:"Fiat",
    modelo: "Fastback",
    ano:"2024",
    cor:"Cinza Chumbo"
}

for (let prop in carro){
    console.log(`${prop}: ${carro[prop]}`);    
}