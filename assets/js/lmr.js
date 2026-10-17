/* LMR — Global JS
   Back-to-top | Scroll fade-in | Animated counters
   ================================================= */
(function () {
  'use strict';

  /* ---- Back to top -------------------------------------------------- */
  var btn = document.createElement('button');
  btn.id = 'lmr-back-top';
  btn.innerHTML = '&#8679;';          /* ↑ unicode — sem dependência de FA */
  btn.setAttribute('aria-label', 'Voltar ao topo');
  Object.assign(btn.style, {
    position:     'fixed',
    bottom:       '30px',
    right:        '28px',
    width:        '44px',
    height:       '44px',
    background:   '#1a2a4a',
    color:        '#C9A84C',
    border:       'none',
    borderRadius: '50%',
    cursor:       'pointer',
    fontSize:     '1.35rem',
    lineHeight:   '1',
    fontWeight:   '700',
    boxShadow:    '0 3px 14px rgba(0,0,0,0.25)',
    zIndex:       '9999',
    display:      'none',
    alignItems:   'center',
    justifyContent: 'center',
    transition:   'background 0.2s ease, transform 0.15s ease',
  });
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  btn.addEventListener('mouseenter', function () {
    btn.style.background = '#C9A84C';
    btn.style.color      = '#1a2a4a';
    btn.style.transform  = 'scale(1.1)';
  });
  btn.addEventListener('mouseleave', function () {
    btn.style.background = '#1a2a4a';
    btn.style.color      = '#C9A84C';
    btn.style.transform  = 'scale(1)';
  });

  /* ---- Scroll fade-in ----------------------------------------------- */
  function activateFade(el) { el.classList.add('lmr-visible'); }

  if ('IntersectionObserver' in window) {
    var fadeObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { activateFade(e.target); fadeObs.unobserve(e.target); }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.lmr-fade').forEach(function (el) {
      fadeObs.observe(el);
    });
  } else {
    document.querySelectorAll('.lmr-fade').forEach(activateFade);
  }

  /* ---- Animated counters -------------------------------------------- */
  var counters = document.querySelectorAll('[data-counter]');
  if (counters.length === 0) return;

  function animateCounter(el) {
    var target  = parseInt(el.getAttribute('data-counter'), 10);
    var suffix  = el.getAttribute('data-suffix') || '';
    var prefix  = el.getAttribute('data-prefix') || '';
    var duration = 1400;
    var start   = null;

    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var ease     = 1 - Math.pow(1 - progress, 3);   /* ease-out cubic */
      el.textContent = prefix + Math.floor(ease * target) + (progress < 1 ? '' : suffix);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var cntObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          animateCounter(e.target);
          cntObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cntObs.observe(el); });
  } else {
    counters.forEach(function (el) {
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      el.textContent = prefix + el.getAttribute('data-counter') + suffix;
    });
  }

})();
