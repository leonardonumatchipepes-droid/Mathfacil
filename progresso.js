// ================== Funções de Progresso ==================
(function(){
  // Recupera usuário atual
  const usuarioAtual = localStorage.getItem('usuarioAtual');
  if(!usuarioAtual){
    console.warn('Usuário não selecionado! Redirecionando para index.html');
    window.location.href = 'index.html';
  }

  // Inicializa dados dos usuários se não existirem
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  // Se usuário não existe, cria registro
  let usuario = usuarios.find(u => u.nome === usuarioAtual);
  if(!usuario){
    usuario = {
      nome: usuarioAtual,
      iniciais: usuarioAtual.split(' ').map(n=>n[0]).join('')[0],
      acertos:{Equacoes1:0,Equacoes2:0,Polinomios:0},
      erros:{Equacoes1:0,Equacoes2:0,Polinomios:0},
      tempoUso:0
    };
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  // ================== Função para registrar acerto ==================
  window.registrarAcerto = function(tema, quantidade=1){
    if(usuario.acertos.hasOwnProperty(tema)){
      usuario.acertos[tema] += quantidade;
      salvar();
    } else {
      console.warn(`Tema "${tema}" não existe.`);
    }
  }

  // ================== Função para registrar erro ==================
  window.registrarErro = function(tema, quantidade=1){
    if(usuario.erros.hasOwnProperty(tema)){
      usuario.erros[tema] += quantidade;
      salvar();
    } else {
      console.warn(`Tema "${tema}" não existe.`);
    }
  }

  // ================== Função para registrar tempo de uso ==================
  window.registrarTempoUso = function(horas){
    usuario.tempoUso += horas;
    salvar();
  }

  // ================== Função para atualizar localStorage ==================
  function salvar(){
    usuarios = usuarios.map(u => u.nome === usuario.nome ? usuario : u);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  // ================== Função para pegar dados do usuário ==================
  window.obterDadosUsuario = function(){
    return usuario;
  }

})();