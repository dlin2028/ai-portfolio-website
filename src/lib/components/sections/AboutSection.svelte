<script lang="ts">
  import { inView } from '$lib/actions/inView';

  let visible = $state(false);
</script>

<section
  id="about"
  class="py-24 px-4"
  style="background: #0a0e1a;"
  use:inView
  oninview={() => (visible = true)}
>
  <div class="max-w-3xl mx-auto">
    <!-- Section header -->
    <div
      class="mb-12 text-center reveal-hidden"
      class:reveal-visible={visible}
    >
      <div class="tactical-label mb-2" style="color: rgba(0,212,255,0.5); letter-spacing: 0.2em;">
        ◆ INTEL FILE ◆
      </div>
      <h2 class="section-header">COMMANDER PROFILE</h2>
    </div>

    <!-- Content panel -->
    <div
      class="hud-panel p-8 reveal-hidden"
      class:reveal-visible={visible}
      style="transition-delay: 0.15s;"
    >
      <!-- Top meta row -->
      <div class="flex flex-wrap gap-6 mb-6 pb-4" style="border-bottom: 1px solid rgba(26,61,107,0.5);">
        <div>
          <div class="tactical-label" style="color: rgba(0,212,255,0.4);">DESIGNATION</div>
          <div style="font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; color: #e8f0ff; font-weight: 600;">
            David Lin
          </div>
        </div>
        <div>
          <div class="tactical-label" style="color: rgba(0,212,255,0.4);">FACTION</div>
          <div style="font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; color: #00d4ff; font-weight: 600;">
            UEF // Software Division
          </div>
        </div>
        <div>
          <div class="tactical-label" style="color: rgba(0,212,255,0.4);">CLEARANCE</div>
          <div style="font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; color: #ffcc00; font-weight: 600;">
            LEVEL 5
          </div>
        </div>
      </div>

      <!-- Bio text -->
      <p style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.8; color: #8aaabb;">
        From silicon to SaaS — I build software that matters. Software engineer with deep roots in
        systems engineering and a track record of shipping products that change business metrics.
        At Fitch Solutions, rebuilt search infrastructure saving $300k/yr.
        At Estée Lauder, cut response time by 97% and briefed the Global Brand President.
      </p>

      <p class="mt-4" style="font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.8; color: #8aaabb;">
        Beyond the professional battlefield: implemented a Linux kernel, designed custom CPU
        architectures, and verified RISC-V processors. The mission never ends.
      </p>

      <!-- Stat bar -->
      <div class="mt-6 pt-4 flex flex-wrap gap-4" style="border-top: 1px solid rgba(26,61,107,0.5);">
        {#each [['Backend', '#00d4ff'], ['Systems', '#00ccaa'], ['AI/LLM', '#ffcc00'], ['Frontend', '#0088cc']] as [skill, color]}
          <div
            class="tactical-label px-3 py-1"
            style="color: {color}; border: 1px solid {color}33; background: {color}11;"
          >
            {skill}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
