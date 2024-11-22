// Script para o carrossel da home

var elemensCarrosselBotao = document.querySelectorAll('.carrossel__botao');
var elemenCarrosselImagens = document.querySelector('.carrossel__imagens');

function rodarCarrossel(i) {
  var itemAnt = i - 1;

  if (i == 0) {
    itemAnt = elemensCarrosselBotao.length - 1;
  }

  elemensCarrosselBotao[itemAnt]
    .querySelector('div')
    .classList.remove('carrossel__preenchimento--completo');

  elemenCarrosselImagens.style.transform = `translateX(-${i * 100}%)`;

  elemensCarrosselBotao[i]
    .querySelector('div')
    .classList.add('carrossel__preenchimento--completo');

  var proxItem = i + 1;

  if (i == elemensCarrosselBotao.length - 1) {
    proxItem = 0;
  }

  setTimeout(function () {
    rodarCarrossel(proxItem);
  }, 5000);
}

setTimeout(function () {
  rodarCarrossel(0);
}, 1000);
