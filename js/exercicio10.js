carregarNovosCadastros();
document
  .querySelector(".formularioNovosCadastros")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    let nome = document.getElementById("nomeNovosCadastros");
    let email = document.getElementById("emailNovosCadastros");
    let idade = document.getElementById("idadeNovosCadastros");
    let endereco = document.getElementById("enderecoNovosCadastros");
    let mensagemElement = document.getElementById("mensagemMock");

    let dados = {
      nome: nome.value.trim(),
      email: email.value.trim(),
      idade: idade.value.trim(),
      endereco: endereco.value.trim(),
    };

    try {
      let response = await fetch("http://demo9091797.mockable.io/InfoUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      let resposta = await response.json();
      console.log(resposta);

      if (response.ok) {
        mensagemElement.textContent =
          resposta.mensagem || "Dados enviados com sucesso!";
        mensagemElement.className = "success";
        adicionarLinhaNaTabela(dados);
        nome.value = "";
        email.value = "";
        idade.value = "";
        endereco.value = "";
      } else {
        mensagemElement.textContent = "Erro ao enviar os dados!";
        mensagemElement.className = "error";
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      mensagemElement.textContent = "Falha na comunicação com o servidor.";
      mensagemElement.className = "error";
    }
  });
function carregarNovosCadastros() {
  fetch("http://demo9091797.mockable.io/InfoUser")
    .then((response) => response.json())
    .then((data) => {
      if (data.usuarios && Array.isArray(data.usuarios)) {
        criarTabelaNovosCadastros(data.usuarios);
      } else {
        console.error("Formato de dados inválido:", data);
      }
    })
    .catch((error) => console.log("Erro ao buscar dados:", error));
}

function criarTabelaNovosCadastros(dados) {
  let tbody = document.querySelector(".tbNovosCadastros tbody");
  tbody.innerHTML = "";

  dados.forEach((user) => {
    adicionarLinhaNaTabela(user);
  });
}
function adicionarLinhaNaTabela(user) {
  let tbody = document.querySelector(".tbNovosCadastros tbody");

  let tr = document.createElement("tr");
  let tdNome = document.createElement("td");
  let tdIdade = document.createElement("td");
  let tdEmail = document.createElement("td");
  let tdEndereco = document.createElement("td");

  tdNome.textContent = user.nome;
  tdIdade.textContent = user.idade;
  tdEmail.textContent = user.email;
  tdEndereco.textContent = user.endereco;

  tr.appendChild(tdNome);
  tr.appendChild(tdIdade);
  tr.appendChild(tdEmail);
  tr.appendChild(tdEndereco);

  tbody.appendChild(tr);
}