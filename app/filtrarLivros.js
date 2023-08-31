const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const btnElemento = document.getElementById(this.id);
    const categoria = btnElemento.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(filtrarDisponibilidade()) : livros.filter(filtrarCategoria(categoria));
    exibirElementosNaTela(livrosFiltrados)
    if (categoria == 'disponivel'){
        const valorLivros = calculoDosLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivros(valorLivros);
    }
}

function filtrarCategoria(categoria) {
    return livro => livro.categoria == categoria;
}

function filtrarDisponibilidade() {
    return livro => livro.quantidade > 0;
}

function exibirValorTotalDosLivros(valor){
    elementoValorTotalDosLivros.innerHTML += `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valor}</span></p>
    </div>
    `;
}
