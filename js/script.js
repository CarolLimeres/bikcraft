const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  // verificação da url
  const url = location.href;
  // informação do link:
  const href = link.href;
  // o includes é um método que verifica se a palavra existe ou nao em uma string
  // vou ter que usar o includes nesse caso pq na pag de contato, quando envio o formulario, a url muda e com isso ia dar problema na verificação da url com o href
  if (url.includes(href)) {
    // aqui eu faço o que eu quero que ocorra
    // o que eu quero que ocorra é adicionar uma classe (qualquer tipo de classe, qualquer elemento, ou mudar direto no css) pra indicar que o link ta ativo
    // pra adicionar uma classe eu uso classList.add
    // modificar o css pra que algo ocorra, pq assim só ta adicionando uma classe sem nada
    link.classList.add("ativo");
  }
}

// ativar uma função p cada um dos links:
links.forEach(ativarLink);
