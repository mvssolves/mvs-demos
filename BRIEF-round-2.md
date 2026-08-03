# Demo library — round 2 brief

Round 1 (Wren Street, Blacksmith Row, Ridley & Vaux) stays in the library. It is
not the standard for what follows.

## Settled before build

| | |
|---|---|
| Market | US / California. Round one was British; these read Californian — imperial, ZIP, US phone, US trade terms |
| Scope | Three sites, one long page each. Sub-pages only if the direction lands |
| Photography | Unsplash, Pexels, Life Of Pix — the three sources `inspiration.md` actually lists. Hard-treated. No AI generation: no key on the machine, and none of those sources is a generator |
| Motion | Vanilla. No GSAP, no Lenis, no dependency of any kind. MARROW's pinning is hand-rolled |
| Framing | A quiet MVS bar per site, in that site's own palette, never bolted-on chrome |

DATUM is imageless by design, so the stock question does not touch it. OYSTER is
where stock is most dangerous — beauty libraries are wall-to-wall cliché — which
is why its photography is macro and material, never a face.

## What round 1 got wrong

Four faults, all confirmed:

1. **One recipe, three coats of paint.** Off-white or near-black ground, exactly
   one accent, serif display over a grotesk, wide margins, no people. Each
   defensible alone; together they read as one designer with one move — the
   precise thing a demo library exists to disprove.
2. **Tasteful, not impressive.** Restraint is a real position but it does not
   survive a thumbnail. Nothing in those three makes anyone stop.
3. **Motion stopped at layer one.** Fade-ups, stagger, 2% parallax. No pinning,
   no scrubbing, no shader, no interaction worth recording.
4. **Spacing eyeballed, not systematised.** Rhythm drifts because vertical space
   was chosen per section instead of derived.
5. **Naming told on itself.** Wren *Street*, Blacksmith *Row*, Ridley & Vaux —
   three place/partnership names is its own sameness signal.

## The fix, stated as rules

**Density is the differentiator, not palette.** All three round-one builds were
airy. Round two assigns each site an opposed density and holds it:

| | Density | Consequence |
|---|---|---|
| OYSTER | Airy, almost empty | One idea per screen, enormous negative space |
| DATUM | Dense, packed, gridded | Information-rich, spec-sheet, nothing floats |
| MARROW | Violent contrast | Empty black, then a dense burst, then empty again |

**Every site derives spacing.** An 8px baseline, a modular scale off it, two
content widths plus one full-bleed. No hand-picked margins in markup — the
round-one fault fixed at the root.

**No shared face, curve, token or naming logic.** Round one used Instrument
Serif/Karla, Archivo Black/Archivo/DM Mono, Petrona/IBM Plex Mono. None of those
appear again.

## The three builds

> **Revised after running `impeccable`.** The skill's brand register rejected
> three of the original picks outright, and it was right to. Recorded here rather
> than quietly swapped, because the rejections are the useful part.
>
> - **Fraunces, Space Grotesk, Space Mono** — all three on the reflex-reject
>   list. Training-data defaults that create monoculture.
> - **Editorial-typographic** — display serif, small mono labels, ruled
>   separators, monochrome restraint. Named as a saturated aesthetic lane. It is
>   also an exact description of round one, and the original MARROW plan was
>   walking back into it.
> - **Oyster shell / nacre / warm bone** — the cream-sand-beige body background
>   under a better name, flagged as *the* saturated default of 2026.
>
> All three builds now commit to saturated colour. Neutral-plus-one-accent, the
> mechanic every round-one site shared, is retired.

### 01 — OYSTER · skin studio
**Sector** Beauty / med-spa · Newport Beach **Ambition** Flagship
**Imagery** Art-directed macro **Strategy** Drenched **Density** Airy to near-empty

Scene: someone books a treatment at 11pm from bed, phone dimmed, deciding between
this and three others — wanting to feel they found something serious rather than
another beige wellness studio. The scene forces dark, and it forces precision.

Drenched abyssal teal-black. The only colour on the page is iridescence, and it
comes from the shader rather than a token — nacre over dark water. WebGL is
pointed *at the photography*, not at a floating 3D blob: a sheen that tracks the
cursor, and scroll driving a displacement transition between treatments. Falls
back to clean static images with no WebGL, renders complete with JS off.

- **Anybody** (variable width axis) + **Hanken Grotesk**. No serif anywhere —
  every med-spa on earth uses one, so this doesn't. No mono either; the brand
  isn't technical and mono would be costume.
- Photography is macro and material only. Never a face. Beauty stock is where
  "woman touching face, eyes closed" lives.
- Traced to: sakazuki (macro material as the entire palette), ABL (abstract macro
  displacing stock medical), sen (background material matched to the product)

### 02 — DATUM · excavation & site work
**Sector** Trades · Inland Empire **Ambition** Loud graphic design
**Imagery** Hard-duotoned to near-abstraction **Strategy** Committed **Density** Packed, gridded

The hard one, and the point of the set: premium design on a trade that never gets
it. Named for the surveyor's fixed reference level.

Chalk-line ultramarine carrying roughly half the surface — the actual colour of a
snapped chalk line, not safety orange, which is the category reflex. Concrete and
black take the rest. The page is built from drawn technical marks: snap lines,
dimension arrows, hatch fills, setting-out grids, spec tables.

Motion is mechanical rather than luxurious. Lines snap in on stroke-dashoffset,
type kerns into position, hovers cut to inverse. Stepped timing, no soft easing
anywhere on the page.

- **Bricolage Grotesque** (variable — optical size and width axes, carrying
  display *and* text on weight contrast alone) + **Martian Mono** for spec data.
  Mono is legitimate here; the trade genuinely is technical.
- Not imageless — site photography, duotoned so hard it reads as material rather
  than photograph.
- Traced to: CURA (hard colour split with an object crossing the seam), AGENTURA
  (geometric overlay as the whole design), Longbow (crosshairs reading as
  engineered precision)

### 03 — MARROW · a fire kitchen
**Sector** Restaurant / live-fire · Los Angeles **Ambition** Motion cinema
**Imagery** Art-directed photography **Strategy** Drenched **Density** Violent contrast

Scene: 6pm, hungry, on the couch, choosing where to eat tonight. That forces
appetite, heat and smoke — not restraint.

Drenched ember red-orange. Explicitly *not* charcoal-with-an-amber-accent, which
is what every steakhouse and every AI generating one already does. Char black and
ash sit under it.

Scroll-driven storytelling with no 3D engine and no video files. Panels pin and
slide over one another, text scrambles into place, ember drift, images
cross-dissolve on scrub. Fire crackle behind an explicit toggle, muted by default.

- **Big Shoulders Display** (ultra-condensed, American, industrial — a wine-crate
  stencil rather than a magazine) + **Manrope**. No mono; a restaurant is not
  technical.
- Traced to: IZANAMI (panel-slide transitions, scramble reveal, sound toggle),
  sakazuki (macro as hero), INDIGO (audio gated behind an explicit toggle)

## Held from round one

The discipline was never the problem, only the taste ceiling:

- one derived spacing scale, no ad-hoc margins
- three type roles maximum
- a `.frame` element owning every image ratio
- reveals pre-hide only below the fold; every page renders complete with JS off
- `prefers-reduced-motion` kills all pinning, scrubbing, shaders and drift
- contrast-checked labels, 44px touch targets, mobile audited at 375px
- people get drawn placeholders, never borrowed faces
