<script lang="ts">
  import '@fontsource/cairo/400.css';
  import '@fontsource/cairo/700.css';
  import '@fontsource/cairo/800.css';
  import '../app.css';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import type { Lang } from '$lib/i18n';
  $: path = $page.url.pathname;
  $: lang = (path === '/en' || path.startsWith('/en/') ? 'en' : 'ar') as Lang;
  $: if (typeof document !== 'undefined') { document.documentElement.lang = lang; document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl'; }
</script>
<Nav {lang} {path} />
{#key lang}<main in:fade={{ duration: 180 }}><slot /></main>{/key}
<Footer {lang} {path} />
