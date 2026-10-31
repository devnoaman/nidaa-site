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
    <div class="phone enter d1"><span class="notch"></span><span class="scr"><span class="sb" dir="ltr"><b>9:41</b><span class="ic"><i></i><i></i><i></i></span></span><span class="clk" dir="ltr">9:41</span><span class="dt">{lang === 'ar' ? 'السبت ٣١ أكتوبر' : 'Saturday, Oct 31'}</span><span class="hb"></span></span></div>
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
.ill{position:relative;height:340px;max-width:100%;overflow:hidden}
.phone{position:absolute;inset-inline-end:40px;top:6px;width:200px;max-width:60%;height:320px;border-radius:34px;background:#1E1F3B;padding:10px;box-shadow:0 18px 40px rgba(30,31,59,.18)}
.phone .sb{display:flex;justify-content:space-between;align-items:center;padding:12px 18px 0;font-size:11px;color:#1E1F3B}
.phone .ic{display:flex;gap:3px}.phone .ic i{width:12px;height:7px;border-radius:2px;background:#1E1F3B;opacity:.8}
.phone .clk{display:block;text-align:center;font-size:44px;font-weight:300;color:#1E1F3B;margin-top:26px;line-height:1}
.phone .dt{display:block;text-align:center;font-size:11px;color:var(--muted);margin-top:6px}
.phone .hb{position:absolute;bottom:18px;inset-inline-start:50%;translate:-50% 0;width:70px;height:4px;border-radius:4px;background:#1E1F3B;opacity:.6}
.phone .scr{position:relative;display:block;height:100%;border-radius:26px;background:linear-gradient(180deg,#F4F4FB,#FAFAFC)}
.phone .notch{position:absolute;top:16px;inset-inline-start:50%;translate:-50% 0;width:64px;height:16px;border-radius:10px;background:#1E1F3B;z-index:1}
.note{position:absolute;width:290px;max-width:calc(100% - 20px);background:var(--surface);border:1px solid var(--border);border-radius:var(--r-card);padding:18px 20px;box-shadow:var(--sh);display:flex;gap:10px;align-items:center;font-size:13px;line-height:1.5}
.note i{width:30px;height:30px;border-radius:8px;background:var(--primary);flex:none}
.n1{inset-inline-start:0;top:80px;z-index:2}
.n2{inset-inline-start:12px;top:190px;z-index:1;opacity:.9;box-shadow:0 10px 0 -2px rgba(59,63,182,.06),var(--sh)}
@keyframes slideIn{from{opacity:0;transform:translateX(12px)}to{opacity:1;transform:none}}
.note.enter{animation-name:slideIn}
@media (max-width:860px){.hero{padding-block:40px}.grid{grid-template-columns:1fr}.ill{height:270px}.phone{height:250px;width:160px;inset-inline-end:8px}.phone .clk{font-size:28px;margin-top:18px}.note{width:min(250px,calc(100% - 16px));padding:14px 16px}.n1{top:40px}.n2{top:140px;inset-inline-start:10px}}
</style>
