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
        licoes: ["Lições do Campo - Quiz Dinâmico", "Fixação teórica através de blocos de múltipla escolha em três níveis."],
        materiais: ["Materiais de Apoio Acadêmico", "Leitura de acervos técnicos e visualização de mídias didáticas rurais."],
        desafios: ["Desafios & Jogos Interativos", "Consolidação prática de conceitos através do Jogo da Memória Ecológico."],
        referencias: ["Referências Científicas", "Fontes institucionais e bibliográficas que fundamentam a nossa plataforma digital."]
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
        corpo: "A manutenção do solo coberto, seja por palhada residual (plantio direto) ou por plantas de cobertura, reduz drasticamente o impacto direto das gotas de chuva, mitigando a erosão laminar. Além disso, funciona como um isolante térmico que conserva a umidade.",
        tag: "Solo e Água"
    },
    "policultivo": {
        titulo: "Policultivos e Rotação de Culturas",
        sub: "Quebra de ciclos de pragas e sinergia de nutrientes",
        corpo: "Cultivar múltiplas espécies na mesma área diversifica o sistema radicular, melhorando a estrutura física do solo. A inclusão de leguminosas fixa o nitrogênio atmosférico biologicamente.",
        tag: "Biodiversidade"
    },
    "insumos": {
        titulo: "Redução e Substituição de Insumos Químicos",
        sub: "Transição para bioinsumos e caldas protetoras naturais",
        corpo: "Esta diretriz foca na diminuição gradual de fertilizantes sintéticos de alta solubilidade e pesticidas químicos, substituindo-os por compostagem orgânica e biofertilizantes líquidos.",
        tag: "Defesa Biológica"
    },
    "agrofloresta": {
        titulo: "Sistemas Agroflorestais (SAFs)",
        sub: "Integração vertical e mimetismo estrutural da floresta",
        corpo: "Os SAFs consorciam árvores perenes com culturas anuais e/ou criação de animais. Esta organização otimiza a captação de energia solar em diferentes níveis estruturais.",
        tag: "Sistemas Complexos"
    },
    "agua": {
        titulo: "Manejo Ecológico da Água",
        sub: "Captação, infiltração localizada e conservação de microbacias",
        corpo: "Estratégia focada em desacelerar o escoamento superficial da água através de curvas de nível, cordões de vegetação e bacias de retenção profunda.",
        tag: "Recursos Hídricos"
    },
    "comunidades": {
        titulo: "Socioecologia e Circuitos Curtos",
        sub: "Valorização do saber local e mercados de proximidade",
        corpo: "A agroecologia integra o bem-estar humano. Fortalece cooperativas familiares, apoia feiras ecológicas locais e reduz a pegada de carbono do transporte.",
        tag: "Socioeconomia"
    }
};

function dispararModalInjetado(chaveDiretriz) {
    const alvo = bdsDiretrizesAgroecologicas[chaveDiretriz];
    if (!alvo) return;

    const templateHtml = `
        <span class="tech-tag" style="margin-bottom:12px; display:inline-block; background:var(--primary-green); color:#fff; padding:4px 10px; border-radius:4px; font-size:0.75rem; font-weight:700;">${alvo.tag}</span>
        <h2 style="color:var(--primary-green); font-weight:800; margin-bottom:6px;">${alvo.titulo}</h2>
        <h4 style="color:var(--text-light); font-weight:600; margin-bottom:20px; font-size:0.95rem;">${alvo.sub}</h4>
        <div style="line-height:1.6; color:var(--text-dark); font-size:0.92rem; text-align:justify; background:#f8faf9; padding:20px; border-radius:10px; border:1px solid var(--border-gray);">
            ${alvo.corpo}
        </div>
        <div style="margin-top:25px; text-align:right;">
            <button class="btn-primary" style="padding:10px 20px;" onclick="ocultarModal()">Entendido, Fechar</button>
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
// 3. MOTOR DO SIMULADOR DE DIAGNÓSTICO MATEMÁTICO
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
        blocoFeedback.innerHTML = "<strong>🏆 Excelente Nível:</strong> A propriedade adota práticas integradas de alto impacto ecológico.";
    } else if (notaFinalPonderada >= 50) {
        blocoFeedback.style.background = "#fef7e0";
        blocoFeedback.style.color = "#b06000";
        blocoFeedback.innerHTML = "<strong>⚠️ Nível de Transição:</strong> Existem boas iniciativas locais, mas pontos de vulnerabilidade persistem.";
    } else {
        blocoFeedback.style.background = "#fce8e6";
        blocoFeedback.style.color = "#c5221f";
        blocoFeedback.innerHTML = "<strong>🚨 Alerta Crítico:</strong> Manejo convencional agressivo detectado. Alta suscetibilidade à exaustão e perda de umidade.";
    }
}

// ==========================================================================
// 4. MOTOR DO QUIZ EM TRÊS NÍVEIS PROGRESSIVOS (30 QUESTÕES)
// ==========================================================================
const bancoQuestoesQuiz = [
    // FÁCIL
    { nivel: "facil", q: "Qual o principal objetivo ecológico da cobertura permanente do solo?", o: ["Eliminar microrganismos", "Impedir a infiltração de ar", "Reduzir o impacto mecânico da chuva e reter umidade", "Facilitar a aração mecânica profunda"], a: 2 },
    { nivel: "facil", q: "Como as leguminosas atuam na fertility do solo?", o: ["Absorvem nitrogênio excessivo", "Fixam o nitrogênio atmosférico biologicamente em simbiose com bactérias", "Compactam solos arenosos", "Impedem o crescimento de espécies"], a: 1 },
    { nivel: "facil", q: "O que caracteriza a 'erosão laminar' em solos sem proteção?", o: ["Abertura de crateras profundas", "A remoção uniforme da camada superficial mais rica em matéria orgânica", "A quebra de rochas profundas", "O aumento da fauna de minhocas"], a: 1 },
    { nivel: "facil", q: "A diversificação biológica melhora a estabilidade económica do produtor rural porque:", o: ["Reduz as opções de venda", "Evita perdas totais se uma cultura falhar ou sofrer desvalorização", "Exige maquinários caros", "Duplica os subsídios automaticamente"], a: 1 },
    { nivel: "facil", q: "As matas ciliares são fundamentais para os ecossistemas agrícolas porque:", o: ["Evitam o assoreamento de rios e filtram resíduos", "Serveme unicamente como divisórias", "Fornecem lenha de corte diário", "Absorvem água dos rios secando áreas"], a: 0 },
    { nivel: "facil", q: "Qual a função da bioestrutura (agregados do solo) na agroecologia?", o: ["Impedir que as raízes respirem", "Garantir porosidade equilibrada para circulação de água e ar", "Tornar o solo impermeável", "Facilitar a lixiviação de minerais"], a: 1 },
    { nivel: "facil", q: "O conceito de 'plantas companheiras' baseia-se em quê?", o: ["Espécies que competem por espaço", "Associações vegetais onde uma espécie beneficia a outra", "Plantas que devem ser colhidas juntas", "Espécies ornamentais sem valor"], a: 1 },
    { nivel: "facil", q: "Em agroecologia, os insetos vulgarmente chamados 'pragas' são vistos como:", o: ["Inimigos que devem ser extintos", "Sinais indicadores de desequilíbrio ecológico no sistema", "Animais impossíveis de controlar", "Seres sem relevância trófica"], a: 1 },
    { nivel: "facil", q: "O uso de adubos verdes (como a mucuna ou guandu) serve para:", o: ["Colorir o campo para ecoturismo", "Produzir biomassa, cobrir o solo e fixar/reciclar nutrientes", "Substituir a cultura principal", "Eliminar a necessidade de rotação"], a: 1 },
    { nivel: "facil", q: "O que significa o termo 'período de carência' na aplicação de defensivos?", o: ["O tempo de germinação na sementeira", "O intervalo de segurança entre a aplicação e a colheita segura", "A falta de chuva ideal na adubação", "O tempo de repouso do trator"], a: 1 },

    // MÉDIO
    { nivel: "medio", q: "A compostagem orgânica substitui fertilizantes sintéticos de alta solubilidade porque:", o: ["Libera nutrientes de forma lenta e melhora a estrutura do solo", "Acidifica o solo matando insetos", "Contem hormônios de crescimento", "Evita a necessidade de irrigar"], a: 0 },
    { nivel: "medio", q: "Por que os monocultivos extensivos são biologicamente mais vulneráveis a pragas?", o: ["Atraem mais polinizadores", "Falta luz solar entre as linhas", "Oferecem alimento abundante e homogêneo para uma única espécie", "Esgotam apenas a água superficial"], a: 2 },
    { nivel: "medio", q: "O controle biológico conservacionista consiste em:", o: ["Introduzir espécies exóticas de laboratório", "Preservar e atrair predadores naturais já existentes no local", "Aplicar defensivos químicos nas bordas", "Isolar o campo com telas plásticas"], a: 1 },
    { nivel: "medio", q: "A calda bordalesa é um insumo alternativo composto essencialmente por:", o: ["Cloro concentrado e detergente", "Sulfato de cobre, cal hidratada e água", "Petróleo bruto refinado", "Extrato concentrado de soja"], a: 1 },
    { nivel: "medio", q: "Como funcionam os bioinsumos baseados em fungos entomopatogênicos (Beauveria bassiana)?", o: ["Queimam as folhas externamente", "Infectam e controlam insetos-alvo de forma específica", "Nutrem a planta pelos estômatos", "Repelem pássaros pelo odor"], a: 1 },