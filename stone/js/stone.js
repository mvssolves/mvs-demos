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


/* ---------------------------------------------------------- mobile nav */
(function () {
  'use strict';
  var burger = document.getElementById('burger');
  var mnav = document.getElementById('mnav');
  if (!burger || !mnav) return;
  var links = [].slice.call(mnav.querySelectorAll('a'));
  var open = false;

  function set(next) {
    open = next;
    burger.setAttribute('aria-expanded', String(open));
    mnav.classList.toggle('open', open);
    document.body.classList.toggle('locked', open);
    // links rise in sequence once the panel itself has landed
    links.forEach(function (a, i) {
      a.style.transitionDelay = open ? (0.18 + i * 0.055) + 's' : '0s';
    });
  }
  burger.addEventListener('click', function () { set(!open); });
  links.forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
  addEventListener('keydown', function (e) { if (e.key === 'Escape' && open) set(false); });
  matchMedia('(min-width: 881px)').addEventListener('change', function (e) { if (e.matches && open) set(false); });
})();

/* ------------------------------------------------- nav retract on scroll */
(function () {
  'use strict';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var last = 0, ticking = false;
  addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = scrollY;
      if (document.body.classList.contains('locked')) return;
      // only retract once past the fold, and never while scrolling up
      document.body.classList.toggle('nav-up', y > innerHeight * 0.6 && y > last + 4);
      last = y;
    });
  }, { passive: true });
})();

/* ------------------------------------------- depth inside framed images */
(function () {
  'use strict';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;
  var live = [];
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { if (live.indexOf(e.target) < 0) live.push(e.target); }
      else { var i = live.indexOf(e.target); if (i > -1) live.splice(i, 1); }
    });
  }, { rootMargin: '10% 0px' });
  [].forEach.call(document.querySelectorAll('.plate .frame img'), function (im) { io.observe(im); });

  var ticking = false;
  function run() {
    live.forEach(function (im) {
      var r = im.getBoundingClientRect();
      // -1 at the bottom of the viewport, +1 at the top
      var p = 1 - (r.top + r.height / 2) / (innerHeight / 2 + r.height / 2);
      im.style.setProperty('--py', (p * -2.2).toFixed(2) + '%');
    });
  }
  addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; run(); });
  }, { passive: true });
  addEventListener('resize', run, { passive: true });
  run();
})();
