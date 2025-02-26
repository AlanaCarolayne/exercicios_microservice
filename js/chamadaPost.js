document.querySelector(".formularioMock")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let nome = document.getElementById("nomeMock");
    let email = document.getElementById("emailMock");
    let idade = document.getElementById("idadeMock");
    let endereco = document.getElementById("enderecoMock");
    let mensagemElement = document.getElementById("mensagemMock");

    let campos = [nome, email];
    let valido = true;

    campos.forEach((campo) => {
      let spanErro = campo.nextElementSibling;
      if (campo.value.trim() === "") {
        spanErro.style.visibility = "visible";
        valido = false;
      } else {
        spanErro.style.visibility = "hidden";
      }
    });

    if (valido) {
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
        console.log("Resposta da API:", resposta);

        if (response.ok) {
          mensagemElement.textContent =
            resposta.mensagem || "Dados enviados com sucesso!";
          mensagemElement.className = "success";
        } else {
          mensagemElement.textContent = "Erro ao enviar os dados!";
          mensagemElement.className = "error";
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
        mensagemElement.textContent = "Falha na comunicação com o servidor.";
        mensagemElement.className = "error";
      }
    }
  });

  