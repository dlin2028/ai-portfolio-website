<script lang="ts">
  import { inView } from '$lib/actions/inView';
  import type { Experience } from '$lib/types/portfolio';

  let { experiences }: { experiences: Experience[] } = $props();

  let visibleItems = $derived(experiences.map(() => false as boolean));
  let revealedItems = $state<Set<number>>(new Set());

  function revealItem(index: number) {
    revealedItems.add(index);
    revealedItems = new Set(revealedItems);
  }

  let headerVisible = $state(false);
</script>

<section
  id="experience"
  class="py-24 px-4"
  style="background: #0a0e1a;"
>
  <div class="max-w-4xl mx-auto">
    <!-- Section header -->
    <div
      class="mb-16 text-center reveal-hidden"
      class:reveal-visible={headerVisible}
      use:inView
      oninview={() => (headerVisible = true)}
    >
      <div class="tactical-label mb-2" style="color: rgba(0,212,255,0.5); letter-spacing: 0.2em;">
        ◆ MISSION LOGS ◆
      </div>
      <h2 class="section-header">CAMPAIGN HISTORY</h2>
    </div>

    <!-- Timeline -->
    <div class="relative">
      <!-- Vertical line -->
      <div
        class="absolute left-5 top-0 bottom-0 w-px md:left-1/2"
        style="background: linear-gradient(to bottom, transparent, rgba(0,136,204,0.5) 10%, rgba(0,136,204,0.5) 90%, transparent);"
      ></div>

      {#each experiences as exp, i}
        <div
          class="relative mb-12 reveal-hidden"
          class:reveal-visible={revealedItems.has(i)}
          use:inView={{ threshold: 0.2 }}
          oninview={() => revealItem(i)}
          style="transition-delay: {i * 0.1}s;"
        >
          <!-- Timeline dot -->
          <div
            class="timeline-dot absolute left-5 -translate-x-1/2 mt-5 md:left-1/2"
            style="top: 0;"
          ></div>

          <!-- Card - alternating sides on desktop -->
          <div
            class="ml-14 md:ml-0"
            class:md:mr-half={i % 2 === 0}
            class:md:ml-half={i % 2 !== 0}
            style="margin-left: 3.5rem; {i % 2 === 0
              ? 'padding-right: calc(50% + 2rem); @media(max-width:768px){padding-right:0}'
              : 'padding-left: calc(50% + 2rem); @media(max-width:768px){padding-left:0}'}"
          >
            <div class="hud-panel p-5">
              <!-- Header row -->
              <div class="flex items-start gap-3 mb-3">
                <div
                  class="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center overflow-hidden"
                  style="background: {exp.iconBg}; border: 1px solid rgba(26,61,107,0.8);"
                >
                  <img
                    src="/{exp.icon}"
                    alt={exp.company_name}
                    class="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <h3
                    class="font-semibold leading-tight"
                    style="font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; color: #e8f0ff; letter-spacing: 0.05em;"
                  >
                    {exp.title}
                  </h3>
                  <div style="font-family: 'Rajdhani', sans-serif; font-size: 0.9rem; color: #00d4ff; font-weight: 500;">
                    {exp.company_name}
                  </div>
                </div>
              </div>

              <!-- Date -->
              <div
                class="tactical-label mb-3 pb-3"
                style="color: rgba(255,204,0,0.7); border-bottom: 1px solid rgba(26,61,107,0.4);"
              >
                ◆ {exp.date}
              </div>

              <!-- Points -->
              <ul class="space-y-2">
                {#each exp.points as point}
                  <li
                    class="flex gap-2"
                    style="font-family: 'Inter', sans-serif; font-size: 0.85rem; line-height: 1.6; color: #8aaabb;"
                  >
                    <span style="color: #00d4ff; flex-shrink: 0; margin-top: 2px;">›</span>
                    <span>{point}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @media (min-width: 768px) {
    .md\:mr-half {
      padding-right: calc(50% + 2rem);
    }
    .md\:ml-half {
      padding-left: calc(50% + 2rem);
      margin-left: 0 !important;
    }
  }
</style>
