# MVS Solves — theme gallery

> **Picking this up cold? Read [HANDOFF.md](HANDOFF.md) first.** It carries the
> full state: every decision, every bug found and why, what works for sourcing
> assets and what doesn't, known issues, and the outstanding work in order.

These are **six single-page concepts**, not six finished websites — visual
directions a client can point at. The gallery says so plainly on the front
page, and it must keep saying so.


Each concept has its own design system — its own palette, type pairing, motion
language and layout logic. Nothing is shared between them but `lib/`, which is
the point: a house style stretched over every trade is how agency work starts
reading as a template.

What is real in each one is the design system. The businesses are invented and
the photography is licensed stock. The front page says both, plainly.

```bash
python3 -m http.server 8080
```

Static. No build step. One shared engine — GSAP, ScrollTrigger, SplitText,
Flip and Lenis, vendored in `lib/` and cached across all six — plus `lib/fx.js`,
which is infrastructure only: it holds no colour, type, spacing or easing curve.
Every build writes its own choreography on top, which is why they still look
like six different studios made them.

## The builds

> **Live at https://mvssolves.com/demos** — that is the canonical URL now.
> The `mvssolves.github.io/mvs-demos` copy stays up as a mirror and every page
> carries a `rel="canonical"` pointing at the real one. The published copy lives
> in the `mvssolves.com` repo under `demos/`; keep them identical with:
>
> ```bash
> rsync -a --delete --exclude='.git' --exclude='*.md' mvs-demos/ mvssolves.com/demos/
> ```

### Round three — riskier, one deliberate gamble each

| | Build | Sector | System |
|---|---|---|---|
| 01 | **Micron** | Paint correction, Costa Mesa | Graphite `#14171B` with acid lime `#AFE955` carrying two whole sections. Familjen Grotesk / Spline Sans Mono. Measured density. |
| 02 | **Icehouse** | 28 lofts, DTLA | Cold slate `#334551` — the only mid-tone ground in the library — with brass `#E0AE5D`. Young Serif / Rethink Sans. Cinematic. |
| 03 | **Dispatch** | Heating, air & electrical | Utility green `#014529` with hi-vis `#FF8D00`. Saira / Sometype Mono. Dense and board-like. |

**The gamble in each:**

- **Micron** refuses the category reflex. No black-and-red, no carbon fibre — it
  reads like a conservation lab. The hero carries an interactive defect map: 326
  marks generated from a seeded PRNG (identical every load, because a map that
  reshuffled would be admitting it was decoration), filterable by defect type,
  revealed by an inspection-lamp toggle.
- **Icehouse** rides the building. Six floors, one per screen, with drawn plans
  and a lift car climbing a shaft indicator. It is scroll-**driven**, never
  hijacked: nothing calls `preventDefault`, the scrollbar never lies, and a fast
  flick still carries you past. Below 1000px and under reduced motion it is a
  plain list.
- **Dispatch** refuses to be a marketing page at all. No hero image, no trust
  headline — the board is the hero. It reads the visitor's own clock for the
  real next slot, trucks out and whether the after-hours rate applies, and every
  rate is published, which nobody in the trade does.

### Round two — US market, saturated colour

Built after round one was judged too quiet, too samey and too lightly animated.
Round one has since been removed from the library entirely. The brief and the
reasoning are in `BRIEF-round-2.md`; project context is in `PRODUCT.md`.

| | Build | Sector | System |
|---|---|---|---|
| 04 | **Oyster** | Skin studio, Newport Beach | Abyss `#00181B` drenched, nacre `#27DED6`. Anybody / Hanken Grotesk — no serif, no mono. A WebGL thin-film shader over the hero. Airy to near-empty. |
| 05 | **Datum** | Excavation, Inland Empire | Chalk-line ultramarine `#1735BF` carrying half the surface, concrete `#D3D6DA`. Bricolage Grotesque / Martian Mono. Packed and gridded. |
| 06 | **Marrow** | Live-fire restaurant, LA | Ember `#A01B00` drenched, flame `#FF9B24`. Big Shoulders / Manrope. Violent contrast — empty, then dense, then empty. |

## Where the directions come from

Traced to entries in `04 Web Projects/inspiration.md`, not invented:

- **Oyster** — sakazuki (macro material as the entire palette), ABL (abstract
  macro displacing stock medical), sen (background matched to the product's own)
- **Datum** — CURA (hard colour split, object crossing the seam), AGENTURA
  (geometric overlay as the whole design), Longbow (crosshairs as engineering)
- **Marrow** — IZANAMI (panel transitions, scramble reveal, sound toggle),
  sakazuki (macro as hero), INDIGO (audio behind an explicit toggle)

## What round two changed, and why

Round one was run through `impeccable`, whose brand register rejected three
choices outright before a line of CSS was written:

- **Fraunces, Space Grotesk, Space Mono** — on the reflex-reject list. Training
  defaults that produce monoculture.
- **Editorial-typographic** — display serif, small mono labels, ruled separators,
  monochrome restraint. Named as a saturated aesthetic lane, and an exact
  description of all three round-one builds, which is why they are gone.
- **Oyster shell / nacre / warm bone** — the cream-sand-beige body background
  under a nicer name, flagged as the saturated default of 2026.

The structural fix was **density, not palette**. Round one was uniformly airy,
which is why three different colour schemes still read as one hand. Round two
assigns each build an opposed density and holds it, and every build commits to
saturated colour instead of neutral-plus-one-accent.

## Shared discipline (not shared design)

Every build follows the same rules, and none of them share a token, a face or a
curve:

- one spacing scale (`--s1`…`--s6`) used everywhere; no ad-hoc margins in markup
- three type roles maximum — display / text / data — never one face doing all three
- a `.frame` element owns every image ratio, so grids compose on mixed sources
- reveals pre-hide **only** what is below the fold, so nothing visible can flash
- every page renders complete with JavaScript disabled
- labels are contrast-checked; `--ink-3`-class tokens are never used for body text

## Interaction, where the content earns it

Each build got one interaction its own data needed — not motion for decoration:

| Build | Interaction |
|---|---|
| Micron | An inspection lamp that reveals a generated defect map over the hero, filterable by defect type |
| Icehouse | Scroll rides six floors of the building, each with its own drawn plan, price and remaining count |
| Dispatch | A board computed from the visitor's clock: next slot, trucks out, and the fee that actually applies right now |
| Oyster | Selecting treatments totals the price *and* says how many visits it actually takes, rather than implying one afternoon |
| Datum | An estimator that runs a real takeoff — length × width × depth, swell factor by soil type, end-dump loads, working days |
| Marrow | A hearth synthesised in Web Audio: filtered brown noise plus scheduled decaying crackles. Off by default, behind a labelled toggle |

## Motion

Each build has its own motion personality, not a shared reveal applied six times:

| Build | Moves like |
|---|---|
| Oyster | Liquid. Long eases, nothing snaps, the statement slows to a stop word by word |
| Datum | Mechanical. Stepped easing throughout, hovers cut, chalk lines snap rather than draw, figures tick up like a counter |
| Marrow | Cinema. Long holds, then the menu arrives all at once. Pinned, scrubbed fire sequence |
| Micron | Precise. Short, no overshoot, nothing bounces. The paint readings count up because they are readings |
| Icehouse | Architectural. Weighty, measured, and the ride is a real pin with scrub |
| Dispatch | Barely at all — and that is the position. Nobody at 6am with no heat wants to be impressed |

**The WebGL image layer** (`FX.gl`) puts a shader over a photograph: scroll
velocity bows it, the pointer pushes a soft lens into it, and it can reveal
through noise instead of a fade. It inherits the build's own CSS grading, so
art direction survives. No WebGL, no JS, or reduced motion — you get the
photograph.

**Reduced motion means none.** Every reveal here is scroll-linked, and a
scroll-linked tween that has not fired yet is just content at opacity zero. So
the whole choreography is skipped and the page renders as plain markup.

## Mobile: separate compositions, not a narrowed desktop

Each build gets its own phone layout, and the hero swaps to a portrait crop of
the same frame through `<picture>`:

- **Oyster** — treatments become a swipeable deck, each card carrying its own plate; the running total follows you down the page
- **Datum** — setting-out lines drop, the fleet table rebuilds as labelled rows
- **Marrow** — the pinned fire sequence becomes a swipeable strip; the headline gets *bigger*
- **Micron** — hero fills the screen, lamp becomes a full-width control, tiers become a deck
- **Icehouse** — you cannot ride a building with one thumb, so the floors become a deck with a dot indicator
- **Dispatch** — "next available" goes full width first; rates become labelled rows

## Mobile

Built for phones first-class, not shrunk into one.

- A burger and full-screen panel in each site's own palette and display face,
  with sequenced links, escape-to-close, scroll lock and a resize guard.
- Clinic and Forge keep their booking action in the header at a shortened label.
- Audited at 375px: **no horizontal overflow, nothing interactive under 44px**,
  every image has alt text, every field has a label.

## Assets

- Photography: Unsplash, free licence only. Source URLs per file in each
  `img/credits.json`.
- `preview.jpg` / `og.png` per build are generated from that build's own hero
  photograph, palette and headline, so a card and a pasted link both look like
  the site they point at.

## Previously here

Five builds have been removed from the library and remain in git history:
Grange & Son (architectural stone), Coldharbour (single-cask distillery), and
the whole of round one — Wren Street (private clinic), Blacksmith Row (barbell
gym) and Ridley & Vaux (barristers' chambers).

Round one was retired on 2026-08-02 rather than repaired. It shared one recipe
across three builds — off-white or near-black ground, one accent, serif display
over a grotesk — which is the exact thing a demo library exists to disprove.
