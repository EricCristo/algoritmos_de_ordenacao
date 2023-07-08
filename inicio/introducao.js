let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual ++) {
    if (precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual
    }
}

console.log(`o livro mais barato custa ${precosLivros[maisBarato]}`);