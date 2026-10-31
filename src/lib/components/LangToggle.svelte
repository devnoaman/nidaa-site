<script lang="ts">
  import { altPath, type Lang } from '$lib/i18n';
  export let lang: Lang; export let path: string;
</script>
<div class="lang" class:en={lang === 'en'} role="group" aria-label="Language">
  <span class="knob" aria-hidden="true"></span>
  <a href={altPath(path, 'ar')} hreflang="ar" lang="ar" aria-current={lang === 'ar' ? 'true' : undefined} data-sveltekit-noscroll>عربي</a>
  <a href={altPath(path, 'en')} hreflang="en" lang="en" aria-current={lang === 'en' ? 'true' : undefined} data-sveltekit-noscroll>EN</a>
</div>
<style>
.lang{position:relative;direction:rtl;border:1px solid var(--border);border-radius:var(--r-pill);padding:3px;display:grid;grid-template-columns:1fr 1fr;font-size:13px;min-width:104px}
.knob{position:absolute;inset-block:3px;right:3px;width:calc(50% - 3px);background:var(--primary);border-radius:var(--r-pill);transition:transform 200ms var(--ease)}
.en .knob{transform:translateX(-100%)}
a{position:relative;z-index:1;text-align:center;padding:2px 12px;color:var(--muted);text-decoration:none;transition:color 200ms ease-out}
a[aria-current]{color:#fff;font-weight:700}
</style>
