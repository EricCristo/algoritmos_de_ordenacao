const livros = require('/Users/ericc/OneDrive/Ambiente de Trabalho/JS learning/algoritmos_de_ordenacao/inicio/lista_livros');
const menorValor = require('/Users/ericc/OneDrive/Ambiente de Trabalho/JS learning/algoritmos_de_ordenacao/inicio/menorValor');


for ( let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
};

console.log(livros);