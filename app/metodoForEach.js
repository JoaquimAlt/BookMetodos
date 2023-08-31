const elementoParaInserirLivros = document.getElementById('livros');
const elementoValorTotalDosLivros = document.getElementById('valor_total_livros_disponiveis')

function exibirElementosNaTela(livros){
    elementoParaInserirLivros.innerHTML = '';
    livros.forEach(livro => {
      let disponibilidade = livro.quantidade <= 0 ? 'livro__imagens indisponivel' : 'livro__imagens';
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo} 
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(1)}0</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
      elementoValorTotalDosLivros.innerHTML = '';
    })
}