const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   {
       enunciado: "Em que ano o Brasil ganhou a última copa do Mundo?",
       alternativas: [
           {
               texto: "2018",
               afirmacao: "Em 2018 quem ganhou a copa do mundo foi a França."
           },
           {
               texto: "2002",
               afirmacao: "A copa do mundo de 2002 foi a que representou o Brasil no Futebol."
           }
       ]
   },
   {
       enunciado: "Em que ano a Ford saiu do Brasil?",
       alternativas: [
           {
               texto: "2021",
               afirmacao: "Ford anunciou o encerramento da produção de veículos no Brasil, pois teve uma queda nas vendas no Brasil."
           },
           {
               texto: "2010",
               afirmacao: "A Ford ainda tinha sucesso no mercado automobilístico."
           }
       ]
   },
   {
       enunciado: "Em que ano o McDonald's foi aberto?",
       alternativas: [
           {
               texto: "15 de Abril de 1955",
               afirmacao: "No Brasil, o McDonald's instalou-se primeiramente em 13 de fevereiro de 1979, na rua Hilário de Gouveia, em Copacabana, no Rio de Janeiro."
           },
           {
               texto: "31 de fevereiro de 1999",
               afirmacao: "Muito tarde essa época..."
           }
       ]
   },
   {
       enunciado: "Qual foi o jogador que mais teve reconhecimento na Seleção Brasileira?",
       alternativas: [
           {
               texto: "Pelé",
               afirmacao: "Pelé tornou-se também o único jogador da história a ser tricampeão mundial (1958, 1962 e 1970)."
           },
           {
               texto: "Maradona",
               afirmacao: "Maradona nem jogou na Seleção Brasileira."
           }
       ]
   },
   {
       enunciado: "Quem ganhou a Champions League de 2024?",
       alternativas: [
           {
               texto: "Borussia",
               afirmacao: "Borussia perdeu de 2x0 para Real Madrid."
           },
           {
               texto: "Real Madrid",
               afirmacao: "Real Madrid ganhou a Champions por 2x0 com gols de Carvajal e Vinicius Junior."
           }
       ]
   },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}

function mostraAlternativas() {
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}

function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}

function mostraResultado() {
   caixaPerguntas.textContent = "Parabéns! Você concluiu o questionário!";
   textoResultado.textContent = "Aqui está a sua jornada:\n\n" + historiaFinal;
   caixaAlternativas.textContent = "";
}

mostraPergunta();
