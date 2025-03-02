// Exercicio 2
function carregar() {
    let tema = localStorage.getItem("tema");
    if (tema) {
      if (tema == "temaClaro") {
        document.getElementById("tema").classList.remove("temaEscuro");
        document.getElementById("tema").classList.add(tema);
      } else {
        document.getElementById("tema").classList.remove("temaClaro");
        document.getElementById("tema").classList.add(tema);
      }
    }
  }
  // Exercicio 2
  function trocarTema() {
    let temaElement = document.getElementById("tema");
    if (temaElement.classList.contains("temaClaro")) {
      temaElement.classList.remove("temaClaro");
      temaElement.classList.add("temaEscuro");
      localStorage.setItem("tema", "temaEscuro");
    } else {
      temaElement.classList.remove("temaEscuro");
      temaElement.classList.add("temaClaro");
      localStorage.setItem("tema", "temaClaro");
    }
  }