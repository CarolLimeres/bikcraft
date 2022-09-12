// Ativar Links do Menu
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

// Ativar Itens do Orçamento (esse código vai fazer com que quando eu clicar no botão de comprar da bicicleta ou seguro, ja vai direto pra pag de orçamento com as informações corretas ja checkadas de acordo com oq vc escolheu comprar (se for seguro as infos dele, se for bicicicleta as infos dela))
// primeiro alterar as infos do href do botao de compra no hmtl com os parametros corretos de tipo e produto, ex bikcraft magic: "../orcamento.html?tipo=bikcraft&produto=magic"
// primeira informação da pag que quero puxar p ter no javascript: é o meu url pra eu conseguir separar qual o tipo ta selecionado e qual o produto ta selecionado
// o search me traz infos mais específicas da url (descobri ele vendo as propriedades do location)
// URLSearchParams é uma classe pra pegar os parâmetros da url e a partir deles fazer algo.
// esse código retorna um array com esses parâmetros de busca
const parametros = new URLSearchParams(location.search);

// pra fazer um loop pra cada um dos parametros que ele extraiu do .search
function ativarProduto(parametro) {
  // pra buscar um elemento que tenha o valor de -parametro- (to buscando pelo id):
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
    // aqui em cima mostra como que mudo o elemento pra checked (se ele existir)
  }
  console.log(elemento);
  // com isso de cima eu tenho os dois elementos que estão com o id de acordo com oq ta na url

  // console.log(parametro);
  // agora ja tenho extraído os dois nomes que preciso e com essas strings eu vou la no html e vou verificar quais elementos que possuem esses itens como nome e a partir dai eu vou ativar eles ou nao
}

parametros.forEach(ativarProduto);

// p ver as propriedades que o location tem
// console.log(parametros);
