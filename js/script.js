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

// Perguntas Frequentes (esse código vai fazer com que quando eu clique na pergunta mostra a resposta e quando clicar dnv ela some)

// qual item que eu quero selecionar p adicionar um evento ou não? (de clique)
// em cada botão dentro de perguntas:
const perguntas = document.querySelectorAll(".perguntas button");

// se eu to dentro de um evento eu sempre tenho acesso ao parâmetro de evento (event)
function ativarPergunta(event) {
  // sempre vale a pena ja puxar o elemento que eu to clicando:
  const pergunta = event.currentTarget;
  // eu quero puxar inicialmente quando cliquei no botão o valor de aria-controls
  // como puxo o valor de um atributo?
  const controls = pergunta.getAttribute("aria-controls");
  // selecionar esse elemento (pelo id):
  const resposta = document.getElementById(controls);

  // adicionar uma classe na resposta:
  // agora quando clico ele mostra e qnd clico dnv ele remove
  resposta.classList.toggle("ativa");
  // se resposta conter a classe "ativa" eu adiciono true pq ta expandido, se nao conter ele coloca false
  const ativa = resposta.classList.contains("ativa");
  // pq antes o aria-expanded estava ficando como false e estava errado
  pergunta.setAttribute("aria-expanded", ativa);
}

// como tenho acesso a cada pergunta específica vou colocar como nome de parâmetro "pergunta"
function eventosPerguntas(pergunta) {
  // p verificar a lista de botões aparecendo (cada um deles):
  // console.log(pergunta);

  // dentro da pergunta eu quero adicionar o evento de clique:
  // passar a função que vai ocorrer ao clique (ativarPergunta)
  pergunta.addEventListener("click", ativarPergunta);
}

// Qual evento quero verificar? evento de clique. Então vou adicionar para cada um o evento de clique
perguntas.forEach(eventosPerguntas);

// p ver se ta funcionando (se estiver aparecendo NodeList(6) ta certo):
console.log(perguntas);

// Galeria de Bicicletas
//1- aqui to falando com cada imagem:
const galeria = document.querySelectorAll(".bicicleta-imagens img");
// aqui to falando com o container que envolve todas as imagens:
const galeriaContainer = document.querySelector(".bicicleta-imagens");

//4-
function trocarImagem(event) {
  // sempre quero selecionar o item que to clicando no momento:
  const img = event.currentTarget;
  // verificar o tamanho da tela e se a tela tiver menor que 1000px eu vou eliminar a funcionalidade de prepend (pq o layout nao vai fazer sentido):
  // o matchMedia é um método que recebe uma string e essa string vai ter um media query
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    // manipular o Dom pegando um elemento e jogando ele pra outra parte:
    // o método prepend remove o elemento de um lugar e coloca em outro
    galeriaContainer.prepend(img);
  }
}

//3- passar cada uma das imagens da galeria (img):
function eventosGaleria(img) {
  // evento de clique, função trocarImagem:
  img.addEventListener("click", trocarImagem);
}

//2- começar sempre adicionando um evento de clique:
// adicionar cada item da galeria:
galeria.forEach(eventosGaleria);
