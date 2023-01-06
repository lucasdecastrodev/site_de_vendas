const items = [
  {
    id: 0,
    nome: "Corinthians away 2021/2022",
    img: "img/cor-2022-home.jpg",
    quantidade: 10,
    QtdCarrinho: 0,
  },
  {
    id: 1,
    nome: "Palmeiras away 2021/2022",
    img: "img/pal-2022-away.jpg",
    quantidade: 10,
    QtdCarrinho: 0,
  },
  {
    id: 2,
    nome: "Flamengo away 2021/2022",
    img: "img/fla-2022-away.jpg",
    quantidade: 10,
    QtdCarrinho: 0,
  },
];

function inicializarLoja() {
  var containerProdutos = document.querySelector("#produtos");
  items.map((prod) => {
    containerProdutos.innerHTML += `
    <div class="produto-single">
      <img src="${prod.img}" />
      <p>${prod.nome}</p>
      <p>Quantidade: ${prod.quantidade}</p>
      <a key="${prod.id}" href="">Adicionar ao carrinho</a>
    </div>`;
  });
}

inicializarLoja();

var links = document.querySelectorAll("a");

var carrinhoCliente = [];

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (e) {
    e.preventDefault();
    let chave = this.getAttribute("key");
    items[chave].QtdCarrinho++;
    carrinhoCliente.push(items[chave]);

    atualizarCarrinho();
  });
}

function atualizarCarrinho() {
  console.log(carrinhoCliente);
  var containerCarrinho = document.querySelector("#carrinho");
  containerCarrinho += ``;
}
