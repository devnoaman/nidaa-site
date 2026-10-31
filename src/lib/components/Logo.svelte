<script lang="ts">export let text: string; export let size = 24;</script>
<span class="logo" style="font-size:{size}px"><i aria-hidden="true"></i>{text}</span>
<style>
.logo{font-weight:800;color:var(--primary);display:inline-flex;gap:8px;align-items:center}
i{width:28px;height:28px;border-radius:8px;background:var(--primary);display:inline-block;position:relative}
i::after{content:'';position:absolute;inset:9px;border-radius:50%;background:var(--accent)}
</style>
