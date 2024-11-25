// Scripts para o carrossel da página de produtos

var elemensCarrosselBotao = document.querySelectorAll(
  '.s-produto__carrossel-botao'
);

var elemenCarrosselImagem = document.querySelector(
  '.s-produto__carrossel-itens'
);

elemensCarrosselBotao.forEach(function (elem, i) {
  elem.addEventListener('click', function () {
    elemenCarrosselImagem.style = 'transform: translateX(-' + i * 100 + '%)';

    elemensCarrosselBotao.forEach(function (ele) {
      if (ele != elem) {
        ele.classList.remove('s-produto__carrossel-botao--selecionado');
      } else {
        ele.classList.add('s-produto__carrossel-botao--selecionado');
      }
    });
  });
});
