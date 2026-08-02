/* Grange & Son — machined motion.
   Hard edges, flat curves, nothing that floats. Vanilla; with JS off
   every image is already uncovered and every block already visible. */

(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduce) return;

  var vh = innerHeight;

  // Pre-hide only what sits below the fold, so nothing on screen can flash.
  var rv = [].slice.call(document.querySelectorAll('.rv'));
  rv.forEach(function (el) {
    if (el.getBoundingClientRect().top > vh * 0.9) el.classList.add('pre');
  });
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.remove('pre');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' });
  rv.forEach(function (el) { io.observe(el); });

  // The blind: a chalk panel sitting over each plate, pulled off to the right.
  var blinds = [].slice.call(document.querySelectorAll('.blind'));
  blinds.forEach(function (el) {
    if (el.getBoundingClientRect().top > vh * 0.9) el.classList.add('pre');
  });
  var bio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      // Stagger by position in the row so a pair of plates doesn't wipe in unison.
      var i = blinds.indexOf(e.target);
      setTimeout(function () { e.target.classList.remove('pre'); }, (i % 2) * 140);
      bio.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  blinds.forEach(function (el) { bio.observe(el); });

  // The seam block drifts a little slower than the page it crosses.
  var seam = document.querySelector('.seam-block');
  if (seam) {
    var base = 42;                       // matches the CSS translateY(42%)
    var ticking = false;
    addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var y = Math.min(scrollY, vh);
        seam.style.transform = 'translateY(' + (base - y * 0.045) + '%)';
      });
    }, { passive: true });
  }

  var form = document.getElementById('enq');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Demo build — no endpoint behind this.
      document.getElementById('state').textContent = 'Demo build — no endpoint wired.';
    });
  }
})();
