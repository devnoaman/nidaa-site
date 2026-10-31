<script lang="ts">import { dict, DOCS, type Lang } from '$lib/i18n'; export let lang: Lang;</script>
<div class="ctas enter d3">
  <a class="btn" href={DOCS} target="_blank" rel="noopener">{dict[lang].readDocs} <span class="arr" aria-hidden="true">{lang === 'ar' ? '←' : '→'}</span></a>
  <span class="btn ghost" role="link" aria-disabled="true">{dict[lang].console} <span class="soon">{dict[lang].soon}</span></span>
</div>
<style>
.ctas{display:flex;gap:12px;margin-top:28px;flex-wrap:wrap}
@media (max-width:860px){.ctas{flex-direction:column}.ctas .btn{min-height:48px;padding:15px}}
</style>
