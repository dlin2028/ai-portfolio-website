<script lang="ts">
  import { inView } from '$lib/actions/inView';
  import type { Project } from '$lib/types/portfolio';

  let { projects }: { projects: Project[] } = $props();

  let revealedItems = $state<Set<number>>(new Set());
  let headerVisible = $state(false);

  function revealItem(index: number) {
    revealedItems.add(index);
    revealedItems = new Set(revealedItems);
  }
</script>

<section
  id="projects"
  class="py-24 px-4"
  style="background: #0f1626;"
>
  <div class="max-w-6xl mx-auto">
    <!-- Section header -->
    <div
      class="mb-12 text-center reveal-hidden"
      class:reveal-visible={headerVisible}
      use:inView
      oninview={() => (headerVisible = true)}
    >
      <div class="tactical-label mb-2" style="color: rgba(0,212,255,0.5); letter-spacing: 0.2em;">
        ◆ DEPLOYED ASSETS ◆
      </div>
      <h2 class="section-header">UNIT DATABASE</h2>
    </div>

    <!-- Project grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each projects as project, i}
        <div
          class="unit-card reveal-hidden"
          class:reveal-visible={revealedItems.has(i)}
          use:inView={{ threshold: 0.1 }}
          oninview={() => revealItem(i)}
          style="transition-delay: {(i % 3) * 0.1}s;"
        >
          <!-- Image -->
          <div class="relative overflow-hidden" style="aspect-ratio: 16/9;">
            <img
              src="/{project.image}"
              alt={project.name}
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              class="absolute inset-0"
              style="background: linear-gradient(to bottom, transparent 50%, rgba(10,14,26,0.95));"
            ></div>

            <!-- GitHub link overlay -->
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              class="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded"
              style="background: rgba(10,14,26,0.8); border: 1px solid rgba(0,136,204,0.4); color: #00d4ff; transition: all 0.2s;"
              aria-label="View source on GitHub"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          </div>

          <!-- Card body -->
          <div class="p-4">
            <h3
              class="font-semibold mb-2"
              style="font-family: 'Rajdhani', sans-serif; font-size: 1.05rem; color: #e8f0ff; letter-spacing: 0.05em;"
            >
              {project.name}
            </h3>
            <p
              class="mb-3 text-sm leading-relaxed"
              style="color: #8aaabb; font-family: 'Inter', sans-serif;"
            >
              {project.description}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5">
              {#each project.tags as tag}
                <span class="tech-tag">#{tag}</span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
