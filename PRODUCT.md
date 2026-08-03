# PRODUCT.md — MVS Solves demo library

## Register

**Brand.** Every surface here is a marketing site. Design is the product, and a
visitor's impression is the entire deliverable. There is no app, no dashboard,
no authenticated state anywhere in this repo.

## What this is

A library of complete demo builds under `mvssolves.github.io/mvs-demos/`. Each
one is a fictional business, built to the standard of a real deliverable, so a
prospect can see the work rather than read a description of it.

The index is a card grid filtered by sector. Cards show each build's real
landing page, not an illustration of it.

## Who it's for

Two audiences, and the tension between them is the design problem.

1. **Prospects** — owners of small-to-medium American service businesses, mostly
   Californian, mostly non-technical, usually on a phone. They are comparing MVS
   against a Wix template and a cousin who "does websites." They do not read;
   they scroll for four seconds and form an opinion.
2. **Martin** — pulls a single demo into a sales conversation when a prospect's
   sector comes up. A build only earns its place if it can be opened cold in a
   call and carry the pitch on its own.

## What each build has to do

Make someone stop. That is the whole job. A demo that is defensible but
forgettable has failed, because the alternative it loses to is not a better
site — it is the prospect deciding a website does not matter much.

## Brand personality

Not one personality. **Three brands per round, each with its own voice**, because
the library's argument is range. A house style stretched over every trade is
how agency work starts reading as a template — which is exactly the failure
round one shipped.

Consistency of discipline, never consistency of treatment.

## Anti-references

Learned from round one, which failed on all of these:

- **Editorial-typographic.** Display serif, small tracked mono labels, ruled
  separators, monochrome restraint, no imagery. Round one shipped this three
  times and called it three designs. Impeccable's brand register names it as a
  saturated lane; it is retired here.
- **Cream, sand, bone, paper, parchment.** The warm near-white body background,
  and the token names that come with it.
- **Tiny uppercase tracked eyebrows above every section.** Round one used these
  as section grammar throughout.
- **Restraint as a substitute for a position.** Tasteful is not the goal;
  distinctive is. Safe is invisible.
- **Category-reflex palettes.** Sage for wellness, safety orange for
  construction, charcoal-and-amber for a steakhouse. If the palette is guessable
  from the sector alone, it is the first reflex and gets rejected.

## Strategic design principles

1. **Density is the differentiator, not palette.** Round one was uniformly airy,
   which is why three different colour schemes still read as one hand. Each
   build is assigned an opposed density and holds it.
2. **Colour is committed, never hedged.** Brand register permits Committed,
   Full-palette and Drenched strategies. Round two uses them; neutral-plus-one-
   accent is retired.
3. **Spacing is derived, never eyeballed.** An 8px baseline and a modular scale
   off it. No hand-picked margins in markup.
4. **Motion is hand-rolled and per-brand.** No GSAP, no Lenis, no dependency at
   all. Each site's motion has its own personality — mechanical, cinematic or
   liquid — not one shared reveal applied everywhere.
5. **People get drawn placeholders.** A stock face captioned with a real name is
   a lie the page does not need.

## Accessibility

Non-negotiable, and checked rather than assumed:

- body text ≥ 4.5:1, large text ≥ 3:1, placeholders held to the same 4.5:1
- nothing interactive under 44px
- every page renders complete with JavaScript disabled
- `prefers-reduced-motion` disables all pinning, scrubbing, shaders and drift
- every image has real alt text written in the brand's voice
- audited at 375px for horizontal overflow

## Constraints

- Static HTML, CSS and vanilla JS. No framework, no build step, no dependencies.
- GitHub Pages, so no server-side anything.
- Photography from Unsplash, Pexels and Life Of Pix only — the three sources
  `inspiration.md` lists. No AI generation; there is no key on the machine.
- Every build carries a quiet MVS bar in its own palette, so a prospect who
  lands on a demo directly has a route back.
