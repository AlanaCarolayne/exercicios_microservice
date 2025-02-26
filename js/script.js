function trocarCorFundo() {
  let sectionDiv = document.querySelector(".mostraSection");
  if (sectionDiv.style.backgroundColor === "lightblue") {
    sectionDiv.style.backgroundColor = "lightcoral";
  } else {
    sectionDiv.style.backgroundColor = "lightblue";
  }
  sectionDiv.style.visibility = "visible";
}

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("turma").value = "";
  document.getElementById("turno").value = "";
  document.getElementById("materia").value = "";
}

function tratarDados(data) {
  limparFormulario();
  console.log(data);
  document.getElementById("nome").value = data.nome;
  document.getElementById("turma").value = data.turma;
  document.getElementById("turno").value = data.turno;
  document.getElementById("materia").value = data.materia;
}

function aplicarFiltro() {
  let categoriasSelecionadas = Array.from(
    document.querySelectorAll('input[name="categoria"]:checked')
  ).map((checkbox) => checkbox.value);
  let produtosFiltrados = produtos.filter((produto) =>
    categoriasSelecionadas.includes(produto.categoria)
  );
  criaTabela(produtosFiltrados);
}

function resetarFiltro() {
  criaTabela(produtos);
} 

let produtos = [];
function editarProduto(index, produto) {
  let novoNome = prompt("Editar nome do produto:", produto.nome);
  if (novoNome !== null) {
    produtos[index].nome = novoNome;
    criaTabela(produtos);
  }
}

function excluirProduto(index) {
  if (confirm("Tem certeza que deseja excluir este produto?")) {
    produtos.splice(index, 1);
    criaTabela(produtos);
  }
}
