<script lang="ts">
  import { fade } from 'svelte/transition';
  import { dict, DOCS, type Lang } from '$lib/i18n'; import { reveal } from '$lib/reveal';
  export let lang: Lang; $: t = dict[lang]; $: c = t.contact;
  let state: 'idle' | 'sending' | 'done' = 'idle';
  let name = '', email = '', message = '';
  async function submit() {
    state = 'sending';
    // v0.1: no backend yet (TBD) — log locally only.
    console.log('[nidaa-site] contact form', { name, email, message, lang });
    await new Promise((r) => setTimeout(r, 700));
    state = 'done'; name = email = message = '';
  }
</script>
<svelte:head><title>{c.title}</title></svelte:head>
<div class="page-hero"><div class="w"><div class="eyebrow enter">{c.eyebrow}</div><h1 class="enter d1">{c.h1}</h1></div></div>
<section><div class="w cg">
  <form class="card" use:reveal on:submit|preventDefault={submit}>
    <label for="n">{c.name}</label><input id="n" name="name" required autocomplete="name" placeholder={c.namePh} bind:value={name} />
    <label for="e">{c.email}</label><input id="e" name="email" type="email" required dir="ltr" autocomplete="email" placeholder={c.emailPh} bind:value={email} />
    <label for="m">{c.msg}</label><textarea id="m" name="message" required rows="5" placeholder={c.msgPh} bind:value={message}></textarea>
    <button class="btn send" type="submit" disabled={state === 'sending'}>
      {#if state === 'sending'}<span class="spin" aria-hidden="true"></span>{c.sending}{:else}{c.send}{/if}
    </button>
    {#if state === 'done'}<p class="ok" role="status" transition:fade={{ duration: 240 }}>{c.ok}</p>{/if}
  </form>
  <div class="side">
    <div class="card" use:reveal={{ delay: 80 }}><h3>{c.mailH}</h3><p dir="ltr" class="ph">{c.mail}</p></div>
    <div class="card" use:reveal={{ delay: 160 }}><h3>{c.waH}</h3><p>{c.wa}</p></div>
    <div class="card" use:reveal={{ delay: 240 }}><h3>{c.devH}</h3><p>{c.dev}</p>
      <a class="btn sm" href={DOCS} target="_blank" rel="noopener">{t.readDocs} <span class="arr" aria-hidden="true">{lang === 'ar' ? '←' : '→'}</span></a></div>
  </div>
</div></section>
<style>
.cg{display:grid;grid-template-columns:1.3fr .7fr;gap:20px;align-items:start}
.side{display:flex;flex-direction:column;gap:16px}
.ph{text-align:end}
label{display:block;font-weight:700;font-size:14px;margin:14px 0 6px}
label:first-child{margin-top:0}
input,textarea{width:100%;font:inherit;font-size:15px;color:var(--text);border:1px solid var(--border);border-radius:var(--r-btn);padding:12px 14px;background:#FAFAFC;transition:border-color 200ms ease-out,box-shadow 200ms ease-out;resize:vertical}
input[dir=ltr]{text-align:start}
:global([dir=rtl]) input[dir=ltr]::placeholder{text-align:right}
input:focus,textarea:focus{outline:none;border-color:var(--primary);box-shadow:0 0 0 3px var(--tint);background:var(--surface)}
.send{margin-top:18px}.send:disabled{opacity:.8;cursor:progress}
.side .btn{margin-top:10px}
.spin{width:16px;height:16px;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;border-radius:50%;animation:sp .7s linear infinite}
@keyframes sp{to{transform:rotate(360deg)}}
.ok{margin-top:14px;color:var(--accent);font-weight:700}
@media (max-width:860px){.cg{grid-template-columns:1fr}.send{width:100%;min-height:48px}}
</style>
