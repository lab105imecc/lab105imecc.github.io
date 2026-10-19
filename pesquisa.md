---
layout: page
title: Pesquisa
subtitle: Nossas Pesquisas e Conquistas
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
/* ---- Pesquisa page ---- */
.pub-callout {
  background: linear-gradient(135deg, #1a2a4a 0%, #2d4a7a 100%);
  border-radius: 12px;
  padding: 26px 30px;
  color: #e8edf5;
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 24px 0;
}
.pub-callout-icon { font-size: 2.8rem; color: #C9A84C; flex-shrink: 0; }
.pub-callout-text h3 { color: #fff; margin: 0 0 6px; font-size: 1.05rem; }
.pub-callout-text p  { margin: 0 0 14px; color: #b0c0d8; font-size: 0.9rem; line-height: 1.5; }
.pub-callout-btn {
  display: inline-flex; align-items: center; gap: 8px;
  background: #C9A84C; color: #1a2a4a !important;
  font-weight: 600; font-size: 0.87rem;
  padding: 8px 18px; border-radius: 6px;
  text-decoration: none !important;
  transition: background 0.2s ease, transform 0.15s ease;
}
.pub-callout-btn:hover { background: #e0c97a; transform: translateY(-1px); color: #1a2a4a !important; }

.project-card {
  background: #fff;
  border: 1px solid #dce4f0;
  border-left: 5px solid #C9A84C;
  border-radius: 10px;
  padding: 22px 26px;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(26,42,74,0.06);
}
.project-card h4 { color: #1a2a4a; font-size: 0.97rem; margin: 0 0 12px; line-height: 1.45; }
.project-meta { font-size: 0.84rem; color: #4a6080; margin-bottom: 10px; line-height: 1.7; }
.project-meta strong { color: #1a2a4a; }
.project-badge {
  display: inline-flex; align-items: center; gap: 5px;
  background: #eef2f8; color: #1a5fa8;
  font-size: 0.74rem; font-weight: 600;
  padding: 3px 10px; border-radius: 20px; margin-bottom: 12px;
}
.project-desc {
  font-size: 0.87rem; color: #5a6e8a; line-height: 1.65;
  margin: 12px 0 0; border-top: 1px solid #eef2f8; padding-top: 10px;
}

.awards-list { list-style: none; padding: 0; margin: 20px 0; }
.award-item {
  display: flex; align-items: flex-start; gap: 14px;
  padding: 13px 16px; background: #fff;
  border-radius: 10px; box-shadow: 0 2px 8px rgba(26,42,74,0.06);
  margin-bottom: 10px; border: 1px solid #eef2f8;
  transition: border-color 0.2s ease, transform 0.15s ease;
}
.award-item:hover { border-color: #C9A84C; transform: translateX(3px); }
.award-icon {
  width: 38px; height: 38px; border-radius: 50%;
  background: linear-gradient(135deg, #C9A84C, #e0c97a);
  display: flex; align-items: center; justify-content: center;
  color: #1a2a4a; font-size: 1rem; flex-shrink: 0;
}
.award-body { flex: 1; }
.award-author { font-size: 0.77rem; font-weight: 700; color: #1a2a4a; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 3px; }
.award-title  { font-size: 0.88rem; color: #2d3748; font-style: italic; margin: 0 0 4px; line-height: 1.4; }
.award-event  { font-size: 0.79rem; color: #718096; margin: 0; }

.thesis-type-label {
  display: flex; align-items: center; gap: 10px;
  font-size: 0.78rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.8px; color: #2d4a7a; margin: 22px 0 10px;
}
.thesis-type-label::after { content: ''; flex: 1; height: 1px; background: #dce4f0; }
.thesis-list { list-style: none; padding: 0; margin: 0; }
.thesis-item {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 9px 14px; border-radius: 8px; margin-bottom: 5px;
  background: #f8f9fc; border-left: 3px solid #dce4f0;
  font-size: 0.88rem; line-height: 1.5;
  transition: border-color 0.2s ease, background 0.2s ease;
}
.thesis-item:hover { background: #eef2f8; border-left-color: #C9A84C; }
.thesis-year {
  font-size: 0.71rem; font-weight: 700; color: #1a5fa8;
  background: #dce8f8; padding: 2px 7px; border-radius: 4px;
  white-space: nowrap; margin-top: 2px; flex-shrink: 0;
}
.thesis-author { font-weight: 600; color: #1a2a4a; }
.thesis-title-text { color: #4a6080; font-style: italic; }

/* ---- Filter buttons ---- */
.thesis-filters {
  display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0 4px;
}
.thesis-filter-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 7px 16px; border-radius: 20px;
  font-size: 0.82rem; font-weight: 600; cursor: pointer;
  border: 1.5px solid #dce4f0;
  background: #f8f9fc; color: #4a6080;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
  user-select: none;
}
.thesis-filter-btn:hover {
  background: #eef2f8; border-color: #b0c0d8; transform: translateY(-1px);
}
.thesis-filter-btn.active {
  background: #1a2a4a; color: #C9A84C; border-color: #1a2a4a;
}

@media (max-width: 600px) {
  .pub-callout { flex-direction: column; gap: 16px; }
  .pub-callout-icon { font-size: 2rem; }
}
</style>

No LMR, estamos sempre empenhados em desenvolver pesquisas de ponta e contribuir para o avanço do conhecimento em análise de dados e modelagem estatística.

---

## <i class="fa-solid fa-file-lines"></i> Publicações

<div class="pub-callout">
  <div class="pub-callout-icon"><i class="fa-brands fa-google-scholar"></i></div>
  <div class="pub-callout-text">
    <h3>Produção científica do laboratório</h3>
    <p>Publicamos regularmente em periódicos científicos de renome internacional, abrangendo tópicos de modelagem estatística, análise de dados e métodos computacionais. Confira a lista completa de artigos e trabalhos dos membros do LMR.</p>
    <a class="pub-callout-btn" href="https://scholar.google.com.br/citations?hl=en&user=lSCYxF0AAAAJ" target="_blank" rel="noopener">
      <i class="fa-solid fa-arrow-up-right-from-square"></i> Ver publicações no Google Scholar
    </a>
  </div>
</div>

---

## <i class="fa-solid fa-diagram-project"></i> Projetos

<div class="project-card">
  <span class="project-badge"><i class="fa-solid fa-flask"></i>&nbsp; FAPESP — Auxílio financeiro</span>
  <h4>Modelos de regressão paramétrico e semi-paramétrico sob a classe de distribuições misturas de escala skew-normal</h4>
  <div class="project-meta">
    <strong>Coordenador:</strong> Filidor Vilca Labra<br>
    <strong>Integrantes:</strong> Larissa Avila Matos · Caio Lucidius Naberezny Azevedo
  </div>
  <p class="project-desc">Este projeto estuda modelos de regressão paramétrica e semi-paramétrica na presença de efeitos aleatórios, utilizando a família de distribuições escala mistura skew-normal (Branco e Dey, 2001), eficazes em estimação robusta diante de observações extremas. Os modelos considerados incluem o modelo linear misto, o modelo com erro nas variáveis e o modelo de regressão da Teoria de Resposta ao Item (TRI), com estudos de estimação e diagnóstico sob perspectivas frequentista e Bayesiana.</p>
</div>

---

## <i class="fa-solid fa-trophy"></i> Prêmios

<ul class="awards-list">

  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-medal"></i></div>
    <div class="award-body">
      <p class="award-author">Áurea Fonseca Lopes Galindo</p>
      <p class="award-title">Tese de Doutorado</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; 1º lugar — Concurso de Melhor Tese de Doutorado do 26º SINAPE</p>
    </div>
  </li>

  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-award"></i></div>
    <div class="award-body">
      <p class="award-author">Katherine Andreina Loor Valeriano</p>
      <p class="award-title">Tese de Doutorado</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; 2º lugar — Concurso de Melhor Tese de Doutorado do 26º SINAPE</p>
    </div>
  </li>
  
  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-medal"></i></div>
    <div class="award-body">
      <p class="award-author">João Victor Bastos de Freitas</p>
      <p class="award-title">Tese de Doutorado</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; 1º lugar — Concurso de Melhor Tese de Doutorado da 69ª RBras e do 21º SEAGRO</p>
    </div>
  </li>
  
  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-award"></i></div>
    <div class="award-body">
      <p class="award-author">Katherine Andreina Loor Valeriano</p>
      <p class="award-title">Tese de Doutorado</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; 3º lugar — Concurso de Melhor Tese de Doutorado da 69ª RBras e do 21º SEAGRO</p>
    </div>
  </li>

  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-medal"></i></div>
    <div class="award-body">
      <p class="award-author">Larissa Avila Matos</p>
      <p class="award-title"> Prêmio Para Mulheres na Ciência</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; Ganhadora do Prêmio Para Mulheres na Ciência — L’Oréal, Associação Brasileira de Ciências e Unesco</p>
    </div>
  </li>

  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-award"></i></div>
    <div class="award-body">
      <p class="award-author">Matheus Oliveira de Castro</p>
      <p class="award-title">Dissertação de Mestrado</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; 2º lugar — Concurso de Melhor Dissertação de Mestrado do 25º SINAPE</p>
    </div>
  </li>

  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-award"></i></div>
    <div class="award-body">
      <p class="award-author">Áurea Fonseca Lopes Galindo</p>
      <p class="award-title">Dissertação de Mestrado</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; 2º lugar — Concurso de Melhor Dissertação de Mestrado do 24º SINAPE</p>
    </div>
  </li>
  
  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-medal"></i></div>
    <div class="award-body">
      <p class="award-author">Fernanda Lang Schumacher</p>
      <p class="award-title">Canonical fundamental skew-t linear mixed models</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; Vencedora — Student competition in honour of Fred Smith &amp; Chris Skinner</p>
    </div>
  </li>  
  
  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-award"></i></div>
    <div class="award-body">
      <p class="award-author">Katherine Andreina Loor Valeriano</p>
      <p class="award-title">Dissertação de Mestrado</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; Menção honrosa — Concurso de Dissertação de Mestrado do SINAPE</p>
    </div>
  </li>
  
  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-medal"></i></div>
    <div class="award-body">
      <p class="award-author">José Alejandro Ordoñez</p>
      <p class="award-title">Objective Bayesian analysis for the spatial Student-t regression model</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; Melhor pôster — XV Brazilian Meeting of Bayesian Statistics</p>
    </div>
  </li>
  
  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-medal"></i></div>
    <div class="award-body">
      <p class="award-author">Christian E. Galarza</p>
      <p class="award-title">Truncated moments of selection elliptical distributions with applications in robust modelling of HIV longitudinal censored data</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; ISI-IBS Young Ambassadors — International Biometrics Conference (IBC 2020)</p>
    </div>
  </li>
  
  <li class="award-item">
    <div class="award-icon"><i class="fa-solid fa-medal"></i></div>
    <div class="award-body">
      <p class="award-author">Christian E. Galarza</p>
      <p class="award-title">On moments of folded and truncated multivariate extended skew-normal distributions</p>
      <p class="award-event"><i class="fa-solid fa-location-dot"></i>&nbsp; Best LACSC 2019 Paper Award — 4th Latin American Conference for Statistical Computing</p>
    </div>
  </li>

</ul>

---

## <i class="fa-solid fa-book"></i> Dissertações e Teses

<div class="thesis-filters">
  <button class="thesis-filter-btn active" onclick="filterThesis('all', this)"><i class="fa-solid fa-layer-group"></i> Todos</button>
  <button class="thesis-filter-btn" onclick="filterThesis('doutorado', this)"><i class="fa-solid fa-graduation-cap"></i> Doutorado</button>
  <button class="thesis-filter-btn" onclick="filterThesis('mestrado', this)"><i class="fa-solid fa-scroll"></i> Mestrado</button>
  <button class="thesis-filter-btn" onclick="filterThesis('ic', this)"><i class="fa-solid fa-flask-vial"></i> Iniciação Científica</button>
</div>

<div id="thesis-all">

<div data-thesis-type="doutorado">
<p class="thesis-type-label"><i class="fa-solid fa-graduation-cap"></i>&nbsp; Doutorado</p>
<ul class="thesis-list">
  <li class="thesis-item"><span class="thesis-year">2026</span><span><span class="thesis-author">Carina Brunehilde Pinto da Silva.</span> <span class="thesis-title-text">Advances in Bayesian parametric and semi-parametric modeling of complex longitudinal data.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">Áurea Fonseca Lopes Galindo.</span> <span class="thesis-title-text">Finite mixture-based quantile regression models for bounded responses.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">João Victor Bastos de Freitas.</span> <span class="thesis-title-text">Multivariate modeling and linear and partially linear mixed models using scale mixtures of centered skew-normal distributions.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">Robinson Ortega Meza.</span> <span class="thesis-title-text">Contributions to Test Fraud Modeling and Detection.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2024</span><span><span class="thesis-author">Amanda Merian Freitas Mendes.</span> <span class="thesis-title-text">Modelos de regressão quantílica paramétricos Bayesianos generalizados.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2024</span><span><span class="thesis-author">Katherine Andreina Loor Valeriano.</span> <span class="thesis-title-text">Inferência para modelos com respostas censurados usando a distribuição Student-t e skew-t.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2021</span><span><span class="thesis-author">Fernanda Lang Schumacher.</span> <span class="thesis-title-text">Robust linear mixed models for longitudinal data using skewed and heavy-tailed distributions.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2021</span><span><span class="thesis-author">Jose Alejandro Ordoñez Cuastumal.</span> <span class="thesis-title-text">On Default Priors for Regression Analysis.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2020</span><span><span class="thesis-author">Christian Eduardo Galarza Morales.</span> <span class="thesis-title-text">On Moments of doubly truncated multivariate distributions.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2020</span><span><span class="thesis-author">Thalita do Bem Mattos.</span> <span class="thesis-title-text">Modelos paramétricos e semiparamétricos de efeitos mistos para dados longitudinais censurados.</span> UNICAMP.</span></li>
</ul>
</div>

<div data-thesis-type="mestrado">
<p class="thesis-type-label"><i class="fa-solid fa-scroll"></i>&nbsp; Mestrado</p>
<ul class="thesis-list">
  <li class="thesis-item"><span class="thesis-year">2026</span><span><span class="thesis-author">Júlio Mendes Pazelli.</span> <span class="thesis-title-text">Relevance Vector Machine sob diferentes prioris simétricas.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2026</span><span><span class="thesis-author">Moisés Augusto Farias da Silva.</span> <span class="thesis-title-text">Inferência causal em dados funcionais via transformadas de ondaletas: do pré-processamento à estimação em tempo real.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">Carlos Henrique Trigo Nasser Felix.</span> <span class="thesis-title-text">Uma Nova Abordagem para Construção de Intervalos de Confiança Aleatorizados.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">Fidel Aniano Causil Barrios.</span> <span class="thesis-title-text">Comparação de desempenho de estimadores de coeficientes de ondaletas em dados com baixa razão sinal-ruído via simulações Monte Carlo.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">Juliana Marchesi Reina.</span> <span class="thesis-title-text">Estimador bayesiano de coeficientes de ondaletas sob priori cosseno elevado.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2024</span><span><span class="thesis-author">Letícia Bettine Infante.</span> <span class="thesis-title-text">An extension of the Inverse Gaussian regression model.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2024</span><span><span class="thesis-author">Vitor Macedo Rocha.</span> <span class="thesis-title-text">Influence diagnostics in parametric mixed-effects models for longitudinal data using skew-normal distribution.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2023</span><span><span class="thesis-author">Keyliane Travassos Almeida da Silva.</span> <span class="thesis-title-text">Análise de diagnóstico em modelos lineares mistos na mistura de escala skew-normal.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2023</span><span><span class="thesis-author">Matheus Oliveira de Castro.</span> <span class="thesis-title-text">Robust Quantile Regression Models for Limited Responses Using Finite Mixtures.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2022</span><span><span class="thesis-author">Andreson Almeida Azevedo.</span> <span class="thesis-title-text">A distribuição Birnbaum-Saunders baseada na distribuição Laplace Assimétrica.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2021</span><span><span class="thesis-author">Áurea Fonseca Lopes Galindo.</span> <span class="thesis-title-text">Modelos semi-paramétricos para dados independentes e longitudinais com resposta limitada.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2021</span><span><span class="thesis-author">João Victor Bastos de Freitas.</span> <span class="thesis-title-text">Modelos semi-paramétricos para dados independentes e longitudinais baseados em Misturas de Escala Normal Assimétrica Centralizada.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2020</span><span><span class="thesis-author">Amanda Merian Freitas Mendes.</span> <span class="thesis-title-text">Generalized mixed Poisson models for overdispersed count data.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2020</span><span><span class="thesis-author">Hugo Calegari.</span> <span class="thesis-title-text">Estimação na distribuição hiperbólica skew-normal: algoritmo EM.</span> UNICAMP.</span></li>
</ul>
</div>

<div data-thesis-type="ic">
<p class="thesis-type-label"><i class="fa-solid fa-flask-vial"></i>&nbsp; Iniciação Científica</p>
<ul class="thesis-list">
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">Sara dos Anjos de Souza Dias.</span> <span class="thesis-title-text">Convergência do Algoritmo EM para Estimação em Modelos Lineares Mistos: Enfrentando o Desafio das Distribuições Assimétricas e com Caudas Pesadas.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">Leila Akemi de Paula Kawanishi.</span> <span class="thesis-title-text">Visualizações Interativas para Estatística com R Shiny.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2025</span><span><span class="thesis-author">Bernardo Abib de Almeida.</span> <span class="thesis-title-text">Avaliação do Impacto da Priori na Inferência para Árvores de Contexto Bayesianas.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2024</span><span><span class="thesis-author">Rodrigo de Lima Dantas.</span> <span class="thesis-title-text">Modelos de Regressão para Dados de Contagem.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2024</span><span><span class="thesis-author">Rafaela Da Silva Barril.</span> <span class="thesis-title-text">Modelos de regressão quantílica baseados na distribuição q-exponencial.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2024</span><span><span class="thesis-author">Rafaela da Silva Barril.</span> <span class="thesis-title-text">Árvores de Classificação e Aplicações.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2023</span><span><span class="thesis-author">Rafaela Da Silva Barril.</span> <span class="thesis-title-text">Desenvolvimento de modelos probabilísticos univariados e flexíveis.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2023</span><span><span class="thesis-author">Gabriela Martins dos Santos.</span> <span class="thesis-title-text">Análise estatística de agrupamentos e de outliers com ênfase na detecção de fraudes em testes.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2021</span><span><span class="thesis-author">Gabrielli Fregate Bedana.</span> <span class="thesis-title-text">Uma breve aproximação entre Análise de Sobrevivência e Teoria da Resposta ao Item.</span> UNICAMP.</span></li>
  <li class="thesis-item"><span class="thesis-year">2020</span><span><span class="thesis-author">Nathan Brusamarello De Souto.</span> <span class="thesis-title-text">Inferência para dados espaço-temporais com respostas censuradas e faltantes: Uma aplicação em dados meteorológicos.</span> UNICAMP.</span></li>
</ul>
</div>

</div>

<script>
function filterThesis(type, btn) {
  document.querySelectorAll('.thesis-filter-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#thesis-all [data-thesis-type]').forEach(function(section) {
    section.style.display = (type === 'all' || section.getAttribute('data-thesis-type') === type) ? '' : 'none';
  });
}
</script>
