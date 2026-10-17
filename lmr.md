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

@media (max-width: 600px) {
  .lmr-info-strip { flex-direction: column; }
  .research-lines  { flex-direction: column; }
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

<p class="lmr-closing">Desde o nosso início, dedicamo-nos a oferecer um ambiente de pesquisa colaborativa. Nossos pesquisadores publicam regularmente em revistas científicas de renome e participam de projetos com instituições parceiras no Brasil e no exterior.</p>
