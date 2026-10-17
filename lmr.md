---
layout: page
title: LMR
subtitle: O Laboratório
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>
/* ---- lmr.md ---- */
.lmr-intro { font-size: 1.02rem; line-height: 1.8; color: #4a6080; margin-bottom: 0; }

.lmr-info-strip {
  display: flex; flex-wrap: wrap; gap: 12px; margin: 26px 0;
}
.lmr-info-item {
  display: flex; align-items: center; gap: 10px;
  background: #eef2f8; border-radius: 8px; padding: 10px 16px;
  font-size: 0.9rem; color: #2d3748; flex: 1 1 180px;
}
.lmr-info-item i { color: #C9A84C; font-size: 1.05rem; width: 18px; text-align: center; flex-shrink: 0; }

.research-lines { display: flex; flex-wrap: wrap; gap: 18px; margin: 24px 0; }
.research-line-card {
  flex: 1 1 240px;
  background: #fff; border-radius: 12px;
  border-top: 4px solid #C9A84C;
  box-shadow: 0 2px 12px rgba(26,42,74,0.08);
  padding: 22px 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.research-line-card:hover { transform: translateY(-4px); box-shadow: 0 6px 22px rgba(26,42,74,0.14); }
.research-line-icon {
  width: 44px; height: 44px; border-radius: 10px;
  background: linear-gradient(135deg, #1a2a4a 0%, #2d4a7a 100%);
  display: flex; align-items: center; justify-content: center;
  color: #C9A84C; font-size: 1.2rem; margin-bottom: 14px;
}
.research-line-card h3 { font-size: 0.97rem; color: #1a2a4a; margin: 0 0 8px; }
.research-line-card p  { font-size: 0.86rem; color: #718096; margin: 0; line-height: 1.6; }
.rl-sublist { list-style: none; padding: 0; margin: 8px 0 0; }
.rl-sublist li {
  font-size: 0.83rem; color: #5a6e8a;
  padding: 3px 0 3px 12px; position: relative;
}
.rl-sublist li::before { content: "›"; position: absolute; left: 0; color: #C9A84C; font-weight: 700; }

.lmr-closing { font-size: 0.95rem; color: #4a6080; line-height: 1.8; margin-top: 8px; }

/* ---- Timeline ---- */
.timeline-wrap { position: relative; padding: 10px 0 4px; margin: 24px 0; }
.timeline-line {
  position: absolute; left: 22px; top: 0; bottom: 0;
  width: 3px; background: linear-gradient(to bottom, #C9A84C, #1a2a4a);
  border-radius: 2px;
}
.timeline-card {
  position: relative; margin-left: 56px; margin-bottom: 20px;
  background: #fff; border-radius: 10px;
  border: 1px solid #dce4f0; border-left: 4px solid #C9A84C;
  padding: 14px 20px;
  box-shadow: 0 2px 10px rgba(26,42,74,0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.timeline-card:hover { transform: translateX(4px); box-shadow: 0 4px 16px rgba(26,42,74,0.12); }
.timeline-dot {
  position: absolute; left: -42px; top: 14px;
  width: 18px; height: 18px; border-radius: 50%;
  background: #C9A84C; border: 3px solid #f8f9fc;
  box-shadow: 0 0 0 2px #C9A84C;
}
.timeline-year {
  font-size: 0.72rem; font-weight: 700; color: #1a5fa8;
  background: #dce8f8; padding: 2px 8px; border-radius: 4px;
  display: inline-block; margin-bottom: 6px;
}
.timeline-card h4 { font-size: 0.93rem; color: #1a2a4a; margin: 0 0 4px; }
.timeline-card p  { font-size: 0.84rem; color: #718096; margin: 0; line-height: 1.55; }

@media (max-width: 600px) {
  .lmr-info-strip { flex-direction: column; }
  .research-lines  { flex-direction: column; }
  .timeline-line { left: 14px; }
  .timeline-card { margin-left: 38px; }
  .timeline-dot  { left: -30px; width: 14px; height: 14px; top: 16px; }
}
</style>

<p class="lmr-intro">Fundado em 2018, o Laboratório de Regressão surgiu com o objetivo de ser um centro de pesquisa e desenvolvimento de técnicas avançadas de análise de dados e modelagem estatística. Localizado no IMECC/UNICAMP, temos trabalhado para promover o avanço do conhecimento científico e proporcionar soluções inovadoras para problemas complexos em diversas áreas.</p>

<div class="lmr-info-strip">
  <div class="lmr-info-item">
    <i class="fa-solid fa-calendar-days"></i>
    <span>Fundado em <strong>2018</strong></span>
  </div>
  <div class="lmr-info-item">
    <i class="fa-solid fa-location-dot"></i>
    <span>Sala 105 (L105), Anexo II — <strong>IMECC/UNICAMP</strong></span>
  </div>
  <div class="lmr-info-item">
    <i class="fa-solid fa-earth-americas"></i>
    <span>Colaborações <strong>nacionais e internacionais</strong></span>
  </div>
</div>

---

## <i class="fa-solid fa-chart-line"></i> Linhas de Pesquisa

<div class="research-lines">

  <div class="research-line-card">
    <div class="research-line-icon"><i class="fa-solid fa-square-root-variable"></i></div>
    <h3>Modelos de Regressão</h3>
    <p>Desenvolvimento e aplicação de modelos para análise e interpretação de dados complexos em diferentes contextos.</p>
    <ul class="rl-sublist">
      <li>Modelos Lineares e Lineares Mistos</li>
      <li>Modelos Lineares Generalizados (Mistos)</li>
      <li>Modelos Não-lineares e Não-lineares Mistos</li>
    </ul>
  </div>

  <div class="research-line-card">
    <div class="research-line-icon"><i class="fa-solid fa-brain"></i></div>
    <h3>Teoria da Resposta ao Item</h3>
    <p>Desenvolvimento e aplicação de modelos para análise de respostas em avaliações educacionais e psicológicas, com foco em estimação robusta de traços latentes.</p>
  </div>

  <div class="research-line-card">
    <div class="research-line-icon"><i class="fa-solid fa-microchip"></i></div>
    <h3>Métodos Computacionais</h3>
    <p>Criação e implementação de algoritmos eficientes para análise de dados complexos, integrando abordagens frequentistas e Bayesianas.</p>
  </div>

</div>

---

---

## <i class="fa-solid fa-clock-rotate-left"></i> Nossa Trajetória

<div class="timeline-wrap">
  <div class="timeline-line"></div>

  <div class="timeline-card lmr-fade">
    <div class="timeline-dot"></div>
    <span class="timeline-year">2018</span>
    <h4>Fundação do LMR</h4>
    <p>O laboratório é criado no IMECC/UNICAMP, com foco em modelagem estatística, Teoria da Resposta ao Item e métodos computacionais.</p>
  </div>

  <div class="timeline-card lmr-fade">
    <div class="timeline-dot"></div>
    <span class="timeline-year">2019</span>
    <h4>Primeiros prêmios internacionais</h4>
    <p>Christian Galarza recebe o Best Paper Award na 4th Latin American Conference for Statistical Computing (LACSC 2019).</p>
  </div>

  <div class="timeline-card lmr-fade">
    <div class="timeline-dot"></div>
    <span class="timeline-year">2020</span>
    <h4>Expansão e reconhecimento</h4>
    <p>Primeiras teses de doutorado defendidas no laboratório. Galarza é eleito ISI-IBS Young Ambassador na IBC 2020.</p>
  </div>

  <div class="timeline-card lmr-fade">
    <div class="timeline-dot"></div>
    <span class="timeline-year">2021</span>
    <h4>Robustez em modelos mistos</h4>
    <p>Novas teses de doutorado com foco em modelos mistos robustos para dados longitudinais e priores objetivos em análise de regressão.</p>
  </div>

  <div class="timeline-card lmr-fade">
    <div class="timeline-dot"></div>
    <span class="timeline-year">2022–2023</span>
    <h4>Crescimento em colaborações</h4>
    <p>Expansão das parcerias nacionais e internacionais. Fernanda Schumacher vence competição estudantil em homenagem a Fred Smith &amp; Chris Skinner.</p>
  </div>

  <div class="timeline-card lmr-fade">
    <div class="timeline-dot"></div>
    <span class="timeline-year">2024</span>
    <h4>Novas fronteiras em quantílica Bayesiana</h4>
    <p>Defesas de doutorado em regressão quantílica paramétrica Bayesiana e modelos com respostas censuradas. Menções honrosas e prêmios do SINAPE.</p>
  </div>

</div>

---

<p class="lmr-closing">Desde o nosso início, dedicamo-nos a oferecer um ambiente de pesquisa colaborativa. Nossos pesquisadores publicam regularmente em revistas científicas de renome e participam de projetos com instituições parceiras no Brasil e no exterior.</p>
