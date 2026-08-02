/* Coldharbour — as little motion as the page can get away with.
   One wordmark settle, long fades, a slow release of scale on the plates.
   Vanilla; with JS off nothing is hidden and nothing is mid-transition. */

(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // The wordmark arrives spread and closes to its set width. Once, on load.
  var spread = document.getElementById('spread');
  if (spread) {
    if (reduce) spread.classList.remove('pre');
    else requestAnimationFrame(function () {
      requestAnimationFrame(function () { spread.classList.remove('pre'); });
    });
  }

  if (reduce || !('IntersectionObserver' in window)) {
    [].forEach.call(document.querySelectorAll('.pre'), function (el) { el.classList.remove('pre'); });
    return;
  }

  var vh = innerHeight;

  // Pre-hide only below the fold; anything already on screen stays put.
  var rv = [].slice.call(document.querySelectorAll('.rv'));
  rv.forEach(function (el) {
    if (el.getBoundingClientRect().top > vh * 0.92) el.classList.add('pre');
  });

  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.remove('pre');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -14% 0px' });
  rv.forEach(function (el) { io.observe(el); });

  var form = document.getElementById('join');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Demo build — no endpoint behind this.
      document.getElementById('state').textContent = 'Demo build — no endpoint wired.';
    });
  }
})();
