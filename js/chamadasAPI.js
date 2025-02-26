// CHAMADAS DO MOCKABLE DOS ECERCICIOS 4, 6

function chamarAPI() {
    fetch("http://demo9091797.mockable.io/infoAlana")
      .then((response) => response.json())
      .then((data) => tratarDados(data))
      .catch((error) => console.log(error));
  }
  
  function chamarAPIProdutos() {
    fetch("http://demo9091797.mockable.io/produtos")
      .then((response) => response.json())
      .then((data) => {
        produtos = data.produtos;
        criaTabela(produtos);
      })
      .catch((error) => console.log("Erro ao buscar dados:", error));
  }
  