<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let canvasEl: HTMLCanvasElement | undefined = $state();
  let cleanup: (() => void) | null = $state(null);

  onMount(() => {
    if (!browser || !canvasEl) return;

    import('$lib/three/heroScene').then(({ initScene }) => {
      if (canvasEl) {
        cleanup = initScene(canvasEl);
      }
    });

    return () => {
      cleanup?.();
    };
  });
</script>

<canvas
  bind:this={canvasEl}
  class="absolute inset-0 w-full h-full"
  aria-hidden="true"
></canvas>
