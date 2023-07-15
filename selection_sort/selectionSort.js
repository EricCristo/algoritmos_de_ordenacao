const livros = require('/Users/ericc/OneDrive/Ambiente de Trabalho/JS learning/algoritmos_de_ordenacao/inicio/lista_livros');
const menorValor = require('/Users/ericc/OneDrive/Ambiente de Trabalho/JS learning/algoritmos_de_ordenacao/inicio/menorValor');


for ( let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log(`posição atual`, atual)
    console.log(`livro atual é`, livros[atual])
    let livroMenorPreco = livros[menor];
    console.log(` O menor livro é`, livros[menor])

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
};

console.log(livros);