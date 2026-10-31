<script lang="ts">import { dict, type Lang } from '$lib/i18n'; import { reveal } from '$lib/reveal'; export let lang: Lang;</script>
<div class="hon"><div class="w" use:reveal><div class="bar"></div><p><b>{dict[lang].honestyLabel}</b> {dict[lang].honesty}</p></div></div>
<style>
.hon{background:var(--surface);border-block:1px solid var(--border);padding-block:36px}
.w{display:flex;gap:16px;align-items:flex-start}
.bar{width:4px;align-self:stretch;background:var(--accent);border-radius:4px;flex:none}
p{font-size:17px;line-height:1.9}
</style>
