let questoesDisponiveis = [];
let questoesFiltradas = [];
let questaoAtual = 0;
let subsistemaEscolhido = "";
let temaEscolhido = "";

function escolherSubsistema(subsistema) {
  subsistemaEscolhido = subsistema;

  // Pega todos os temas únicos
  let todas;
  if (subsistema === "Primário") todas = questoesPrimário;
  else if (subsistema === "I Ciclo") todas = questoesICiclo;
  else if (subsistema === "Médio") todas = questoesMédio;
  else todas = questoesSuperior;

  questoesDisponiveis = todas;
  const temas = [...new Set(todas.map(q => q.tema))];

  let html = "<p>Escolha o tema:</p>";
  temas.forEach(tema => {
    html += `<button class="tema-btn" onclick="escolherTema('${tema}')">${tema}</button>`;
  });

  document.getElementById("temas").innerHTML = html;
}

function escolherTema(tema) {
  temaEscolhido = tema;
  questoesFiltradas = questoesDisponiveis.filter(q => q.tema === tema);
  embaralharArray(questoesFiltradas);
  questaoAtual = 0;

  document.getElementById("areaTreino").style.display = "block";
  exibirQuestaoTreino();
}

function exibirQuestaoTreino() {
  const q = questoesFiltradas[questaoAtual];
  document.getElementById("perguntaTreino").innerText = q.pergunta;
  document.getElementById("T_A").innerText = "A) " + q.A;
  document.getElementById("T_B").innerText = "B) " + q.B;
  document.getElementById("T_C").innerText = "C) " + q.C;
  document.getElementById("T_D").innerText = "D) " + q.D;
}

function responderTreino(opcao) {
  const correta = questoesFiltradas[questaoAtual].resposta;
  if (opcao === correta) {
    alert("✅ Correto!");
    tocarSom("certo");
  } else {
    alert("❌ Errado!");
    tocarSom("errado");
  }

  questaoAtual++;
  if (questaoAtual >= questoesFiltradas.length) {
    alert("🎉 Fim das questões neste tema!");
    document.getElementById("areaTreino").style.display = "none";
  } else {
    exibirQuestaoTreino();
  }
}

function embaralharArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function tocarSom(tipo) {
  const audio = new Audio(`som/${tipo}.mp3`);
  audio.play();
}