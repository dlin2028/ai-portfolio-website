<script lang="ts">
  import '../app.css';
  import NavBar from '$lib/components/hud/NavBar.svelte';

  let { children } = $props();
</script>

<NavBar />
<main>
  {@render children()}
</main>

<style>
  main {
    min-height: 100vh;
    background-color: #0a0e1a;
  }
</style>
