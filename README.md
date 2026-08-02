# MVS Solves — demo builds

Two demonstration sites. Different trades, different systems, nothing shared.

| | Build | System |
|---|---|---|
| 01 | **Grange & Son** — architectural stone yard | Chalk `#E9E5DC` + cobalt `#1E2F87` + ink. Big Shoulders Display / Chivo Mono. Hard horizontal colour split with a mass crossing the seam, monospace spec rows, dashed proof-sheet marks, machined easing `cubic-bezier(.85,0,.15,1)`. All photography desaturated at source so cobalt is the only colour on the page. |
| 02 | **Coldharbour** — single-cask distillery | Paper `#F4F1EA` + ink + one amber `#A9662A` borrowed from the photographs. Italiana / Jost. Letter-spacing as the layout, museum-plaque symmetry, full-bleed material plates, near-zero motion — one wordmark settle and long fades. |

Both are static: no framework, no build step, no dependencies. Both render complete
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
