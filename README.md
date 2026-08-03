# MVS Solves — demo library

Working demo builds. Each one is a complete site with its own design system —
its own palette, type pairing, motion language and layout logic. Nothing is
shared between them, which is the point: a house style stretched over every
trade is how agency work starts reading as a template.

The index is a library: cards showing each build's actual landing page, filtered
by sector.

```bash
python3 -m http.server 8080
```

Static. No framework, no build step, no dependencies.

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
| 07 | **Micron** | Paint correction, Costa Mesa | Graphite `#14171B` with acid lime `#AFE955` carrying two whole sections. Familjen Grotesk / Spline Sans Mono. Measured density. |
| 08 | **Icehouse** | 28 lofts, DTLA | Cold slate `#334551` — the only mid-tone ground in the library — with brass `#E0AE5D`. Young Serif / Rethink Sans. Cinematic. |
| 09 | **Dispatch** | Heating, air & electrical | Utility green `#014529` with hi-vis `#FF8D00`. Saira / Sometype Mono. Dense and board-like. |

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
The brief and the reasoning are in `BRIEF-round-2.md`; project context is in
`PRODUCT.md`.

| | Build | Sector | System |
|---|---|---|---|
| 04 | **Oyster** | Skin studio, Newport Beach | Abyss `#00181B` drenched, nacre `#27DED6`. Anybody / Hanken Grotesk — no serif, no mono. A WebGL thin-film shader over the hero. Airy to near-empty. |
| 05 | **Datum** | Excavation, Inland Empire | Chalk-line ultramarine `#1735BF` carrying half the surface, concrete `#D3D6DA`. Bricolage Grotesque / Martian Mono. Packed and gridded. |
| 06 | **Marrow** | Live-fire restaurant, LA | Ember `#A01B00` drenched, flame `#FF9B24`. Big Shoulders / Manrope. Violent contrast — empty, then dense, then empty. |

### Round one — British, restrained

| | Build | Sector | System |
|---|---|---|---|
| 01 | **Wren Street** | Private clinic | Paper `#F6F4F0` + iodine violet `#4B3A6B`. Instrument Serif / Karla. The capsule is the recurring container shape; abstract micrographs replace stock medical photography. |
| 02 | **Blacksmith Row** | Barbell gym | Ink `#0E0E0D` + one sulphur `#D6DE49` that only ever marks a number or something pressable. Archivo Black / Archivo / DM Mono. |
| 03 | **Ridley & Vaux** | Barristers' chambers | Shell `#F2F0EB` + oxblood `#6B2230`. Petrona / IBM Plex Mono. No photographs of people anywhere. |

## Where the directions come from

Traced to entries in `04 Web Projects/inspiration.md`, not invented:

- **Oyster** — sakazuki (macro material as the entire palette), ABL (abstract
  macro displacing stock medical), sen (background matched to the product's own)
- **Datum** — CURA (hard colour split, object crossing the seam), AGENTURA
  (geometric overlay as the whole design), Longbow (crosshairs as engineering)
- **Marrow** — IZANAMI (panel transitions, scramble reveal, sound toggle),
  sakazuki (macro as hero), INDIGO (audio behind an explicit toggle)
- **Wren Street** — ABL (abstract macro instead of stock medical), Medico
  (packaging form used as the UI shape), La Caminera (CTA segmented by visitor type)
- **Blacksmith Row** — XNRGY (peak action doing motion's job), Fashora (subject
  against huge type), CINETIK (one accent, used identically everywhere)
- **Ridley & Vaux** — Direct Lending (figures as credibility), AGENTURA
  (portrait-free restraint), PRØDUX (image and philosophy making the same argument)

## What round two changed, and why

Round one was run through `impeccable`, whose brand register rejected three
choices outright before a line of CSS was written:

- **Fraunces, Space Grotesk, Space Mono** — on the reflex-reject list. Training
  defaults that produce monoculture.
- **Editorial-typographic** — display serif, small mono labels, ruled separators,
  monochrome restraint. Named as a saturated aesthetic lane, and an exact
  description of all three round-one builds.
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
| Wren Street | Booking writes back a live summary (slot, reason, the visit length that reason implies) and validates properly |
| Blacksmith Row | The 18-session timetable filters by day, with a live count |
| Ridley & Vaux | The members index filters to silks or juniors — 3 + 8 = 11, matching the hero |

## Motion

1. Reveals that pre-hide only below the fold.
2. Nav retracts on the way down, returns on the way up, past the fold only.
3. Scroll-linked depth inside framed images, driven through a `--py` custom
   property so hover and reveal states compose with it rather than fighting an
   inline transform.

All of it disables under `prefers-reduced-motion`.

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

Two earlier builds — Grange & Son (architectural stone) and Coldharbour
(single-cask distillery) — were removed from the library. They remain in git
history if the CURA colour-split or the AIR letter-spacing treatment is ever
wanted again.
