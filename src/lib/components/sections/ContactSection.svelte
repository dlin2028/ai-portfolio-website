<script lang="ts">
  import { inView } from '$lib/actions/inView';

  let visible = $state(false);
</script>

<section
  id="contact"
  class="py-24 px-4"
  style="background: #0f1626;"
  use:inView
  oninview={() => (visible = true)}
>
  <div class="max-w-2xl mx-auto text-center">
    <!-- Section header -->
    <div
      class="mb-12 reveal-hidden"
      class:reveal-visible={visible}
    >
      <div class="tactical-label mb-2" style="color: rgba(0,212,255,0.5); letter-spacing: 0.2em;">
        ◆ OPEN CHANNEL ◆
      </div>
      <h2 class="section-header">TRANSMISSION TERMINAL</h2>
    </div>

    <!-- Panel -->
    <div
      class="hud-panel p-8 reveal-hidden"
      class:reveal-visible={visible}
      style="transition-delay: 0.15s;"
    >
      <!-- Transmission animation header -->
      <div
        class="tactical-label mb-6 pb-4"
        style="color: rgba(0,212,255,0.5); border-bottom: 1px solid rgba(26,61,107,0.5); letter-spacing: 0.15em;"
      >
        SIGNAL STRENGTH: OPTIMAL &nbsp;|&nbsp; ENCRYPTION: ACTIVE
      </div>

      <p
        class="mb-8 leading-relaxed"
        style="font-family: 'Inter', sans-serif; font-size: 1rem; color: #8aaabb;"
      >
        Whether you're building something ambitious, looking for a senior engineer, or want to
        discuss the merits of Bun over Node.js — open a channel.
      </p>

      <!-- Contact info -->
      <div class="mb-8 p-4 energy-border" style="background: rgba(0,136,204,0.05); border-radius: 2px;">
        <div class="tactical-label mb-1" style="color: rgba(0,212,255,0.4);">PRIMARY FREQUENCY</div>
        <div
          style="font-family: 'Share Tech Mono', monospace; font-size: 0.95rem; color: #e8f0ff;"
        >
          dlin2028 [at] gmail.com
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="https://github.com/dlin2028"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-supcom"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/david-lin-dev"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-supcom"
          style="color: #00ccaa; border-color: rgba(0,204,170,0.5);"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        <a
          href="mailto:dlin2028@gmail.com"
          class="btn-supcom"
          style="color: #ffcc00; border-color: rgba(255,204,0,0.5);"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Email
        </a>
      </div>

      <!-- Footer divider -->
      <div class="mt-8 pt-6" style="border-top: 1px solid rgba(26,61,107,0.5);">
        <div class="tactical-label" style="color: rgba(138,170,187,0.3);">
          © 2025 DAVID LIN &nbsp;|&nbsp; UEF SOFTWARE DIVISION &nbsp;|&nbsp; ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  </div>
</section>
