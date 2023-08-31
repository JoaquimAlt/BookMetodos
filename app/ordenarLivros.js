let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdenarPorPreco.onclick = function (){
    ordenarPorPreco()
}

function ordenarPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirElementosNaTela(livrosOrdenados)
}