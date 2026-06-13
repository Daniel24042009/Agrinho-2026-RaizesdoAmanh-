// ==========================================================================
// 1. CONTROLADOR DE NAVEGAÇÃO DE ABAS EXCLUSIVAS (SPA)
// ==========================================================================
function irParaAba(nomeAba) {
    document.querySelectorAll('.view-pane').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(button => button.classList.remove('active'));
    
    const viewPane = document.getElementById(`view-${nomeAba}`);
    const navBtn = document.getElementById(`btn-tab-${nomeAba}`);
    
    if (viewPane) viewPane.classList.add('active');
    if (navBtn) navBtn.classList.add('active');
    
    const bibliotecaTitulos = {
        painel: ["Monitoramento de Impacto Agroecológico", "Tecnologia aplicada ao desenvolvimento sustentável da Escola do Campo rural."],
        agroecologia: ["Espaço de Capacitação Científica", "Visão detalhada e aprofundada das seis grandes diretrizes conservacionistas."],
        licoes: ["Quiz e Avaliação Continuada", "Fixação teórica através de blocos de múltipla escolha em três níveis."],
        materiais: ["Central de Recursos Didáticos", "Visualização integrada de acervos científicos públicos sem links externos."],
        desafios: ["Módulos de Gamificação Ativa", "Consolidação de conceitos através de dinâmicas de programação e memória."]
    };

    if (bibliotecaTitulos[nomeAba]) {
        document.getElementById('dinamico-titulo-aba').innerText = bibliotecaTitulos[nomeAba][0];
        document.getElementById('dinamico-subtitulo-aba').innerText = bibliotecaTitulos[nomeAba][1];
    }
}

// ==========================================================================
// 2. SISTEMA DE DIRETRIZES E MODAIS DIÁLOGOS
// ==========================================================================
const bdsDiretrizesAgroecologicas = {
    "cobertura": {
        titulo: "Cobertura Permanente do Solo",
        sub: "Proteção mecânica e manutenção térmica da microvida",
        corpo: "A manutenção do solo coberto, seja por palhada residual (plantio direto) ou por plantas de cobertura, reduz drasticamente o impacto direto das gotas de chuva, mitigando a erosão laminar. Além disso, funciona como um isolante térmico que conserva a umidade e favorece a proliferação de microrganismos benéficos nas camadas superficiais.",
        tag: "Solo e Água"
    },
    "policultivo": {
        titulo: "Policultivos e Rotação de Culturas",
        sub: "Quebra de ciclos de pragas e sinergia de nutrientes",
        corpo: "Cultivar múltiplas espécies na mesma área diversifica o sistema radicular, melhorando a estrutura física do solo. A inclusão de leguminosas fixa o nitrogênio atmosférico biologicamente, enquanto a rotação sistemática interrompe o ciclo reprodutivo de pragas e patógenos específicos de uma única cultura.",
        tag: "Biodiversidade"
    },
    "insumos": {
        titulo: "Redução e Substituição de Insumos Químicos",
        sub: "Transição para bioinsumos e caldas protetoras naturais",
        corpo: "Esta diretriz foca na diminuição gradual de fertilizantes sintéticos de alta solubilidade e pesticidas químicos, substituindo-os por compostagem orgânica, biofertilizantes líquidos, inoculantes microbianos e extratos botânicos. O objetivo é restaurar o equilíbrio biológico sem criar dependência externa.",
        tag: "Defesa Biológica"
    },
    "agrofloresta": {
        titulo: "Sistemas Agroflorestais (SAFs)",
        sub: "Integração vertical e mimetismo estrutural da floresta",
        corpo: "Os SAFs consorciam árvores perenes com culturas anuais e/ou criação de animais. Esta organização mimetiza a estratificação de uma floresta natural, otimizando a captação de energia solar em diferentes níveis, reciclando nutrientes profundos através das raízes das árvores e gerando microclimas estáveis.",
        tag: "Sistemas Complexos"
    },
    "agua": {
        titulo: "Manejo Ecológico da Água",
        sub: "Captação, infiltração localizada e conservação de microbacias",
        corpo: "Estratégia focada em desacelerar o escoamento superficial da água através de curvas de nível, cordões de vegetação e bacias de retenção. Promove a infiltração profunda para recarga de lençóis freáticos e utiliza sistemas de irrigação supereficientes, como o gotejamento.",
        tag: "Recursos Hídricos"
    },
    "comunidades": {
        titulo: "Socioecologia e Circuitos Curtos",
        sub: "Valorização do saber local e mercados de proximidade",
        corpo: "A agroecologia transcende a técnica agrícola; ela integra o bem-estar humano. Fortalece cooperativas familiares, apoia feiras ecológicas locais, reduz a pegada de carbono do transporte de alimentos e promove a soberania alimentar, garantindo que a comunidade rural se mantenha sustentável.",
        tag: "Socioeconomia"
    }
};

function dispararModalInjetado(chaveDiretriz) {
    const alvo = bdsDiretrizesAgroecologicas[chaveDiretriz];
    if (!alvo) return;

    const templateHtml = `
        <span class="tech-tag" style="margin-bottom:12px; display:inline-block; background:var(--primary-green); color:#fff; padding:4px 10px; border-radius:4px; font-size:0.75rem;">${alvo.tag}</span>
        <h2 style="color:var(--primary-green); font-weight:800; margin-bottom:6px;">${alvo.titulo}</h2>
        <h4 style="color:var(--text-light); font-weight:600; margin-bottom:20px; font-size:0.95rem;">${alvo.sub}</h4>
        <div style="line-height:1.6; color:var(--text-dark); font-size:0.92rem; text-align:justify; background:#f8faf9; padding:20px; border-radius:10px; border:1px solid var(--border-gray);">
            ${alvo.corpo}
        </div>
        <div style="margin-top:25px; text-align:right;">
            <button class="btn-primary" onclick="ocultarModal()">Entendido, Fechar</button>
        </div>
    `;

    document.getElementById('modal-content-injector').innerHTML = templateHtml;
    document.getElementById('global-modal-overlay').classList.remove('hidden');
}

function ocultarModal() {
    document.getElementById('global-modal-overlay').classList.add('hidden');
}

function fecharModalPorCliqueFora(e) {
    if (e.target.id === 'global-modal-overlay') {
        ocultarModal();
    }
}

// ==========================================================================
// 3. MOTOR DO SIMULADOR DE DIAGNÓSTICO MATEMÁTICO (CORRIGIDO)
// ==========================================================================
function processarCalculoDiagnostico() {
    const s1 = parseInt(document.getElementById('sim-cobertura').value) || 0;
    const s2 = parseInt(document.getElementById('sim-policultivo').value) || 0;
    const s3 = parseInt(document.getElementById('sim-insumos').value) || 0;
    const s4 = parseInt(document.getElementById('sim-agrofloresta').value) || 0;
    const s5 = parseInt(document.getElementById('sim-agua').value) || 0;

    const notaFinalPonderada = Math.round((s1 * 0.25) + (s2 * 0.20) + (s3 * 0.25) + (s4 * 0.15) + (s5 * 0.15));

    document.getElementById('score-display-num').innerText = notaFinalPonderada;
    document.getElementById('bar-fill-diagnostico').style.width = `${notaFinalPonderada}%`;
    document.getElementById('metric-simulador').innerText = `${notaFinalPonderada}/100`;

    const blocoFeedback = document.getElementById('output-feedback-box');
    blocoFeedback.classList.remove('hidden');
    blocoFeedback.style.padding = "15px";
    blocoFeedback.style.borderRadius = "8px";
    blocoFeedback.style.fontSize = "0.9rem";
    blocoFeedback.style.lineHeight = "1.5";

    if (notaFinalPonderada >= 80) {
        blocoFeedback.style.background = "#e6f4ea";
        blocoFeedback.style.color = "#137333";
        blocoFeedback.innerHTML = "<strong>🏆 Excelente Nível de Sustentabilidade:</strong> A propriedade adota práticas integradas de alto impacto ecológico. Recomenda-se manter a rotação e iniciar a certificação orgânica formal.";
    } else if (notaFinalPonderada >= 50) {
        blocoFeedback.style.background = "#fef7e0";
        blocoFeedback.style.color = "#b06000";
        blocoFeedback.innerHTML = "<strong>⚠️ Nível de Transição Agroecológica:</strong> Existem boas iniciativas locais, mas o sistema ainda apresenta dependência moderada ou pontos de vulnerabilidade contra erosão/escassez.";
    } else {
        blocoFeedback.style.background = "#fce8e6";
        blocoFeedback.style.color = "#c5221f";
        blocoFeedback.innerHTML = "<strong>🚨 Alerta Crítico de Degradação:</strong> Manejo convencional agressivo detectado. Alta suscetibilidade à exaustão mineral do solo e perda severa de umidade. Intervenção imediata sugerida.";
    }
    
    verificarEAtualizarTrofeus();
}

// ==========================================================================
// 4. MOTOR DO QUIZ EM TRÊS NÍVEIS PROGRESSIVOS (30 QUESTÕES)
// ==========================================================================
const bancoQuestoesQuiz = [
    // NÍVEL FÁCIL
    { nivel: "facil", q: "Qual o principal objetivo ecológico da cobertura permanente do solo?", o: ["Eliminar microrganismos", "Impedir a infiltração de ar", "Reduzir o impacto mecânico da chuva e reter umidade", "Facilitar a aração mecânica profunda"], a: 2 },
    { nivel: "facil", q: "Como as leguminosas atuam na fertilidade do solo dentro de uma rotação de culturas?", o: ["Absorvem nitrogênio excessivo", "Fixam o nitrogênio atmosférico biologicamente em simbiose com bactérias", "Compactam solos arenosos", "Impedem o crescimento de espécies"], a: 1 },
    { nivel: "facil", q: "O que caracteriza a 'erosão laminar' em solos sem proteção?", o: ["Abertura de crateras profundas", "A remoção uniforme da camada superficial mais rica em matéria orgânica", "A quebra de rochas profundas", "O aumento da fauna de minhocas"], a: 1 },
    { nivel: "facil", q: "A diversificação biológica melhora a estabilidade econômica do produtor rural porque:", o: ["Reduz as opções de venda", "Evita perdas totais se uma cultura falhar ou sofrer desvalorização", "Exige maquinários caros", "Duplica os subsídios automaticamente"], a: 1 },
    { nivel: "facil", q: "As matas ciliares são fundamentais para os ecossistemas agrícolas porque:", o: ["Evitam o assoreamento de rios e filtram resíduos", "Serveme unicamente como divisórias", "Fornecem lenha de corte diário", "Absorvem água dos rios secando áreas"], a: 0 },
    { nivel: "facil", q: "Qual la função da bioestrutura (agregados do solo) na agroecologia?", o: ["Impedir que as raízes respirem", "Garantir porosidade equilibrada para circulação de água e ar", "Tornar o solo impermeável", "Facilitar a lixiviação de minerais"], a: 1 },
    { nivel: "facil", q: "O conceito de 'plantas companheiras' baseia-se em quê?", o: ["Espécies que competem por espaço", "Associações vegetais onde uma espécie beneficia a outra", "Plantas que devem ser colhidas juntas", "Espécies ornamentais sem valor"], a: 1 },
    { nivel: "facil", q: "Em agroecologia, os insetos vulgarmente chamados 'pragas' são vistos como:", o: ["Inimigos que devem ser extintos", "Sinais indicadores de desequilíbrio ecológico no sistema", "Animais impossíveis de controlar", "Seres sem relevância trófica"], a: 1 },
    { nivel: "facil", q: "O uso de adubos verdes (como a mucuna ou guandu) serve para:", o: ["Colorir o campo para ecoturismo", "Produzir biomassa, cobrir o solo e fixar/reciclar nutrientes", "Substituir a cultura principal", "Eliminar a necessidade de rotação"], a: 1 },
    { nivel: "facil", q: "O que significa o termo 'período de carência' na aplicação de defensivos?", o: ["O tempo de germinação na sementeira", "O intervalo de segurança entre a aplicação e a colheita segura", "A falta de chuva ideal na adubação", "O tempo de repouso do trator"], a: 1 },

    // NÍVEL MÉDIO
    { nivel: "medio", q: "A compostagem orgânica substitui fertilizantes sintéticos de alta solubilidade porque:", o: ["Libera nutrientes de forma lenta e melhora a estrutura do solo", "Acidifica o solo matando insetos", "Contem hormônios de crescimento", "Evita a necessidade de irrigar"], a: 0 },
    { nivel: "medio", q: "Por que os monocultivos extensivos são biologicamente mais vulneráveis a pragas?", o: ["Atraem mais polinizadores", "Falta luz solar entre as linhas", "Oferecem alimento abundante e homogêneo para uma única espécie", "Esgotam apenas a água superficial"], a: 2 },
    { nivel: "medio", q: "O controle biológico conservacionista consiste em:", o: ["Introduzir espécies exóticas de laboratório", "Preservar e atrair predadores naturais já existentes no local", "Aplicar defensivos químicos nas bordas", "Isolar o campo com telas plásticas"], a: 1 },
    { nivel: "medio", q: "A calda bordalesa é um insumo alternativo composto essencialmente por:", o: ["Cloro concentrado e detergente", "Sulfato de cobre, cal hidratada e água", "Petróleo bruto refinado", "Extrato concentrado de soja"], a: 1 },
    { nivel: "medio", q: "Como funcionam os bioinsumos baseados em fungos entomopatogênicos (Beauveria bassiana)?", o: ["Queimam as folhas externamente", "Infectam e controlam insetos-alvo de forma específica", "Nutrem a planta pelos estômatos", "Repelem pássaros pelo odor"], a: 1 },
    { nivel: "medio", q: "Qual a principal vantagem da estratificação vertical nos Sistemas Agroflorestais?", o: ["Impedir a entrada de vento", "Otimizar o uso da luz solar em diferentes alturas pelas plantas", "Facilitar a colheita mecanizada", "Reduzir a produção de matéria orgânica"], a: 1 },
    { nivel: "medio", q: "Nos SAFs, o manejo por podas sistemáticas das árvores serve para:", o: ["Eliminar árvores velhas precocemente", "Estimular a entrada de luz e gerar biomassa para cobrir o solo", "Impedir que deem frutos pesados", "Diminuir a profundidade das raízes"], a: 1 },
    { nivel: "medio", q: "O que diferencia um SAF de um reflorestamento comercial convencional?", o: ["O SAF utiliza apenas plantas importadas", "O SAF integra espécies florestais com culturas alimentares ou animais", "O reflorestamento não permite corte", "O SAF dispensa água da chuva"], a: 1 },
    { nivel: "medio", q: "Como o cultivo em 'curvas de nível' atua na proteção dos recursos hídricos?", o: ["Acelera o escoamento da água", "Reduz a velocidade da água superficial, aumentando a infiltração", "Modifica a química da água da chuva", "Mantém o solo encharcado"], a: 1 },
    { nivel: "medio", q: "A compactação do solo por tráfego pesado de máquinas afeta a água pois:", o: ["Aumenta o armazenamento de umidade", "Reduz a porosidade, impedindo a infiltração e gerando enxurradas", "Purifica a água eliminando argilas", "Acelera a evapotranspiração foliar"], a: 1 },

    // NÍVEL DIFÍCIL
    { nivel: "dificil", q: "A introdução de árvores em pastagens (Sistemas Silvipastoris) traz qual benefício animal?", o: ["Redução do espaço de caminhada", "Conforto térmico através de sombra, melhorando a produtividade", "Alimentação baseada em folhas secas", "Aumento da velocidade de corrida"], a: 1 },
    { nivel: "dificil", q: "Sistemas agroflorestais auxiliam na mitigação das mudanças climáticas globais através de:", o: ["Emissão controlada de enxofre", "Sequestro e fixação de carbono na biomassa lenhosa e no solo", "Reflexão total dos raios ultravioleta", "Diminuição da gravidade localizada"], a: 1 },
    { nivel: "dificil", q: "Qual a desvantagem ecológica da irrigação por inundação contínua frente ao gotejamento?", o: ["Consumo mínimo de energia elétrica", "Desperdício severo de água e riscos de salinização do solo", "Impossibilidade de aplicar adubos", "Aumento da umidade do ar regional"], a: 1 },
    { nivel: "dificil", q: "O que expressa o conceito de 'cisterna de calçadão' na agricultura familiar?", o: ["Estrutura urbana de águas cinzentas", "Tecnologia social para captar chuva escoada em superfícies cimentadas", "Canal aberto para drenar brejos", "Piscina decorativa de piscicultura"], a: 1 },
    { nivel: "dificil", q: "O que define um 'circuito curto de comercialização' na venda de alimentos?", o: ["Vendas internacionais por corretoras", "A comercialização direta entre produtor e consumidor (feiras, sacolas)", "Contratos com redes multinacionais", "Troca exclusiva sem uso de moedas"], a: 1 },
    { nivel: "dificil", q: "A 'Certificação Participativa' de produtos orgânicos baseia-se em:", o: ["Auditorias pagas a empresas isoladas", "Redes de confiança mútua entre produtores, técnicos e consumidores", "Testes químicos em cada lote", "Selos comprados em balcões estatais"], a: 1 },
    { nivel: "dificil", q: "Como a transição agroecológica apoia a 'Soberania Alimentar' das comunidades?", o: ["Obriga a importação de sementes", "Garante autonomia na produção de alimentos e conservação de sementes crioulas", "Prioriza culturas de exportação", "Substitui hábitos tradicionais"], a: 1 },
    { nivel: "dificil", q: "O êxodo rural de jovens nas comunidades rurais pode ser mitigado por:", o: ["Mecanização que elimine empregos", "Adoção de tecnologias sustentáveis, internet no campo e valorização do trabalho", "Fechamento de escolas rurais", "Proibição legal de migração"], a: 1 },
    { nivel: "dificil", q: "A transição agroecológica difere da agricultura orgânica convencional simplificada porque:", o: ["Permite o uso oculto de venenos", "Propõe uma reestruturação ecológica integral do agroecossistema e das relações", "Foca unicamente na substituição de insumos", "Proíbe tecnologia digital"], a: 1 },
    { nivel: "dificil", q: "Qual o papel ecológico dos microrganismos solubilizadores de fósforo no solo?", o: ["Tornar o fósforo fixado na terra disponível para as raízes naturalmente", "Produzir fósforo sintético na argila", "Substituir a necessidade de luz solar", "Reduzir o crescimento de ervas"], a: 0 }
];

let nivelAtual = "facil"; 
let questoesFiltradas = [];
let indiceQuestaoAtual = 0;
let scoreAcertosQuiz = 0;
let scoreTotalGeral = 0; 

function inicializarEstruturaQuiz(nivelEscolhido = "facil") {
    nivelAtual = nivelEscolhido;
    indiceQuestaoAtual = 0;
    scoreAcertosQuiz = 0;
    
    questoesFiltradas = bancoQuestoesQuiz.filter(q => q.nivel === nivelAtual);
    
    document.getElementById('quiz-painel-conclusao').classList.add('hidden');
    document.getElementById('quiz-core-box').classList.remove('hidden');
    
    const nomesNiveis = { facil: "FÁCIL 🌱", medio: "MÉDIO 🌽", dificil: "DIFÍCIL 🌳" };
    document.getElementById('quiz-nivel-badge').innerText = `Nível: ${nomesNiveis[nivelAtual]}`;
    
    renderizarQuestaoQuiz();
}

function renderizarQuestaoQuiz() {
    const dadosQuestao = questoesFiltradas[indiceQuestaoAtual];
    
    document.getElementById('quiz-txt-progresso').innerText = `Questão ${indiceQuestaoAtual + 1} de ${questoesFiltradas.length}`;
    const percentagemProgresso = ((indiceQuestaoAtual + 1) / questoesFiltradas.length) * 100;
    document.getElementById('quiz-bar-progress-fill').style.width = `${percentagemProgresso}%`;

    document.getElementById('quiz-pergunta-texto').innerText = dadosQuestao.q;

    const containerOpcoes = document.getElementById('quiz-container-opcoes');
    containerOpcoes.innerHTML = "";

    dadosQuestao.o.forEach((opcaoTexto, idOpcao) => {
        const elementoBotao = document.createElement('button');
        elementoBotao.className = "quiz-opcao-btn";
        elementoBotao.style.width = "100%";
        elementoBotao.style.padding = "12px 16px";
        elementoBotao.style.textAlign = "left";
        elementoBotao.style.background = "#fff";
        elementoBotao.style.border = "1px solid var(--border-gray)";
        elementoBotao.style.borderRadius = "8px";
        elementoBotao.style.cursor = "pointer";
        elementoBotao.style.fontSize = "0.92rem";
        elementoBotao.style.transition = "all 0.2s";
        
        elementoBotao.innerText = opcaoTexto;
        elementoBotao.onclick = () => avaliarRespostaSelecionada(idOpcao, elementoBotao);
        containerOpcoes.appendChild(elementoBotao);
    });
}

function avaliarRespostaSelecionada(idSelecionado, botaoClicado) {
    const dadosQuestao = questoesFiltradas[indiceQuestaoAtual];
    const todosBotoes = document.querySelectorAll('.quiz-opcao-btn');
    todosBotoes.forEach(btn => btn.disabled = true);

    if (idSelecionado === dadosQuestao.a) {
        botaoClicado.style.background = "#e6f4ea";
        botaoClicado.style.borderColor = "#137333";
        botaoClicado.style.color = "#137333";
        scoreAcertosQuiz++;
        scoreTotalGeral++;
    } else {
        botaoClicado.style.background = "#fce8e6";
        botaoClicado.style.borderColor = "#c5221f";
        botaoClicado.style.color = "#c5221f";
        
        todosBotoes[dadosQuestao.a].style.background = "#e6f4ea";
        todosBotoes[dadosQuestao.a].style.borderColor = "#137333";
        todosBotoes[dadosQuestao.a].style.color = "#137333";
    }

    setTimeout(() => {
        indiceQuestaoAtual++;
        if (indiceQuestaoAtual < questoesFiltradas.length) {
            renderizarQuestaoQuiz();
        } else {
            finalizarExibicaoNivelQuiz();
        }
    }, 1200);
}

function finalizarExibicaoNivelQuiz() {
    document.getElementById('quiz-core-box').classList.add('hidden');
    const painelFim = document.getElementById('quiz-painel-conclusao');
    painelFim.classList.remove('hidden');

    document.getElementById('quiz-score-final').innerText = `${scoreAcertosQuiz} / ${questoesFiltradas.length}`;
    document.getElementById('metric-quiz').innerText = `${scoreTotalGeral}/30`;

    const txtAnalise = document.getElementById('quiz-analise-texto');
    const containerAcao = document.getElementById('quiz-acao-container');
    containerAcao.innerHTML = ""; 

    if (nivelAtual === "facil") {
        txtAnalise.innerText = `Parabéns! Você completou o Nível Fácil com ${scoreAcertosQuiz} acertos. Vamos avançar para o nível Médio?`;
        containerAcao.innerHTML = `<button class="btn-primary" style="padding: 12px 24px;" onclick="inicializarEstruturaQuiz('medio')">Avançar para o Nível Médio 🌽</button>`;
    } else if (nivelAtual === "medio") {
        txtAnalise.innerText = `Excelente progresso! O nível Médio foi concluído com ${scoreAcertosQuiz} acertos. Agora vem o desafio final: Nível Difícil.`;
        containerAcao.innerHTML = `<button class="btn-primary" style="padding: 12px 24px;" onclick="inicializarEstruturaQuiz('dificil')">Avançar para o Nível Difícil 🌳</button>`;
    } else {
        txtAnalise.innerText = `Fim da Jornada Científica! Você percorreu todas as 30 perguntas. Pontuação acumulada final: ${scoreTotalGeral} de 30 acertos.`;
        containerAcao.innerHTML = `<button class="btn-primary" style="padding: 12px 24px; background:#6c757d;" onclick="resetarQuizCompleto()">Reiniciar Todo o Quiz 🌱</button>`;
    }
    
    verificarEAtualizarTrofeus();
}

function resetarQuizCompleto() {
    scoreTotalGeral = 0;
    inicializarEstruturaQuiz('facil');
}

// ==========================================================================
// 5. MÓDULO GAMIFICADO: JOGO DA MEMÓRIA
// ==========================================================================
const cartasMemoriaOriginais = [
    { nome: "Solo Protegido", icon: "🌱" }, { nome: "Solo Protegido", icon: "🌱" },
    { nome: "Policultivo", icon: "🌽" },    { nome: "Policultivo", icon: "🌽" },
    { nome: "Bioinsumo", icon: "🧪" },      { nome: "Bioinsumo", icon: "🧪" },
    { nome: "Agrofloresta", icon: "🌳" },   { nome: "Agrofloresta", icon: "🌳" },
    { nome: "Água Conservada", icon: "💧" }, { nome: "Água Conservada", icon: "💧" },
    { nome: "Comunidade", icon: "🏡" },     { nome: "Comunidade", icon: "🏡" }
];

let vetorTemporarioCartas = [];
let jogadasEfetuadas = 0;
let timerIdInterv = null;
let segundosCorridos = 0;
let jogoIniciado = false;

function iniciarNovoJogoMemoria() {
    vetorTemporarioCartas = [];
    jogadasEfetuadas = 0;
    segundosCorridos = 0;
    jogoIniciado = true;
    
    document.getElementById('moves-val').innerText = "0";
    document.getElementById('timer-val').innerText = "0s";
    
    clearInterval(timerIdInterv);
    timerIdInterv = setInterval(() => {
        segundosCorridos++;
        document.getElementById('timer-val').innerText = `${segundosCorridos}s`;
    }, 1000);

    const cartasEmbaralhadas = [...cartasMemoriaOriginais];
    for (let i = cartasEmbaralhadas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cartasEmbaralhadas[i], cartasEmbaralhadas[j]] = [cartasEmbaralhadas[j], cartasEmbaralhadas[i]];
    }

    const canvasGrade = document.getElementById('memory-canvas');
    canvasGrade.innerHTML = "";

    cartasEmbaralhadas.forEach(objetoDado => {
        const elementoCarta = document.createElement('div');
        elementoCarta.className = "memory-tile";
        elementoCarta.style.height = "100px";
        elementoCarta.style.background = "#e9ecef";
        elementoCarta.style.borderRadius = "8px";
        elementoCarta.style.cursor = "pointer";
        elementoCarta.style.display = "flex";
        elementoCarta.style.alignItems = "center";
        elementoCarta.style.justifyContent = "center";
        elementoCarta.style.border = "1px solid var(--border-gray)";
        
        const faceVerso = document.createElement('div');
        faceVerso.className = "tile-back";
        faceVerso.style.fontSize = "1.5rem";
        faceVerso.style.color = "#6c757d";
        faceVerso.innerText = "？";

        const faceFrente = document.createElement('div');
        faceFrente.className = "tile-front";
        faceFrente.style.display = "none";
        faceFrente.style.flexDirection = "column";
        faceFrente.style.alignItems = "center";
        faceFrente.style.justifyContent = "center";
        faceFrente.innerHTML = `<span style="font-size:1.8rem; margin-bottom:2px;">${objetoDado.icon}</span><span style="font-size:0.6rem; font-weight:700; color:var(--primary-green); text-align:center;">${objetoDado.nome}</span>`;

        elementoCarta.appendChild(faceVerso);
        elementoCarta.appendChild(faceFrente);

        elementoCarta.onclick = () => gerirCliqueCartaMemoria(elementoCarta, objetoDado);
        canvasGrade.appendChild(elementoCarta);
    });
}

function gerirCliqueCartaMemoria(elementoCarta, objetoDado) {
    if (!jogoIniciado) return;
    if (elementoCarta.classList.contains('flipped') || elementoCarta.classList.contains('matched')) return;
    if (vetorTemporarioCartas.length >= 2) return;

    elementoCarta.classList.add('flipped');
    elementoCarta.style.background = "#fff";
    elementoCarta.querySelector('.tile-back').style.display = "none";
    elementoCarta.querySelector('.tile-front').style.display = "flex";

    vetorTemporarioCartas.push({ el: elementoCarta, d: objetoDado });
    
    if (vetorTemporarioCartas.length === 2) {
        jogadasEfetuadas++;
        document.getElementById('moves-val').innerText = jogadasEfetuadas;
        
        if (vetorTemporarioCartas[0].d.nome === vetorTemporarioCartas[1].d.nome) {
            vetorTemporarioCartas[0].el.classList.add('matched');
            vetorTemporarioCartas[1].el.classList.add('matched');
            
            vetorTemporarioCartas[0].el.style.borderColor = "var(--primary-green)";
            vetorTemporarioCartas[1].el.style.borderColor = "var(--primary-green)";
            vetorTemporarioCartas = [];
            
            if (document.querySelectorAll('.memory-tile.matched').length === cartasMemoriaOriginais.length) {
                clearInterval(timerIdInterv);
                jogoIniciado = false;
                setTimeout(() => { 
                    alert(`🎉 Vitória! Missão completada em ${jogadasEfetuadas} jogadas e ${segundosCorridos} segundos!`); 
                    verificarEAtualizarTrofeus();
                }, 400);
            }
        } else {
            setTimeout(() => {
                vetorTemporarioCartas[0].el.classList.remove('flipped');
                vetorTemporarioCartas[0].el.style.background = "#e9ecef";
                vetorTemporarioCartas[0].el.querySelector('.tile-back').style.display = "flex";
                vetorTemporarioCartas[0].el.querySelector('.tile-front').style.display = "none";
                
                vetorTemporarioCartas[1].el.classList.remove('flipped');
                vetorTemporarioCartas[1].el.style.background = "#e9ecef";
                vetorTemporarioCartas[1].el.querySelector('.tile-back').style.display = "flex";
                vetorTemporarioCartas[1].el.querySelector('.tile-front').style.display = "none";
                vetorTemporarioCartas = [];
            }, 1000);
        }
    }
}

// ==========================================================================
// 6. CONTROLADOR DE CONQUISTAS
// ==========================================================================
function verificarEAtualizarTrofeus() {
    const medalhaSimulador = document.getElementById('medalha-simulador');
    if (medalhaSimulador) {
        const s1 = parseInt(document.getElementById('sim-cobertura').value) || 0;
        const s2 = parseInt(document.getElementById('sim-policultivo').value) || 0;
        const s3 = parseInt(document.getElementById('sim-insumos').value) || 0;
        const s4 = parseInt(document.getElementById('sim-agrofloresta').value) || 0;
        const s5 = parseInt(document.getElementById('sim-agua').value) || 0;
        const notaSim = Math.round((s1 * 0.25) + (s2 * 0.20) + (s3 * 0.25) + (s4 * 0.15) + (s5 * 0.15));

        if (notaSim >= 80) {
            medalhaSimulador.style.opacity = "1";
            medalhaSimulador.querySelector('.status-medalha').innerText = "🔓 Desbloqueada";
            medalhaSimulador.querySelector('.status-medalha').style.color = "var(--primary-green)";
        }
    }

    const medalhaQuiz = document.getElementById('medalha-quiz');
    if (medalhaQuiz) {
        if (scoreTotalGeral >= 25) {
            medalhaQuiz.style.opacity = "1";
            medalhaQuiz.querySelector('.status-medalha').innerText = "🔓 Desbloqueada";
            medalhaQuiz.querySelector('.status-medalha').style.color = "var(--primary-green)";
        }
    }

    const medalhaMemoria = document.getElementById('medalha-memoria');
    if (medalhaMemoria) {
        const totalCartasViradas = document.querySelectorAll('.memory-tile.matched').length;
        if (totalCartasViradas === cartasMemoriaOriginais.length && jogadasEfetuadas > 0 && jogadasEfetuadas <= 18) {
            medalhaMemoria.style.opacity = "1";
            medalhaMemoria.querySelector('.status-medalha').innerText = "🔓 Desbloqueada";
            medalhaMemoria.querySelector('.status-medalha').style.color = "var(--primary-green)";
        }
    }
}

// ==========================================================================
// 7. INICIALIZADOR AUTOMÁTICO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    irParaAba('painel');
    inicializarEstruturaQuiz('facil');
    
    // Deixa as medalhas visíveis com opacidade de bloqueio controlada via JS
    document.getElementById('medalha-simulador').style.opacity = "0.6";
    document.getElementById('medalha-quiz').style.opacity = "0.6";
    document.getElementById('medalha-memoria').style.opacity = "0.6";
});