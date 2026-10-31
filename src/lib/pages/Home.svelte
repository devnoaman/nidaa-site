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
    <div class="phone enter d1"></div>
    <div class="note n1 enter d3"><i></i><div><b>{h.n1t}</b><br />{h.n1s}</div></div>
    <div class="note n2 enter d4"><i></i><div><b>{h.n2t}</b><br /><span dir="ltr">{h.n2s}</span></div></div>
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
.ill{position:relative;height:320px}
.phone{position:absolute;inset-inline-end:40px;top:10px;width:220px;height:300px;border-radius:28px;background:#FAFAFC;border:1px solid var(--border)}
.note{position:absolute;width:300px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);padding:18px 20px;box-shadow:var(--sh);display:flex;gap:10px;align-items:center;font-size:13px;line-height:1.5}
.note i{width:30px;height:30px;border-radius:8px;background:var(--primary);flex:none}
.n1{inset-inline-start:0;top:70px}
.n2{inset-inline-start:30px;top:180px;opacity:.85}
@keyframes slideIn{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}
.note.enter{animation-name:slideIn}
@media (max-width:860px){.hero{padding-block:40px}.grid{grid-template-columns:1fr}.ill{height:250px}.phone{height:240px;inset-inline-end:10px}.note{width:250px}.n1{top:40px}.n2{top:130px}}
</style>
