<script lang="ts">
  import { inView } from '$lib/actions/inView';
  import type { Technology } from '$lib/types/portfolio';

  let { technologies }: { technologies: Technology[] } = $props();

  let revealedItems = $state<Set<number>>(new Set());
  let headerVisible = $state(false);

  function revealItem(index: number) {
    revealedItems.add(index);
    revealedItems = new Set(revealedItems);
  }
</script>

<section
  id="tech"
  class="py-24 px-4"
  style="background: #0a0e1a;"
>
  <div class="max-w-5xl mx-auto">
    <!-- Section header -->
    <div
      class="mb-12 text-center reveal-hidden"
      class:reveal-visible={headerVisible}
      use:inView
      oninview={() => (headerVisible = true)}
    >
      <div class="tactical-label mb-2" style="color: rgba(0,212,255,0.5); letter-spacing: 0.2em;">
        ◆ TECH TIER ◆
      </div>
      <h2 class="section-header">RESEARCH TREE</h2>
    </div>

    <!-- Tech grid -->
    <div class="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-4 md:gap-6">
      {#each technologies as tech, i}
        <div
          class="flex flex-col items-center gap-2 reveal-hidden"
          class:reveal-visible={revealedItems.has(i)}
          use:inView={{ threshold: 0.1 }}
          oninview={() => revealItem(i)}
          style="transition-delay: {(i % 7) * 0.05}s;"
        >
          <!-- Icon circle -->
          <button
            type="button"
            class="relative flex items-center justify-center rounded-full cursor-default bg-transparent p-0"
            style="
              width: 56px; height: 56px;
              background: #0f1626;
              border: 1px solid rgba(26,61,107,0.8);
              transition: all 0.3s ease;
            "
            onmouseenter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(0,136,204,0.7)';
              el.style.boxShadow = '0 0 16px rgba(0,212,255,0.3), inset 0 0 8px rgba(0,136,204,0.1)';
              el.style.transform = 'scale(1.15)';
            }}
            onmouseleave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'rgba(26,61,107,0.8)';
              el.style.boxShadow = 'none';
              el.style.transform = 'scale(1)';
            }}
            aria-label={tech.name}
          >
            <img
              src="/{tech.icon}"
              alt={tech.name}
              class="w-8 h-8 object-contain"
              loading="lazy"
            />
          </button>

          <!-- Name -->
          <span
            class="tactical-label text-center leading-tight"
            style="font-size: 0.6rem; color: rgba(138,170,187,0.7); max-width: 56px;"
          >
            {tech.name}
          </span>
        </div>
      {/each}
    </div>
  </div>
</section>
