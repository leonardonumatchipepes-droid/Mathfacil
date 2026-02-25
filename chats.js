const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");

function enviarMensagem() {
  const texto = chatInput.value.trim();
  if (!texto) return;

  adicionarMensagem("Você", texto);
  chatInput.value = "";

  // Simulação de resposta da IA
  setTimeout(() => {
    let resposta = gerarResposta(texto);
    adicionarMensagem("IA", resposta);
  }, 800);
}

function adicionarMensagem(remetente, texto) {
  const msg = document.createElement("div");
  msg.className = remetente === "Você" ? "msg-usuario" : "msg-ia";
  msg.textContent = `${remetente}: ${texto}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function gerarResposta(pergunta) {
  pergunta = pergunta.toLowerCase();
  if (pergunta.includes("fração")) {
    return "Uma fração representa uma parte de um todo. Exemplo: 1/2 é metade.";
  } else if (pergunta.includes("equação")) {
    return "Uma equação é uma igualdade matemática que envolve incógnitas.";
  } else if (pergunta.includes("dificuldade")) {
    return "Pratique mais os temas em que errou no Treinar. Persistência traz resultado!";
  }
  return "Sou sua IA de estudo. Pergunte sobre matemática ou dicas de aprendizagem!";
}