/* ia-dados.js
   Base de conhecimento para Assistente IA • Math Fácil
   Estrutura: IA_DADOS = { primario: {...}, ciclo1: {...}, medio: {...}, superior: {...} }
*/
const IA_DADOS = {
  primario: {
    numeros: {
      titulo: "Números naturais e inteiros",
      aliases: ["números naturais", "números inteiros", "numeros naturais", "inteiros"],
      definicao: "Números naturais: 0,1,2,3,... usados para contar. Inteiros: {...,-2,-1,0,1,2,...}.",
      exemplos: ["5 é natural; −3 é inteiro."],
      exercicios: [
        { pergunta: "Liste inteiros entre -2 e 2", resposta: "-1, 0, 1" },
        { pergunta: "O 0 é número natural?", resposta: "Sim (convenção escolar comum)" }
      ],
      importancia: "Contagem, temperaturas, contabilidade elemental."
    },
    sistema_decimal: {
      titulo: "Sistema de numeração decimal",
      aliases: ["sistema decimal", "sistema de numeração decimal", "decimal"],
      definicao: "Base 10 com valor posicional (unidades, dezenas, centenas...).",
      exemplos: ["347 = 3 centenas, 4 dezenas, 7 unidades."],
      exercicios: [{ pergunta: "256 em centenas/dezenas/unidades", resposta: "2 centenas, 5 dezenas, 6 unidades" }],
      importancia: "Usado em todas as medidas e números do dia a dia."
    },
    operacoes: {
      titulo: "Operações básicas (adição, subtração, multiplicação, divisão)",
      aliases: ["adição","subtração","multiplicação","divisão","operações básicas"],
      definicao: "As quatro operações fundamentais da aritmética.",
      exemplos: ["3+2=5; 10−6=4; 4×3=12; 12÷3=4"],
      exercicios: [{ pergunta: "14 + 9", resposta: "23" }, { pergunta: "56 ÷ 7", resposta: "8" }],
      importancia: "Calcular preços, troco, repartições e medidas."
    },
    tabuada: {
      titulo: "Tabuada",
      aliases: ["tabuada"],
      definicao: "Tabela de produtos de números inteiros (ex.: 1×1 a 10×10).",
      exemplos: ["7×8=56"],
      exercicios: [{ pergunta: "Tabuada do 7", resposta: "7,14,21,28,35,42,49,56,63,70" }],
      importancia: "Rapidez mental e base para multiplicação maior."
    },
    fracoes: {
      titulo: "Frações e decimais",
      aliases: ["frações","fracoes","decimais","números decimais"],
      definicao: "Frações representam partes do todo (a/b). Decimais usam vírgula para partes.",
      exemplos: ["1/2 = 0,5; 3/4 = 0,75"],
      exercicios: [{ pergunta: "1/2 + 1/4", resposta: "3/4" }],
      importancia: "Receitas, medidas e repartições."
    },
    figuras_planas: {
      titulo: "Figuras geométricas planas",
      aliases: ["figuras","geometria plana","quadrado","triângulo","retângulo","círculo"],
      definicao: "Formas no plano (quadrado, triângulo, retângulo, círculo).",
      exemplos: ["Área do retângulo: base×altura; perímetro do quadrado: 4×lado"],
      exercicios: [{ pergunta: "Área retângulo 8×3", resposta: "24" }],
      importancia: "Construção, desenho e medidas."
    },
    medidas: {
      titulo: "Medidas (tempo, comprimento, massa, capacidade)",
      aliases: ["medidas","tempo","comprimento","massa","capacidade"],
      definicao: "Unidades e conversões (1h=60min, 1km=1000m, 1L=1000mL).",
      exemplos: ["3 horas = 180 minutos"],
      exercicios: [{ pergunta: "Quantos minutos em 2 horas?", resposta: "120" }],
      importancia: "Planeamento diário, receitas, viagens."
    },
    estatistica_simples: {
      titulo: "Noções de estatística (gráficos, média básica)",
      aliases: ["estatística","estatistica","média","gráficos"],
      definicao: "Leitura de tabelas e gráficos simples; média aritmética como tendência central.",
      exemplos: ["Dados 2,3,4 → média = 3"],
      exercicios: [{ pergunta: "Média de 2,4,6", resposta: "4" }],
      importancia: "Interpretar resultados curtos e relatórios simples."
    }
  },

  ciclo1: {
    expressoes: {
      titulo: "Expressões numéricas e prioridade de operações",
      aliases: ["expressões","expressoes numericas","prioridade de operações"],
      definicao: "Ordem: parênteses → expoentes → multiplicação/divisão → adição/subtração.",
      exemplos: ["2 + 3 × 4 = 14 (não 20)"],
      exercicios: [{ pergunta: "2 + (3×4) − 5", resposta: "9" }],
      importancia: "Evitar erros em cálculos compostos."
    },
    potencia_radical: {
      titulo: "Potenciação e radiciação",
      aliases: ["potenciação","radiciação","potencias","raiz"],
      definicao: "Potência é multiplicação repetida; raiz é operação inversa.",
      exemplos: ["2^3=8; √9=3"],
      exercicios: [{ pergunta: "3^4", resposta: "81" }],
      importancia: "Cálculos de área, volume e crescimento."
    },
    mdc_mmc: {
      titulo: "MDC e MMC",
      aliases: ["mdc","mmc","máximo divisor comum","mínimo múltiplo comum"],
      definicao: "MDC: maior inteiro que divide dois números; MMC: menor inteiro múltiplo comum.",
      exemplos: ["MDC(8,12)=4; MMC(6,8)=24"],
      exercicios: [{ pergunta: "MDC(18,30)", resposta: "6" }],
      importancia: "Simplificação de frações e sincronização de ciclos."
    },
    eq1grau: {
      titulo: "Equações do 1º grau",
      aliases: ["equação 1º grau","equacao 1 grau","equacoes 1 grau","1º grau"],
      definicao: "Equação linear na forma ax + b = c; resolver isolando x.",
      exemplos: ["3x + 6 = 0 → x = −2"],
      exercicios: [{ pergunta: "2x − 5 = 9", resposta: "x = 7" }],
      importancia: "Resolver problemas simples com incógnitas."
    },
    sistemas2x2: {
      titulo: "Sistemas lineares 2×2",
      aliases: ["sistemas 2x2","sistema 2x2","sistemas lineares"],
      definicao: "Resolver por substituição, adição/eliminacão ou Cramer.",
      exemplos: ["x + y = 3; x − y = 1 → x = 2, y = 1"],
      exercicios: [{ pergunta: "2x + 3y = 7; x − y = 1", resposta: "x = 2, y = 1" }],
      importancia: "Resolver questões com duas incógnitas (misturas, trocas)."
    },
    proporcoes: {
      titulo: "Proporção e regra de três",
      aliases: ["proporção","regra de três","regra de tres"],
      definicao: "Grandezas diretamente ou inversamente proporcionais; regra de três para achar valor desconhecido.",
      exemplos: ["3 está para 9 como 5 está para x → x = 15"],
      exercicios: [{ pergunta: "30% de 200", resposta: "60" }],
      importancia: "Escalas, receitas, descontos."
    },
    pitagoras: {
      titulo: "Teorema de Pitágoras",
      aliases: ["pitagoras","pitágoras","teorema de pitagoras"],
      definicao: "Em triângulo retângulo: a² + b² = c² (c hipotenusa).",
      exemplos: ["Catetos 3 e 4 → hipotenusa 5"],
      exercicios: [{ pergunta: "Catetos 6 e 8 → hipotenusa?", resposta: "10" }],
      importancia: "Medições e construção."
    },
    areas_perimetros: {
      titulo: "Áreas e perímetros de figuras planas",
      aliases: ["áreas","perímetros","areas","perimetros","geometria plana"],
      definicao: "Fórmulas para quadrado, retângulo, triângulo, círculo.",
      exemplos: ["Área círculo: π r²; perímetro quadrado: 4·lado"],
      exercicios: [{ pergunta: "Área triângulo base 8 altura 3", resposta: "12" }],
      importancia: "Cálculo de materiais e espaços."
    },
    estatistica_basica: {
      titulo: "Estatística básica (média, moda, mediana)",
      aliases: ["média","moda","mediana","estatistica"],
      definicao: "Indicadores de tendência central para dados simples.",
      exemplos: ["Dados: 2,3,3,5 → média ≈ 3.25, moda = 3"],
      exercicios: [{ pergunta: "Dados 1,4,4,5,6 → mediana?", resposta: "4" }],
      importancia: "Interpretação de dados."
    }
  },

  medio: {
    eq2grau: {
      titulo: "Equações do 2º grau (Bhaskara)",
      aliases: ["equação 2º grau","bhaskara","eq2grau","equacao 2 grau"],
      definicao: "Resolver ax² + bx + c = 0 usando Δ = b² − 4ac e fórmula de Bhaskara.",
      exemplos: ["x² − 5x + 6 = 0 → x = 2, 3"],
      exercicios: [{ pergunta: "2x² − 4x − 6 = 0", resposta: "x = 3, x = −1" }],
      importancia: "Modelos quadráticos em física, economia e geometria."
    },
    funcoes: {
      titulo: "Funções (afim, quadrática, exponencial, logarítmica)",
      aliases: ["função","funcoes","funções","funcao"],
      definicao: "Relação entre variáveis expressa por uma regra f(x).",
      exemplos: ["Afim: f(x)=ax+b; Quadrática: ax²+bx+c"],
      exercicios: [{ pergunta: "Vértice f(x)=x²−6x+5", resposta: "Vértice: (3, −4)" }],
      importancia: "Modelagem e análise de comportamento."
    },
    trigonometria: {
      titulo: "Trigonometria básica (seno, cosseno, tangente)",
      aliases: ["trigonometria","seno","cosseno","tangente"],
      definicao: "Razões em triângulos retângulos e funções periódicas.",
      exemplos: ["sen²x + cos²x = 1"],
      exercicios: [{ pergunta: "sen²x+cos²x = ?", resposta: "1" }],
      importancia: "Ondas, engenharia, medições."
    },
    polinomios: {
      titulo: "Divisão e fatoração de polinômios (Briot-Ruffini)",
      aliases: ["polinomios","divisão de polinômios","briot-ruffini"],
      definicao: "Algoritmos para dividir polinômios e encontrar raízes.",
      exemplos: ["(x²+3x+2)/(x+1) → quociente x+2, resto 0"],
      exercicios: [{ pergunta: "(x³−1)/(x−1)", resposta: "x² + x + 1" }],
      importancia: "Fatoração e simplificação algébrica."
    },
    pa_pg: {
      titulo: "Progressões (PA e PG)",
      aliases: ["pa","pg","progressao aritmetica","progressao geometrica"],
      definicao: "Sequências com diferença constante (PA) ou razão constante (PG).",
      exemplos: ["PA: 2,5,8,... (r=3)"],
      exercicios: [{ pergunta: "PA a1=2 r=3 n=10 → a10?", resposta: "29" }],
      importancia: "Juros simples, previsões, finanças básicas."
    },
    combinatoria: {
      titulo: "Análise combinatória e probabilidade básica",
      aliases: ["combinatoria","probabilidade","arranjos","combinacoes","permutações"],
      definicao: "Contagem estruturada e cálculo de probabilidades.",
      exemplos: ["Dado: P(par) = 1/2"],
      exercicios: [{ pergunta: "P tirar par num dado", resposta: "1/2" }],
      importancia: "Modelagem de chance e risco."
    },
    matrizes: {
      titulo: "Matrizes e determinantes (3×3, 2×2)",
      aliases: ["matrizes","determinante","det"],
      definicao: "Operações matriciais; determinante indica invertibilidade.",
      exemplos: ["det [[1,2],[3,4]] = -2"],
      exercicios: [{ pergunta: "Determinante de [[1,2],[3,4]]", resposta: "-2" }],
      importancia: "Sistemas lineares, transformações."
    },
    estatistica: {
      titulo: "Estatística descritiva (variância, desvio padrão)",
      aliases: ["variancia","desvio","desvio padrao"],
      definicao: "Medidas de dispersão dos dados.",
      exemplos: ["Desvio padrão mostra variação em relação à média."],
      exercicios: [{ pergunta: "Dados 2,2,4,6 → média?", resposta: "3.5" }],
      importancia: "Análises de dados, controle de qualidade."
    }
  },

  superior: {
    limites: {
      titulo: "Limites e continuidade",
      aliases: ["limites","limite","continuidade"],
      definicao: "Analisar comportamento de f(x) quando x→a ou x→∞.",
      exemplos: ["lim_{x→0} sin(x)/x = 1"],
      exercicios: [{ pergunta: "lim x→∞ 1/x", resposta: "0" }],
      importancia: "Base do cálculo diferencial e integral."
    },
    derivadas: {
      titulo: "Derivadas e aplicações",
      aliases: ["derivada","derivadas","d/dx"],
      definicao: "Taxa instantânea de variação; regras produto/quociente/cadeia.",
      exemplos: ["(x^3)' = 3x^2"],
      exercicios: [{ pergunta: "d/dx x^2", resposta: "2x" }],
      importancia: "Otimização, física, taxas de variação."
    },
    integrais: {
      titulo: "Integrais definidas e indefinidas",
      aliases: ["integral","integrais"],
      definicao: "Antiderivadas e cálculo de áreas entre curvas.",
      exemplos: ["∫ x dx = x^2/2 + C"],
      exercicios: [{ pergunta: "∫ 2x dx", resposta: "x^2 + C" }],
      importancia: "Acumulação, área e volume."
    },
    edo: {
      titulo: "Equações diferenciais simples",
      aliases: ["equacoes diferenciais","edo"],
      definicao: "Modelos relacionando função e derivadas; soluções por separação.",
      exemplos: ["y' = ky → y = Ce^{kx}"],
      exercicios: [{ pergunta: "y' = 2y → solução", resposta: "y = C e^{2x}" }],
      importancia: "Modelos de crescimento/decadência, física."
    },
    algebra_linear: {
      titulo: "Álgebra linear avançada",
      aliases: ["algebra linear","autovalores","autovetores"],
      definicao: "Estudo de espaços vetoriais, autovalores e decomposição.",
      exemplos: ["Av = λv"],
      exercicios: [{ pergunta: "O que é autovalor?", resposta: "λ tal que Av=λv (v≠0)" }],
      importancia: "Machine learning, computação científica."
    },
    probabilidades_avancadas: {
      titulo: "Probabilidade avançada e distribuições",
      aliases: ["distribuicoes","probabilidade avançada","distribuicao"],
      definicao: "Distribuições (Bernoulli, Binomial, Normal, Poisson).",
      exemplos: ["Normal(μ,σ²) e Z-score"],
      exercicios: [{ pergunta: "Distribuição para contagens raras", resposta: "Poisson" }],
      importancia: "Inferência, estatística aplicada."
    }
  }
};
