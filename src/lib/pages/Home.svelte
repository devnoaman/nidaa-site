<script lang="ts">
  import { dict, type Lang } from '$lib/i18n';
  import { reveal } from '$lib/reveal';
  import Ctas from '$lib/components/Ctas.svelte';
  import FeatureGrid from '$lib/components/FeatureGrid.svelte';
  import Honesty from '$lib/components/Honesty.svelte';
  export let lang: Lang;
  $: t = dict[lang]; $: h = t.home;
</script>
<svelte:head><title>{h.title}</title><meta name="description" content={h.lead} /></svelte:head>
<div class="hero"><div class="w grid">
  <div>
    <div class="eyebrow enter">{h.eyebrow}</div>
    <h1 class="enter d1">{h.h1}</h1>
    <p class="lead enter d2">{h.lead}</p>
    <Ctas {lang} />
  </div>
  <div class="ill" aria-hidden="true">
    <img class="phone-img enter d1" src="/hero-phone.png" srcset="/hero-phone.png 1x, /hero-phone@2x.png 2x" width="560" height="620" alt="" />
    <div class="n n1"><i>✓</i><div><b>{h.n1t}</b><small>{h.n1s}</small></div><em>{h.n1m}</em></div>
    <div class="n n2"><i>ن</i><div><b>{h.n2t}</b><small>{h.n2s}</small></div><em>{h.n2m}</em></div>
  </div>
</div></div>
<section id="how"><div class="w">
  <h2 use:reveal>{h.howH}</h2><p class="sub" use:reveal>{h.howSub}</p>
  <div class="g3">
    {#each h.steps as s, i}
      <div class="card lift" use:reveal={{ delay: i * 80 }}><div class="num">{h.nums[i]}</div><h3>{s.t}</h3><p>{s.d}</p></div>
    {/each}
  </div>
</div></section>
<section class="alt"><div class="w">
  <h2 use:reveal>{h.featH}</h2><p class="sub" use:reveal>{h.featSub}</p>
  <FeatureGrid {lang} />
</div></section>
<Honesty {lang} />
<style>
.hero{background:var(--surface);border-bottom:1px solid var(--border);padding-block:80px;overflow:hidden}
.grid{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center}
.num{width:36px;height:36px;border-radius:10px;background:var(--tint);color:var(--primary);font-weight:800;display:grid;place-items:center;margin-bottom:14px}
.ill{position:relative;container-type:inline-size;width:100%;max-width:440px;margin-inline:auto}
/* card geometry mirrors designer hero-phone.html (560x620 canvas); physical right matches the non-mirrored device image */
.n{position:absolute;width:51.8cqw;background:#fff;border-radius:2.9cqw;padding:2.5cqw 2.9cqw;display:flex;gap:2.1cqw;align-items:center;box-shadow:0 3.2cqw 7cqw rgba(10,10,50,.32);animation:float 4.6s ease-in-out infinite alternate;will-change:transform;text-align:start}
.n i{width:7.5cqw;height:7.5cqw;border-radius:2.1cqw;flex:none;display:grid;place-items:center;color:#fff;font-style:normal;font-weight:800;font-size:3.2cqw}
.n>div{min-width:0}.n b{display:block;font-size:2.9cqw;color:#1A1D2B;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.n small{display:block;font-size:2.1cqw;color:#6B7086}
.n em{font-style:normal;font-size:2cqw;color:#8A8FA3;margin-inline-start:auto;align-self:flex-start}
.n1{right:4.3cqw;top:33.9%}.n1 i{background:#0E9F8E}
.n2{right:11.4cqw;top:51.3%;animation-delay:-.9s}.n2 i{background:#3B3FB6}
@keyframes float{from{transform:translateY(-4px)}to{transform:translateY(4px)}}
@media (prefers-reduced-motion:reduce){.n{animation:none;transition:opacity .15s}}
.phone-img{display:block;width:100%;max-width:440px;height:auto}
@keyframes slideIn{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}
@media (max-width:860px){.hero{padding-block:40px}.grid{grid-template-columns:1fr}.ill{max-width:320px}}
</style>
