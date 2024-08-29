// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

const filmes = [
    {
        titulo:"Fury",
        diretor:"David Ayer",
        anoLancamento:2015
    },
    {
        titulo:"Até o Último Homem",
        diretor:"Mel Gibson",
        anoLancamento:2017
    },
    {
        titulo:"O Resgate do Soldado Ryan",
        diretor:"Steven Spielberg",
        anoLancamento:1999
    }
];

const titulosFilmes = [];

filmes.forEach((filme)=>{
    titulosFilmes.push(filme.titulo)    
})

console.log(titulosFilmes);
