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
