# nidaa-site
Nidaa (نِداء) public marketing site v0.1 — SvelteKit + adapter-static. AR (RTL) default, EN under `/en`.
- `npm run dev` → http://localhost:5180
- `npm run build` → static output in `build/` (all routes prerendered)
Copy lives in `src/lib/i18n.ts`; pages in `src/lib/pages`, routes are thin wrappers. Motion: CSS + `use:reveal` (`src/lib/reveal.ts`), reduced-motion honored.
