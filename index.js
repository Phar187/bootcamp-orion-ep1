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

// O formulário do quiz só é enviado depois de escolher uma das opções.
const formularioQuiz = document.getElementById("formulario-quiz");
const resultadoQuiz = document.getElementById("resultado-quiz");

formularioQuiz.addEventListener("submit", (evento) => {
  // Mostra o resultado na própria página, sem recarregá-la.
  evento.preventDefault();
  const resposta = formularioQuiz.elements.resposta.value;

  if (resposta === "verificar") {
    resultadoQuiz.textContent = "Você acertou! Conferir a fonte e a data ajuda a avaliar a notícia antes de compartilhar.";
    resultadoQuiz.dataset.status = "correto";
  } else {
    resultadoQuiz.textContent = "Ainda não. Um título chamativo não garante que a notícia seja confiável. Confira a fonte e a data antes de compartilhar.";
    resultadoQuiz.dataset.status = "incorreto";
  }
});

// Limpa o resultado anterior quando a pessoa escolhe outra resposta.
formularioQuiz.addEventListener("change", () => {
  resultadoQuiz.textContent = "";
  delete resultadoQuiz.dataset.status;
});
