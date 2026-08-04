# Session handoff — MVS demo library / theme gallery

**Written 2026-08-02.** Everything below is current as of commit `d10219c`
(`mvs-demos`) and `c43c3cd` (`mvssolves.com`). Read this and `BRIEF-round-2.md`
and `PRODUCT.md` before touching anything.

---

## 1. What this is, and where it lives

Six single-page concepts presented as a **theme gallery** — visual directions a
prospect can point at, not finished websites. Reframed from "demo library" on
2026-08-02 because calling them "complete, working sites" was an overclaim a
prospect can disprove in four seconds.

| | |
|---|---|
| **Canonical URL** | `https://mvssolves.com/demos` |
| **Mirror** | `https://mvssolves.github.io/mvs-demos/` — stays up, every page carries `rel="canonical"` to the real one |
| **Source repo** | `github.com/mvssolves/mvs-demos` → `04 Web Projects/mvs-demos` |
| **Published copy** | `github.com/mvssolves/mvssolves` → `04 Web Projects/mvssolves.com/demos/` |
| **Working tree** | 32.5 MB (14.1 MB video, 2.5 MB `lib/`) |

### ⚠️ Two copies exist. Keep them identical.

The `.md` files are deliberately excluded — internal docs are not published.

```bash
rsync -a --delete --exclude='.git' --exclude='*.md' \
  "04 Web Projects/mvs-demos/" "04 Web Projects/mvssolves.com/demos/"
```

**Run this before every mvssolves.com commit.** Both repos then need their own
commit and push. Cloudflare Pages deploys `mvssolves.com` on push to `main`;
propagation is uneven and takes 1–3 minutes, and individual assets can 404 while
the HTML is already live — poll, don't panic.

**Always `git fetch` + reset before editing `mvssolves.com`** — the local clone
goes stale. Never force-push.

---

## 2. The six builds

Nothing is shared between them but `lib/`. No token, face, curve or spacing
scale is reused. That is the entire argument of the gallery.

| Build | Sector | Ground | Accent | Type | Density |
|---|---|---|---|---|---|
| **Oyster** | Skin studio, Newport Beach | Abyss `#00181B` drenched | Nacre `#27DED6` | Anybody / Hanken Grotesk — **no serif, no mono** | Airy, near-empty |
| **Datum** | Excavation, Inland Empire | Chalk-line `#1735BF` ~50% | Concrete `#D3D6DA` | Bricolage Grotesque / Martian Mono | Packed, gridded |
| **Marrow** | Live-fire restaurant, LA | Ember `#A01B00` drenched | Flame `#FF9B24` | Big Shoulders Display / Manrope | Violent contrast |
| **Micron** | Paint correction, Costa Mesa | Graphite `#14171B` | Acid lime `#AFE955` (carries 2 whole sections) | Familjen Grotesk / Spline Sans Mono | Measured |
| **Icehouse** | 28 lofts, DTLA | Cold slate `#334551` — only mid-tone in the set | Brass `#E0AE5D` | Young Serif / Rethink Sans | Cinematic |
| **Dispatch** | Heating, air & electrical, Riverside | Utility green `#014529` | Hi-vis `#FF8D00` | Saira / Sometype Mono | Dense, board-like |

### The one interaction each build earns from its own content

- **Oyster** — treatment picker totals price *and* the number of visits it really takes
- **Datum** — estimator running a real takeoff: L×W×D, swell factor by soil type, end-dump loads, working days
- **Marrow** — hearth **synthesised in Web Audio** (filtered brown noise + scheduled decaying crackles), off by default behind a labelled toggle. No audio file.
- **Micron** — inspection lamp revealing a generated defect map (326 marks, seeded PRNG), filterable by defect type; plus the 3D panel
- **Icehouse** — scroll rides six floors, each with a drawn plan, price and remaining count
- **Dispatch** — board computed from the visitor's own clock: next slot, trucks out, whether the after-hours rate applies

### Facts that must stay consistent

- **Icehouse**: 6 floors, lofts per floor `4,5,5,5,5,4` = **28**; remaining `1,2,3,2,3,2` = **13**. Hero says 28, copy says "fifteen of twenty-eight are gone", bar says "13 of 28 remaining". Change one, change all.
- **Dispatch**: 6 trucks, 7am–9pm seven days, after-hours from 6pm, `$89` / `$149` diagnostic. CSLB #1071883, C-20 & C-10.
- **Micron**: clear coat 45 µm healthy, refuse under 25 µm. CSLB not used; `$650` / `$1,450` / `$0`.
- **Datum**: CSLB #1094412 Class A. 18 CY end dumps, 2,600 bank CY/day for one 336.

All phone numbers are `555` fiction. All businesses are invented — that is now
disclosed prominently on the gallery.

---

## 3. `lib/` — the only shared code

| File | Purpose |
|---|---|
| `gsap.min.js` `ScrollTrigger.min.js` `SplitText.min.js` `Flip.min.js` | GSAP **3.13.0**. All plugins free post-Webflow. |
| `lenis.min.js` | Lenis 1.3.11 |
| `three.module.js` + `three.core.js` | ~2 MB raw. **Micron only**, lazy-loaded. |
| `RoomEnvironment.js` `RectAreaLightUniformsLib.js` `RectAreaLightTexturesLib.js` | three.js addons, import paths rewritten to `./three.module.js` |
| `fx.js` / `fx.css` | The engine |

### `fx.js` API

- `FX.boot({anchorOffset})` — Lenis on GSAP's ticker, ScrollTrigger wired to it, anchors routed through Lenis
- `FX.gl(img, {video, grain, reveal})` — WebGL layer over a photograph or live video
- `FX.video(host)` — poster-first video hero
- `FX.split(el, type)` — SplitText with per-line masks
- `FX.enter({hold})` — arrival veil
- `FX.links()` — marks the doc for view transitions
- `FX.run()` — one ticker driving every GL layer

**`fx.js` holds no colour, type, spacing or easing curve.** That rule is what
keeps the six looking like six studios. Do not put design in it.

---

## 4. Every decision Martin made (do not re-litigate)

| Question | Answer |
|---|---|
| Market | **US / California** (round one was British) |
| Scope | Six builds, **one long page each** |
| Photography | Unsplash / Pexels / Life Of Pix — the sources `inspiration.md` lists. **No AI generation** (no key on the machine) |
| Motion stack | **GSAP + Lenis everywhere** — explicitly overrode the earlier "stay vanilla" |
| Mobile | **Separate compositions**, not narrowed desktop |
| 3D | **All three kinds**: explorable product, environment, material/light |
| Video | **Longer and higher quality**, and **beyond heroes** |
| Purpose | **Showreel — max everything.** Overrode my push-back that Dispatch's restraint *is* its design |
| Depth | **Keep six, add depth to all** |
| Exclusive means | All four: rare techniques, expensive-feeling, nobody-else-could, restraint |
| Craft signals | **Load sequence + page transitions**, **3D**. Not custom cursor, not sound |
| Gallery framing | **Disclose one-pagers**, theme gallery for prospects |

### Standing preferences

- Push to `mvssolves.com` automatically, don't ask
- List what changed after every set of edits, grouped by file
- State the full path of every file created or edited
- Everything lives in the Brain vault, never `~/Downloads`
- Pricing is per-client — never quote a number from memory

---

## 5. Verification harness

Lives in the session scratchpad (`/private/tmp/claude-501/.../scratchpad/`) —
**not** in the repo, and will be lost. Rebuild if needed. Playwright 1.62.1 is
installed globally.

| Script | Checks |
|---|---|
| `audit.js` | console errors, overflow @1440 and @375, images loaded + alt text, webfonts, **contrast measured via canvas readback**, footer watermark ≥1.35:1, 44px touch targets, mobile menu opens, renders complete with JS off, nothing hidden under reduced motion |
| `motion.js` | scrolls each page down and back at both viewports, flags anything left stuck at opacity 0 |
| `overlay.js` | **hides each hero heading, screenshots the pixels behind it**, finds the pixel closest in luminance to the type. The only way to check text over video. |
| `vidcheck.js` | video playing, readyState, GL canvas count |
| `enter.js` | veil present at 250ms, lifted and removed, body scrollable after |
| `gal.js` `lift.js` `p3.js` | gallery, Icehouse floor ride, Micron panel |

**Chromium needs `--use-gl=swiftshader --enable-unsafe-swiftshader` for WebGL,
and `--autoplay-policy=no-user-gesture-required` for video.**

---

## 6. Bugs found and fixed — read this before assuming anything works

Every one of these passed a naive check first.

1. **The shader was invisible on all six.** Wrapping heroes in `<picture>` for the mobile crop moved `FX.gl`'s host to the `<picture>`; the `<video>` is its *sibling*, so the rule retiring the video never matched and the raw clip painted over the canvas. Fixed by marking the media *container*.
2. **The noise reveal never completed.** Mask samples noise + a `uv.y` bias reaching ~1.22; tweening to 1.0 left permanently transparent blotches. `REV_DONE = 1.6`.
3. **Three heroes had no photograph at all.** Reveal defaulted to `rev:0` (fully transparent) and Datum/Micron/Dispatch never called `reveal()`. Reveal is now **opt-in**; default is visible.
4. **The canvas discarded each build's colour grading.** Now copies the `<img>`'s computed CSS filter.
5. **Marrow printed SplitText's markup on the page.** Its original scramble captured `innerHTML` and rewrote it as `textContent` — after SplitText had wrapped the same heading. Rendered literally `<DIV CLASS="FX-MASK-LINE-MASK"...`. Rebuilt to drive glyphs from *inside* the split, with char widths locked after `document.fonts.ready`.
6. **`RectAreaLight` does nothing without `RectAreaLightUniformsLib.init()`.** Micron's strip light sat in the scene contributing zero, which is why the panel read as a blue gradient.
7. **Reduced motion left content at opacity 0.** Every reveal is scroll-linked; an untriggered `from` tween is just hidden content. All choreography is now skipped entirely under reduced motion.
8. **Icehouse stranded a floor card invisible** when scrolling back above the lift. GSAP now owns visibility outright and parks on a real floor via `onLeaveBack` / `onLeave` / `onRefresh`.
9. **Icehouse's pinned floors were invisible with JS off** — absolutely positioned without a `.js` gate. Pin is now `@media (min-width:1000px) and (prefers-reduced-motion: no-preference)` + `.js`.
10. **Micron's `.see` was an implicit grid** — the auto column sized to its widest child and dragged the heading 408px past the viewport on a phone.
11. **Gradient text in Marrow's arrival** — banned in this project's own `PRODUCT.md`. Replaced with a solid mark and an animated *mask*.
12. **A drag hint at `opacity:0` with JS off** — hidden content advertising an interaction that doesn't exist. Now `display:none`.
13. **`curl`/`ffmpeg` inside `while read` eat stdin** — mangled site names and silently created junk directories `3/`, `cron/`, `ispatch/` which got committed. Deleted 2026-08-02. **Always `</dev/null`.**
14. **Chrome reports authored `oklch()` back as `oklch()`** — an rgb parser reads it as garbage and every contrast number is fiction. Resolve colours through a 1×1 canvas.

### Mistakes of process worth not repeating

- I pushed a commit **without reading its audit output**; it had two failures.
- I used `str.replace()` **without asserting the anchor matched** — a whole stylesheet silently never landed and the section rendered unstyled.
- The DOM audit passed while pages were **visibly broken**. Screenshots caught what assertions could not. Look at the work.

---

## 7. Asset sourcing — what works, what doesn't

| Source | Status |
|---|---|
| **Unsplash** | Public search **401s** to direct requests. **WebFetch reaches `unsplash.com/napi/search/photos`.** CDN `images.unsplash.com` serves freely. |
| **Pexels photos** | API 401s everywhere including WebFetch. |
| **Pexels video** | ✅ **The good route.** WebFetch the search page → get numeric ids + real descriptions → `curl -I https://www.pexels.com/download/video/{id}/` → redirects to a **1920×1080** mp4. |
| **Mixkit** | `?q=` is **client-side only** — returns the same featured page for every query (gave "milk poured into coffee" for a skin studio). Category pages work but cap at 720p. |
| **Coverr** | API works, library thin and lifestyle-heavy. |
| **Pixabay** | 403. Dead. |
| **Openverse** | Works, but rate-limits anonymous callers hard and the commercially-usable pool is museum specimen shots. |
| **AI image/video gen** | **None available.** No Replicate/Gemini/Ideogram/fal key. Kling MCP installed but unauthorised. |

**Video encode recipe** (6 clips = 14.1 MB):

```bash
ffmpeg -y -nostdin -ss <start> -t 14 -i raw.mp4 \
  -vf "crop='min(iw,ih*16/9)':'min(ih,iw*9/16)',scale=1920:1080:flags=lanczos,fps=25" -an \
  -c:v libx264 -profile:v high -crf 26 -preset slow -movflags +faststart out/hero.mp4
```

Poster frame from the same `-ss` at `-q:v 3`. Oyster's source was only 720p
upscaled; the rest are native 1080 or downsampled 4K.

**All six heroes also have `hero-p.jpg` (900×1350) and `hero-sq.jpg` (1200×1200)**
for the art-directed `<picture>`.

---

## 8. Known issues — not yet good enough

1. **Micron's 3D environment.** `RoomEnvironment`'s emissive boxes still reflect as two soft white blobs on the right. `envMapIntensity` was dialled to 0.55 which helped but did not solve it. **The real fix is a purpose-built studio environment**, not three.js's stock room. The strip light and the swage-line reflection are right; the background is not.
2. **Photography is the ceiling.** All stock. However hard it is graded, a competitor can be using the same frame. Only fixed by a paid library, a generation key, or real shoots.
3. **Google Fonts throughout.** Free, and everyone has them. Foundry faces would be a genuine step up and a genuine cost.
4. **`three.js` is 2 MB raw** for one section. Lazy-loaded and gated, but it is the heaviest single thing in the repo.

---

## 9. Outstanding work, in the order I would do it

1. **3D on the other five.** Martin asked for all three kinds. These are genuinely per-site scenes, not one module applied five times — Icehouse's building and Marrow's hearth are different problems. Do one, verify it visually, then repeat.
2. **Fix Micron's environment** before repeating the approach anywhere.
3. **Video beyond heroes** — sections, transitions, behind type. Pexels route is proven.
4. **Second and third pages per build** — 12 new pages. View transitions already work, so the navigation is solved.

---

## 10. Retired — in git history, not deleted

- **Round one** (removed 2026-08-02, commit `395b929`): Wren Street (private clinic), Blacksmith Row (barbell gym), Ridley & Vaux (barristers' chambers). Retired rather than repaired: they shared one recipe — off-white or near-black ground, one accent, serif display over a grotesk — which is exactly what a gallery exists to disprove.
- **Earlier still**: Grange & Son (architectural stone), Coldharbour (single-cask distillery).

### The three things `impeccable` rejected that shaped everything after

1. **Fraunces, Space Grotesk, Space Mono** — reflex-reject list, training-data defaults
2. **Editorial-typographic** — display serif + small mono labels + ruled separators + monochrome restraint. A saturated lane, and an exact description of round one.
3. **Oyster shell / nacre / warm bone** — the cream-sand-beige body background under a nicer name

**The structural fix was density, not palette.** Round one was uniformly airy,
which is why three different colour schemes still read as one hand.
