# Agrinho-2026-RaizesdoAmanh-
Plataforma digital interativa desenvolvida para a Subcategoria 3 (Programação Front-End) do Concurso Agrinho 2026.
# 🌾 Raízes do Amanhã — Monitoramento de Impacto Agroecológico
> **Plataforma Interativa de Sustentabilidade Rústica e Pensamento Computacional**
> *Submetido ao Concurso Agrinho 2026 — Categoria: Programação*

---

## 📝 Sobre o Projeto
O **Raízes do Amanhã** é uma aplicação web interativa baseada no conceito de SPA (*Single Page Application*), desenvolvida para conectar estudantes, técnicos e produtores da **Escola do Campo** às diretrizes conservacionistas de manejo da terra e preservação ambiental.

A plataforma adota uma abordagem pedagógica gamificada e científica, utilizando dados e materiais de pesquisa vinculados ao **Acervo Digital da Universidade Federal do Paraná (UFPR)** para fomentar a transição agroecológica e a literacia computacional em laboratórios de informática rurais.

---

## 🛠️ Tecnologias Utilizadas
Para garantir máxima leveza, alto desempenho e compatibilidade com computadores escolares tradicionais, o ecossistema foi estruturado puramente com tecnologias nativas da Web (*Vanilla Stack*):

* **HTML5 Estrutural:** Tags semânticas para acessibilidade e hierarquia lógica de dados.
* **CSS3 Customizado:** Design responsivo adaptado à identidade visual do campo paranaense, utilizando variáveis globais (`:root`), transições suaves, grids flexíveis e animações elásticas para o engajamento gamificado.
* **Vanilla JavaScript (ES6+):** Motor lógico encarregado do controle de abas de exibição exclusivas, execução do simulador de diagnóstico, manipulação de modais informativos, automatização de conquistas e processamento do quiz.

---

## 🚀 Funcionalidades Principais

### 1. Sistema de Abas Exclusivas (SPA Architecture)
Navegação fluida controlada via JavaScript que oculta e exibe painéis funcionais (`.view-pane`) em tempo real através da manipulação de classes do DOM. Evita o recarregamento da página, otimizando o uso de memória em hardwares modestos.

### 2. Simulador de Diagnóstico Matemático Ponderado
Algoritmo estatístico que avalia o nível de sustentabilidade de uma propriedade rural com base em cinco indicadores práticos de manejo.
* **Fórmula Aplicada:** `Nota = (Cobertura * 0.25) + (Policultivo * 0.20) + (Insumos * 0.25) + (Agrofloresta * 0.15) + (Água * 0.15)`
* **Feedback Dinâmico:** Exibe alertas contextuais categorizados em níveis (Excelente, Transição ou Crítico) acompanhados por uma barra de progresso visual responsiva.

### 3. Quiz e Avaliação Continuada (30 Questões)
Banco de dados pedagógico contendo 30 questões de múltipla escolha estruturadas rigorosamente em 6 blocos temáticos:
1. Solo e Nutrição Orgânica
2. Policultivos e Biodiversidade
3. Defesa Biológica e Insumos Alternativos
4. Sistemas Agroflorestais (SAFs)
5. Recursos Hídricos e Manejo Ecológico
6. Socioecologia e Economia do Campo
* **Destaques Técnicos:** Travamento de cliques após resposta para evitar fraudes, indicação visual em tempo real (Verde para acertos / Vermelho para erros) e cálculo automático de métricas parciais.

### 4. Central de Mídias com Acervo Digital da UFPR
Um visualizador integrado embutido na interface que soluciona problemas de restrição e bloqueios de segurança por *iFrames* (*X-Frame-Options*).
* **Integração Científica:** Carrega o livro técnico oficial *"Conservando os Solos"* do **Acervo Digital da UFPR** usando a API estável do *Google Docs Viewer*.
* **Mídia Audiovisual:** Carrega videoaulas práticas em formato embutido sem redirecionar ou retirar o estudante da plataforma.

### 5. Jogo da Memória Computacional (Algoritmo Fisher-Yates)
Módulo gamificado para fixação ativa de termos computacionais e agrícolas que implementa o algoritmo de embaralhamento reverso **Fisher-Yates**.
* **Lógica Avançada:** Garante a aleatoriedade pura na distribuição das cartas em cada inicialização, gerencia contadores síncronos de movimentos (`moves`), cronometra o tempo de resolução em segundos e faz a verificação rigorosa de paridade em matriz bi-dimensional temporária.

### 6. Sistema Automatizado de Conquistas (Medalhas)
Lógica acionada dinamicamente via função centralizadora `verificarEAtualizarTrofeus()`. Avalia o desempenho do utilizador em tempo real nas três frentes práticas (Simulador, Quiz e Jogo) e destrava medalhas visuais na interface do utilizador mudando o estado visual de bloqueado (*grayscale*) para desbloqueado com efeitos CSS3.

---

## 📁 Estrutura do Projeto
```text
├── index.html       # Estrutura semântica e esqueleto das abas de visualização
├── style.css        # Variáveis de ambiente, design responsivo e animações das medalhas
└── script.js        # Motores lógicos, banco de dados do quiz e embaralhamento do jogo
