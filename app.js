let faseAtual = "F";
let questoes = [];
let questaoAtual = 0;
let acertosNaFase = 0;
let tentativasFase = 0;
let subsistemaAtual = "";
let intervalo;
let tempoRestante = 45;

// Todas as questões unificadas
const todasQuestoes = [
  ...questoesPrimário,
  ...questoesICiclo,
  ...questoesMédio,
  ...questoesSuperior
];

// Início do jogo
function iniciarJogo(subsistemaSelecionado) {
  faseAtual = "F";
  tentativasFase = 0;
  subsistemaAtual = subsistemaSelecionado;
  document.getElementById("escolhaSubsistema").style.display = "none";
  document.getElementById("areaJogo").style.display = "block";
  carregarQuestoes();
}

// Carrega 5 questões da fase atual
function carregarQuestoes() {
  const filtradas = todasQuestoes.filter(q => q.subsistema === subsistemaAtual && q.fase === faseAtual);
  questoes = embaralharArray(filtradas).slice(0, 5);
  questaoAtual = 0;
  acertosNaFase = 0;
  exibirProximaQuestao();
}

// Exibe a próxima questão
function exibirProximaQuestao() {
  if (questaoAtual >= questoes.length) {
    verificarTransicaoFase();
    return;
  }

  const q = questoes[questaoAtual];
  document.getElementById("pergunta").innerText = q.pergunta;

  const opcoesHTML = ["A", "B", "C", "D"].map(letra => `
    <li>
      <button class="opcao-btn" data-resposta="${letra}">
        ${letra}) ${q[letra]}
      </button>
    </li>`).join("");

  document.getElementById("opcoes").innerHTML = opcoesHTML;

  document.querySelectorAll('.opcao-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.opcao-btn').forEach(b => b.classList.remove('selecionada'));
      btn.classList.add('selecionada');
    });
  });

  iniciarTemporizador();
}

// Responder à questão
function responder() {
  const selecionada = document.querySelector(".opcao-btn.selecionada");
  if (!selecionada) {
    alert("Por favor, selecione uma opção!");
    return;
  }

  pararTemporizador();

  const respostaUser = selecionada.getAttribute("data-resposta");
  const q = questoes[questaoAtual];

  if (respostaUser === q.resposta) {
    selecionada.classList.add("correta");
    tocarSom("certo");
    acertosNaFase++;
    setTimeout(() => {
      questaoAtual++;
      exibirProximaQuestao();
    }, 1500);
  } else {
    selecionada.classList.add("incorreta");
    tocarSom("errado");
    setTimeout(() => {
      questaoAtual++;
      exibirProximaQuestao();
    }, 1500);
  }
}

// Verifica se avança ou reinicia a fase
function verificarTransicaoFase() {
  if (acertosNaFase >= 3) {
    if (faseAtual === "F") {
      faseAtual = "I";
      alert("🎉 Avançou para a Fase Intermédia!");
    } else if (faseAtual === "I") {
      faseAtual = "D";
      alert("🔥 Você está na Fase Difícil!");
    } else {
      alert("🏁 Parabéns! Você concluiu todas as fases!");
      window.location.href = "index.html";
      return;
    }
    carregarQuestoes();
  } else {
    tentativasFase++;
    if (tentativasFase >= 2) {
      alert("📚 Você precisa estudar! Tente novamente depois.");
      window.location.href = "index.html";
    } else {
      alert("⚠️ Você não acertou o mínimo de questões para avançar. A fase será reiniciada!");
      carregarQuestoes();
    }
  }
}

// Temporizador
function iniciarTemporizador() {
  tempoRestante = 45;
  document.getElementById("temporizador").innerText = `⏱️ Tempo: ${tempoRestante}s`;

  intervalo = setInterval(() => {
    tempoRestante--;
    document.getElementById("temporizador").innerText = `⏱️ Tempo: ${tempoRestante}s`;
    if (tempoRestante <= 0) {
      pararTemporizador();
      alert("⏰ Tempo esgotado!");
      responder();
    }
  }, 1000);
}

function pararTemporizador() {
  clearInterval(intervalo);
}

// Som
function tocarSom(tipo) {
  const audio = new Audio(`som/${tipo}.mp3`);
  audio.currentTime = 0;
  audio.play().catch(erro => console.warn("Erro ao tocar som:", erro));
}

// Embaralha array
function embaralharArray(array) {
  return array.sort(() => Math.random() - 0.5);
}