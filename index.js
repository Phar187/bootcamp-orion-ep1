// Cada item é um texto que o botão pode mostrar na página.
const dicas = [
  "Antes de compartilhar uma notícia, confira a fonte e a data da publicação.",
  "Peça permissão antes de publicar uma foto de outra pessoa.",
  "Separe alguns minutos para aprender algo novo e anote o que descobriu.",
  "Ao pesquisar um assunto, compare as informações de diferentes fontes.",
];

let indiceDica = 0;

// Seleciona os elementos pelos IDs definidos no index.html.
const textoDica = document.getElementById("dica");
const botaoDica = document.getElementById("botao-dica");

textoDica.textContent = dicas[indiceDica];

// A cada clique, avança para a próxima dica. Depois da última, volta ao início.
botaoDica.addEventListener("click", () => {
  indiceDica = (indiceDica + 1) % dicas.length;
  textoDica.textContent = dicas[indiceDica];
});
