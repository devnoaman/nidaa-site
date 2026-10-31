<script lang="ts">
  import Logo from './Logo.svelte';
  import { dict, altPath, DOCS, type Lang } from '$lib/i18n';
  export let lang: Lang; export let path: string;
  $: t = dict[lang];
</script>
<footer><div class="w">
  <Logo text={t.brand} size={18} />
  <a href={DOCS} target="_blank" rel="noopener">{t.footer.docs}</a>
  <span><a href={altPath(path, 'ar')} lang="ar">عربي</a> | <a href={altPath(path, 'en')} lang="en">EN</a></span>
  <span class="legal">{t.footer.legal} <span class="soon">{t.soon}</span></span>
  <div class="sp"></div>
  <span>{t.footer.rights}</span>
</div></footer>
<style>
footer{padding-block:36px;color:#6B7086;font-size:14px}
.w{display:flex;gap:24px;align-items:center;flex-wrap:wrap}
a{text-decoration:none}a:hover{color:var(--primary)}
.sp{flex:1}
</style>
