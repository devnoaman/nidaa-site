<script lang="ts">
  import { slide } from 'svelte/transition';
  import Logo from './Logo.svelte';
  import LangToggle from './LangToggle.svelte';
  import { dict, href, DOCS, type Lang } from '$lib/i18n';
  export let lang: Lang; export let path: string;
  let open = false;
  $: t = dict[lang];
  $: bare = path.replace(/^\/en(?=\/|$)/, '') || '/';
  $: links = [
    { p: '/', l: t.nav.home }, { p: '/features', l: t.nav.features },
    { p: '/pricing', l: t.nav.pricing }, { p: '/contact', l: t.nav.contact }
  ];
  $: path, (open = false);
</script>
<nav aria-label="Main">
  <div class="w bar">
    <a class="home" href={href(lang, '/')}><Logo text={t.brand} /></a>
    <div class="links">
      {#each links as k}<a href={href(lang, k.p)} class:on={bare === k.p} aria-current={bare === k.p ? 'page' : undefined}>{k.l}</a>{/each}
      <a href={DOCS} target="_blank" rel="noopener">{t.nav.docs}</a>
    </div>
    <div class="sp"></div>
    <div class="desk"><LangToggle {lang} {path} /></div>
    <a class="btn sm desk" href={DOCS} target="_blank" rel="noopener">{t.nav.cta}</a>
    <button class="burger" aria-expanded={open} aria-controls="mnav" aria-label={t.nav.menu} on:click={() => (open = !open)}>
      <span class:x={open}></span>
    </button>
  </div>
  {#if open}
    <div id="mnav" class="mnav" transition:slide={{ duration: 240 }}>
      <div class="w">
        {#each links as k}<a href={href(lang, k.p)} class:on={bare === k.p}>{k.l}</a>{/each}
        <a href={DOCS} target="_blank" rel="noopener">{t.nav.docs}</a>
        <div class="mrow"><LangToggle {lang} {path} /><a class="btn sm" href={DOCS} target="_blank" rel="noopener">{t.nav.cta}</a></div>
      </div>
    </div>
  {/if}
</nav>
<style>
nav{background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:20}
.bar{display:flex;align-items:center;height:68px;gap:28px}
.home{text-decoration:none}
.links{display:flex;gap:28px}
.links a,.mnav a:not(.btn){color:var(--muted);text-decoration:none;font-size:15px;transition:color var(--t-ui) ease-out}
.links a:hover{color:var(--primary)}
a.on{color:var(--primary)!important;font-weight:700}
.sp{flex:1}
.burger{display:none;width:44px;height:44px;border:1px solid var(--border);border-radius:var(--r-btn);background:var(--surface);cursor:pointer;place-items:center}
.burger span,.burger span::before,.burger span::after{display:block;width:18px;height:2px;background:var(--primary);border-radius:2px;position:relative;transition:transform var(--t-ui) var(--ease),background var(--t-ui)}
.burger span::before,.burger span::after{content:'';position:absolute;inset-inline:0}
.burger span::before{top:-6px}.burger span::after{top:6px}
.burger span.x{background:transparent}.burger span.x::before{transform:translateY(6px) rotate(45deg)}.burger span.x::after{transform:translateY(-6px) rotate(-45deg)}
.mnav{border-top:1px solid var(--border);overflow:hidden}
.mnav .w{display:flex;flex-direction:column;gap:4px;padding-block:12px 18px}
.mnav a:not(.btn){padding:10px 0;font-size:16px}
.mrow{display:flex;gap:12px;align-items:center;justify-content:space-between;margin-top:8px}
@media (max-width:860px){.links,.desk{display:none}.burger{display:grid}}
</style>
