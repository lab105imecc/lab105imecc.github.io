---
layout: page
title: Galeria de Fotos
---

<style>
/* Grid de fotos */
.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.gallery-grid .gallery-item {
  flex: 1 1 calc(33.333% - 12px);
  min-width: 200px;
  overflow: hidden;
  border-radius: 6px;
}

.gallery-item img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.25s ease, transform 0.25s ease;
  display: block;
}

.gallery-item img:hover {
  opacity: 0.82;
  transform: scale(1.02);
}

/* Modal */
#gallery-modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.92);
  overflow: auto;
}

#gallery-modal .modal-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

#gallery-modal-img {
  max-width: 90%;
  max-height: 80vh;
  border-radius: 4px;
  animation: zoomIn 0.3s ease;
}

#gallery-modal-caption {
  color: #ddd;
  text-align: center;
  padding: 14px 0 0;
  font-size: 1rem;
  max-width: 700px;
}

#gallery-modal-close {
  position: fixed;
  top: 20px;
  right: 30px;
  color: #f1f1f1;
  font-size: 42px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s;
  line-height: 1;
  user-select: none;
}

#gallery-modal-close:hover {
  color: #aaa;
}

@keyframes zoomIn {
  from { transform: scale(0.85); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

@media (max-width: 600px) {
  .gallery-grid .gallery-item {
    flex: 1 1 100%;
  }
  .gallery-item img {
    height: 200px;
  }
}
</style>

----

### O Laboratório

<div class="gallery-grid">
  <div class="gallery-item">
    <img src="/assets/img/img_lab_foto1.png" alt="Lab 105 — vista geral" class="gallery-img">
  </div>
  <div class="gallery-item">
    <img src="/assets/img/img_lab_foto2.png" alt="Lab 105" class="gallery-img">
  </div>
</div>

<br>

----

### I Encontro do Laboratório de Regressão

<div class="gallery-grid">
  <div class="gallery-item">
    <img src="/assets/img/img_Ienc_foto1.png" alt="I Encontro do Lab de Regressão" class="gallery-img">
  </div>
  <div class="gallery-item">
    <img src="/assets/img/img_Ienc_foto2.png" alt="I Encontro do Lab de Regressão" class="gallery-img">
  </div>
  <div class="gallery-item">
    <img src="/assets/img/img_Ienc_foto3.png" alt="I Encontro do Lab de Regressão" class="gallery-img">
  </div>
</div>

<div class="gallery-grid">
  <div class="gallery-item">
    <img src="/assets/img/img_Ienc_foto4.png" alt="Mesa Redonda — I Encontro" class="gallery-img">
  </div>
  <div class="gallery-item">
    <img src="/assets/img/img_Ienc_foto5.png" alt="Mesa Redonda — I Encontro" class="gallery-img">
  </div>
  <div class="gallery-item">
    <img src="/assets/img/img_Ienc_foto6.png" alt="I Encontro do Lab de Regressão" class="gallery-img">
  </div>
</div>

<br>

----

### 25º Simpósio Nacional de Probabilidade e Estatística

<div class="gallery-grid">
  <div class="gallery-item">
    <img src="/assets/img/img_sinape_foto1.png" alt="SINAPE 2024" class="gallery-img">
  </div>
  <div class="gallery-item">
    <img src="/assets/img/img_sinape_foto2.png" alt="SINAPE 2024" class="gallery-img">
  </div>
  <div class="gallery-item">
    <img src="/assets/img/img_sinape_foto3.png" alt="SINAPE 2024" class="gallery-img">
  </div>
</div>

<!-- Modal único para toda a galeria -->
<div id="gallery-modal">
  <span id="gallery-modal-close">&times;</span>
  <div class="modal-inner">
    <img id="gallery-modal-img" src="" alt="">
    <div id="gallery-modal-caption"></div>
  </div>
</div>

<script>
(function () {
  var modal      = document.getElementById('gallery-modal');
  var modalImg   = document.getElementById('gallery-modal-img');
  var caption    = document.getElementById('gallery-modal-caption');
  var closeBtn   = document.getElementById('gallery-modal-close');

  // Abre o modal ao clicar em qualquer imagem da galeria
  document.querySelectorAll('.gallery-img').forEach(function (img) {
    img.addEventListener('click', function () {
      modal.style.display = 'block';
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      caption.textContent = this.alt;
      document.body.style.overflow = 'hidden';
    });
  });

  // Fecha ao clicar no ×
  closeBtn.addEventListener('click', closeModal);

  // Fecha ao clicar fora da imagem
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // Fecha com a tecla Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
})();
</script>
