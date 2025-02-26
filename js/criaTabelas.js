function criaTabela(dados) {
    let tb = document.querySelector(".tbProdutos");
    tb.innerHTML = "";
  tb.innerHTML = `<thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Categoria</th>
                  <th>Estoque</th>
                </tr>
              </thead>`;
  
    dados.forEach((produto, index) => {
      let tr = document.createElement("tr");
      let tdNome = document.createElement("td");
      let tdPreco = document.createElement("td");
      let tdCategoria = document.createElement("td");
      let tdEstoque = document.createElement("td");
      let tdAcoes = document.createElement("td");
  
      tdNome.textContent = produto.nome;
      tdPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;
      tdCategoria.textContent = produto.categoria;
      tdEstoque.textContent = produto.estoque;
  
      let btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.addEventListener("click", () => editarProduto(index, produto));
  
      let btnExcluir = document.createElement("button");
      btnExcluir.textContent = "Excluir";
      btnExcluir.addEventListener("click", () => excluirProduto(index));
  
      tdAcoes.appendChild(btnEditar);
      tdAcoes.appendChild(btnExcluir);
  
      tr.appendChild(tdNome);
      tr.appendChild(tdPreco);
      tr.appendChild(tdCategoria);
      tr.appendChild(tdEstoque);
      tr.appendChild(tdAcoes);
  
      tb.appendChild(tr);
    });
  }