<script lang="ts">import { dict, type Lang } from '$lib/i18n'; import { reveal } from '$lib/reveal'; export let lang: Lang;</script>
<div class="g3">
  {#each dict[lang].features.list as f, i}
    <div class="card lift" use:reveal={{ delay: Math.min(i, 5) * 80 }}><div class="ic" aria-hidden="true">{f.ic}</div><h3>{f.t}</h3><p>{f.d}</p></div>
  {/each}
</div>
<style>.ic{width:36px;height:36px;border-radius:10px;border:1px solid var(--border);display:grid;place-items:center;color:var(--accent);font-weight:800;margin-bottom:12px}</style>
