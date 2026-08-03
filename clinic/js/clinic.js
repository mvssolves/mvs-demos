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

  /* -------------------------------------------- live appointment summary */
  // The visit length is a property of the reason, so the page should say it
  // back rather than making someone cross-reference the table above.
  var LENGTH = {
    'Perimenopause & menopause': '90 minutes',
    'Thyroid & adrenal': '60 minutes',
    'Bone & cardiovascular risk': '60 minutes',
    'Annual review': '45 minutes',
    'Not sure yet': '90 minutes, booked long until we know'
  };
  var summary = document.getElementById('summary');
  var reason = document.getElementById('rs');

  function writeSummary() {
    if (!summary) return;
    var slot = document.querySelector('.slot[aria-pressed="true"]');
    var why = reason ? reason.value : '';
    if (!slot || !why) { summary.textContent = ''; return; }
    summary.innerHTML = slot.textContent + ' — <em>' + why.toLowerCase() + '</em>, ' + (LENGTH[why] || '60 minutes') +
      '. Bloods taken forty minutes before.';
  }
  slots.forEach(function (b) { b.addEventListener('click', writeSummary); });
  if (reason) reason.addEventListener('change', writeSummary);
  writeSummary();

  var form = document.getElementById('booking');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var state = document.getElementById('state');
      // real validation before the demo notice, so the form behaves honestly
      var missing = [].slice.call(form.querySelectorAll('[required]')).filter(function (f) { return !f.value.trim(); });
      var email = document.getElementById('em');
      if (missing.length) { state.textContent = 'Add your name and email first.'; missing[0].focus(); return; }
      if (email && email.value.indexOf('@') < 1) { state.textContent = 'That email does not look right.'; email.focus(); return; }
      state.textContent = 'Demo build — no endpoint wired. Nothing was sent.';
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
