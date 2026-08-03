/* Wren Street — calm motion only.
   Reveals, and a slot picker that behaves like a real control.
   Vanilla; with JS off nothing is hidden and the form still submits. */

(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduce && 'IntersectionObserver' in window) {
    var vh = innerHeight;
    var rv = [].slice.call(document.querySelectorAll('.rv'));
    // Pre-hide only what is below the fold — nothing on screen may flash.
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
  }

  // Slot picker — single choice, announced through aria-pressed.
  var slots = [].slice.call(document.querySelectorAll('.slot'));
  slots.forEach(function (b) {
    b.addEventListener('click', function () {
      slots.forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
    });
  });

  var form = document.getElementById('booking');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var picked = document.querySelector('.slot[aria-pressed="true"]');
      // Demo build — no endpoint behind this.
      document.getElementById('state').textContent =
        'Demo build — no endpoint wired' + (picked ? ' (' + picked.textContent + ')' : '') + '.';
    });
  }
})();
