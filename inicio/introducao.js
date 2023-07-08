const precosLivros = require('./lista_livros');
const livros = require('./lista_livros');

let maisBarato = 0;


for (let atual = 0; atual < livros.length; atual ++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }
}

console.log(`o livro mais barato custa ${livros[maisBarato].preco} 
e o nome do livro é ${livros[maisBarato].titulo}`);