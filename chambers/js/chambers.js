/* Ridley & Vaux — formal motion: fades and a rule that draws.
   Vanilla; with JS off nothing is hidden. */

(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var vh = innerHeight;
  var rv = [].slice.call(document.querySelectorAll('.rv'));
  // Pre-hide only what is below the fold, so nothing visible can flash.
  rv.forEach(function (el) {
    if (el.getBoundingClientRect().top > vh * 0.92) el.classList.add('pre');
  });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.remove('pre');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  rv.forEach(function (el) { io.observe(el); });

  var form = document.getElementById('instructform');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Demo build — no endpoint behind this.
      document.getElementById('state').textContent = 'Demo build — no endpoint wired.';
    });
  }
})();
