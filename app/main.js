let livros = [];

const endPoitDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI(){
    const resposta = await fetch(endPoitDaAPI);
    livros = await resposta.json();
    let livrosComDesconto = aplicarDesconto(livros)
    exibirElementosNaTela(livrosComDesconto)
}

