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
.ill{display:flex;justify-content:center;align-items:center;max-width:100%}
.phone-img{display:block;width:100%;max-width:440px;height:auto}
@keyframes slideIn{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}
@media (max-width:860px){.hero{padding-block:40px}.grid{grid-template-columns:1fr}.phone-img{max-width:320px}}
</style>
