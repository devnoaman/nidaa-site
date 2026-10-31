<script lang="ts">
  import { dict, type Lang } from '$lib/i18n'; import { reveal } from '$lib/reveal';
  import FeatureGrid from '$lib/components/FeatureGrid.svelte'; import Honesty from '$lib/components/Honesty.svelte';
  export let lang: Lang; $: f = dict[lang].features;
</script>
<svelte:head><title>{f.title}</title></svelte:head>
<div class="page-hero"><div class="w"><div class="eyebrow enter">{f.eyebrow}</div><h1 class="enter d1">{f.h1}</h1></div></div>
<section><div class="w"><FeatureGrid {lang} /></div></section>
<section class="alt"><div class="w">
  <h2 use:reveal>{f.sdkH}</h2><p class="sub" use:reveal>{f.sdkSub}</p>
  <pre class="code" use:reveal><code><span class="k">await</span> Nidaa.init(appKey: <span class="s">"APP_KEY"</span>);
Nidaa.subscribe(<span class="s">"offers"</span>);</code></pre>
</div></section>
<Honesty {lang} />
<style>
.code{direction:ltr;text-align:left;background:#14162A;color:#D8DAF0;border-radius:var(--r-card);padding:20px;font:14px/1.7 ui-monospace,SFMono-Regular,Menlo,monospace;overflow-x:auto}
.k{color:#9EA3F5}.s{color:#7FD8CB}
</style>
