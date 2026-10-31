<script lang="ts">
  import { dict, href, type Lang } from '$lib/i18n'; import { reveal } from '$lib/reveal';
  import Honesty from '$lib/components/Honesty.svelte';
  export let lang: Lang; $: t = dict[lang]; $: p = t.pricing;
</script>
<svelte:head><title>{p.title}</title></svelte:head>
<div class="page-hero"><div class="w"><div class="eyebrow enter">{p.eyebrow}</div><h1 class="enter d1">{p.h1}</h1></div></div>
<section><div class="w">
  <div class="g3">
    {#each p.tiers as tier, i}
      <div class="card lift tier" class:hi={'hi' in tier} use:reveal={{ delay: i * 80 }}>
        <h3>{tier.n}</h3><p>{tier.d}</p>
        <div class="price">{t.soon}</div>
        <ul>{#each tier.f as x}<li>{x}</li>{/each}</ul>
        <a class="btn" class:outline={!('hi' in tier)} href={href(lang, '/contact')}>{p.cta}</a>
      </div>
    {/each}
  </div>
  <p class="sub note" use:reveal>{p.note}</p>
</div></section>
<Honesty {lang} />
<style>
.tier{display:flex;flex-direction:column}
.tier.hi{border-color:var(--primary)}
.price{font-size:30px;font-weight:800;color:var(--faint);margin-block:18px}
ul{padding-inline-start:18px;color:var(--muted);line-height:2;font-size:15px;flex:1}
.btn{margin-top:18px;width:100%}
.note{margin-top:24px;margin-bottom:0}
</style>
