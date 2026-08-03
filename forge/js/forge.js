/* Blacksmith Row — quick, hard motion.
   Reveals and a bar wiped up off each plate. Vanilla; with JS off
   nothing is covered and nothing is hidden. */

(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !('IntersectionObserver' in window)) return;

  var vh = innerHeight;

  function observe(sel, margin, stagger) {
    var items = [].slice.call(document.querySelectorAll(sel));
    // Pre-hide only below the fold — nothing on screen may flash.
    items.forEach(function (el) {
      if (el.getBoundingClientRect().top > vh * 0.92) el.classList.add('pre');
    });
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var i = items.indexOf(e.target);
        setTimeout(function () { e.target.classList.remove('pre'); }, stagger ? (i % 3) * 70 : 0);
        io.unobserve(e.target);
      });
    }, { rootMargin: margin });
    items.forEach(function (el) { io.observe(el); });
  }

  observe('.rv', '0px 0px -8% 0px', false);
  observe('.wipe', '0px 0px -10% 0px', true);

  var form = document.getElementById('trialform');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Demo build — no endpoint behind this.
      document.getElementById('state').textContent = 'Demo build — no endpoint wired.';
    });
  }
})();
