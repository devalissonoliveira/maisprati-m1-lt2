// Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: "Essencialismo",
    autor: "Greg McKeown",
    anoPublicacao: 2014,
    genero: "Autoajuda"
}

let temEditora = false;

for (let prop in livro) {
    if (prop === "editora") {
        temEditora = true;      
        break;
    }
}

if (!temEditora) {
    livro.editora = "Editora Nova";
}

console.log(livro);
