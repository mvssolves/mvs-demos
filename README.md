# MVS Solves — demo builds

Five demonstration sites. Different trades, different systems, nothing shared.

| | Build | System |
|---|---|---|
| 01 | **Grange & Son** — architectural stone yard | Chalk `#E9E5DC` + cobalt `#1E2F87` + ink. Big Shoulders Display / Chivo Mono. Hard horizontal colour split with a mass crossing the seam, monospace spec rows, dashed proof-sheet marks, machined easing `cubic-bezier(.85,0,.15,1)`. All photography desaturated at source so cobalt is the only colour on the page. |
| 02 | **Coldharbour** — single-cask distillery | Paper `#F4F1EA` + ink + one amber `#A9662A` borrowed from the photographs. Italiana / Jost. Letter-spacing as the layout, museum-plaque symmetry, full-bleed material plates, near-zero motion — one wordmark settle and long fades. |
| 03 | **Wren Street** — private women's health practice | Paper `#F6F4F0` + ink + iodine violet `#4B3A6B`. Instrument Serif / Karla. A lozenge crop used on every framed thing — the capsule shape as the UI shape. Abstract micrographs stand in for stock medical photography. Booking is the spine of the page. |
| 04 | **Blacksmith Row** — barbell gym | Ink `#0E0E0D` + bone + one sulphur `#D6DE49` that only ever marks a number or something pressable. Archivo Black / Archivo / DM Mono. Solid-and-outline display over peak-action photography; the timetable is a real table. |
| 05 | **Ridley & Vaux** — commercial disputes set | Shell `#F2F0EB` + ink + oxblood `#6B2230`. Petrona / IBM Plex Mono. No photographs of people at all — credibility comes from the practice index, the record and the list of members by call. |

, no build step, no dependencies. Both render complete
with JavaScript off; reveals only ever pre-hide what is already below the fold.

## Where the directions come from

Traced to entries in `04 Web Projects/inspiration.md`, not invented:

- **Grange & Son** — CURA (hard colour split, mass crossing the seam, off-script
  industry colour), Direct Lending (stat sidebar on restrained neutral), Longbow
  (proof-sheet crosshairs as UI chrome).
- **Coldharbour** — sakazuki (macro material full-bleed, mark at the focal point),
  AIR (word spread across the full width, whitespace as the material), sen
  (background sampled from the product's own surface).

## Images

Unsplash free-licence only, fetched at final crop via imgix params. Source URLs per
file in each `img/credits.json`. Stone set is desaturated at fetch time.

```bash
python3 -m http.server 8080
```


## Shared discipline (not shared design)

Every build follows the same rules, and none of them share a token, a face or a
curve:

- one spacing scale (`--s1`…`--s6`) used everywhere; no ad-hoc margins in markup
- three type roles maximum — display / text / data — never one face doing all three
- a `.frame` element owns every image ratio, so grids compose on mixed sources
- reveals pre-hide **only** what is below the fold, so nothing visible can flash
- every page renders complete with JavaScript disabled
- labels are checked for contrast; `--ink-3`-class tokens are never used for body

## Where the directions come from

Traced to entries in `04 Web Projects/inspiration.md`, not invented:

- **Grange & Son** — CURA, Direct Lending, Longbow
- **Coldharbour** — sakazuki, AIR, sen
- **Wren Street** — ABL (abstract macro over stock medical), Medico (packaging form as UI shape), La Caminera (CTA segmented by visitor type)
- **Blacksmith Row** — XNRGY (peak action doing motion's job), Fashora (subject against huge type), CINETIK (one accent, used identically everywhere)
- **Ridley & Vaux** — Direct Lending (figures as credibility), AGENTURA (portrait-free restraint), PRØDUX (image and philosophy making the same argument)
