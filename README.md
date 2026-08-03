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

| | Build | Sector | System |
|---|---|---|---|
| 01 | **Wren Street** | Private clinic | Paper `#F6F4F0` + iodine violet `#4B3A6B`. Instrument Serif / Karla. The capsule is the recurring container shape; abstract micrographs replace stock medical photography. |
| 02 | **Blacksmith Row** | Barbell gym | Ink `#0E0E0D` + one sulphur `#D6DE49` that only ever marks a number or something pressable. Archivo Black / Archivo / DM Mono. |
| 03 | **Ridley & Vaux** | Barristers' chambers | Shell `#F2F0EB` + oxblood `#6B2230`. Petrona / IBM Plex Mono. No photographs of people anywhere. |

## Where the directions come from

Traced to entries in `04 Web Projects/inspiration.md`, not invented:

- **Wren Street** — ABL (abstract macro instead of stock medical), Medico
  (packaging form used as the UI shape), La Caminera (CTA segmented by visitor type)
- **Blacksmith Row** — XNRGY (peak action doing motion's job), Fashora (subject
  against huge type), CINETIK (one accent, used identically everywhere)
- **Ridley & Vaux** — Direct Lending (figures as credibility), AGENTURA
  (portrait-free restraint), PRØDUX (image and philosophy making the same argument)

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
