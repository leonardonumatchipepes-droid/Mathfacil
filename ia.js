// ia.js
document.addEventListener("DOMContentLoaded", () => {
  const entrada = document.getElementById("entrada");
  const enviar = document.getElementById("enviar");
  const msgs = document.getElementById("msgs");

  // adicionar mensagem ao chat
  function addMsg(text, autor="me") {
    const div = document.createElement("div");
    div.className = `msg ${autor}`;
    div.innerHTML = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    if (window.MathJax) MathJax.typesetPromise();
  }

  // Função para processar a pergunta
  function processarPergunta(pergunta){
    pergunta = pergunta.toLowerCase();

    // Buscar explicação na base de dados (ia-dados.js)
    for (let topico of IA_DADOS) {
      if (pergunta.includes(topico.chave.toLowerCase())) {
        addMsg(`<b>${topico.titulo}</b><br>${topico.explicacao}`, "bot");
        return;
      }
    }

    // Reconhecimento de cálculos diretos
    try {
      if (pergunta.startsWith("calcula") || pergunta.startsWith("resolver")) {
        let expr = pergunta.replace("calcula", "").replace("resolver", "").trim();
        let resultado = math.evaluate(expr);
        addMsg(`A expressão: <br> $${expr}$ <br><b>Resultado:</b> ${resultado}`, "bot");
        return;
      }
    } catch (e) {
      addMsg("Não consegui calcular isso 😅, verifica a expressão.", "bot");
      return;
    }

    // Exemplos prontos:
    if (pergunta.includes("equação 3x+6=0")) {
      const sol = math.solve("3x+6=0", "x");
      addMsg(`
        <b>Equação:</b> $3x + 6 = 0$ <br>
        Passo 1: Subtraímos 6 em ambos os lados → $3x = -6$ <br>
        Passo 2: Dividimos por 3 → $x = -2$ <br>
        <b>Resultado final:</b> $x = ${sol}$
      `, "bot");
      return;
    }

    if (pergunta.includes("pitágoras")) {
      addMsg(`
        <b>Teorema de Pitágoras</b><br>
        $a^2 + b^2 = c^2$ <br>
        Onde $c$ é a hipotenusa e $a$, $b$ são os catetos.<br>
        Exemplo: se $a=3$ e $b=4$, então $c = 5$.
      `, "bot");
      return;
    }

    if (pergunta.includes("tabuada do 7")) {
      let out = "<b>Tabuada do 7:</b><br>";
      for (let i = 1; i <= 10; i++) {
        out += `$7 \\times ${i} = ${7*i}$ <br>`;
      }
      addMsg(out, "bot");
      return;
    }

    // fallback
    addMsg("Ainda não aprendi isso 😅, mas podes treinar-me adicionando em ia-dados.js", "bot");
  }

  // clique no botão enviar
  enviar.addEventListener("click", () => {
    const pergunta = entrada.value.trim();
    if (!pergunta) return;
    addMsg(pergunta, "me");
    processarPergunta(pergunta);
    entrada.value = "";
  });

  // clique nos chips
  document.querySelectorAll(".chip[data-prompt]").forEach(chip => {
    chip.addEventListener("click", () => {
      entrada.value = chip.dataset.prompt;
      enviar.click();
    });
  });
});
