<script lang="ts">
  import { onMount } from 'svelte';
  import ThreeCanvas from '$lib/components/three/ThreeCanvas.svelte';
  import type { PersonalInfo } from '$lib/types/portfolio';

  let { personalInfo }: { personalInfo: PersonalInfo } = $props();

  let roleIndex = $state(0);
  let displayText = $state('');
  let isDeleting = $state(false);
  let charIndex = $state(0);
  let visible = $state(false);

  onMount(() => {
    visible = true;
    let timeout: ReturnType<typeof setTimeout>;

    function typeWriter() {
      const currentRole = personalInfo.roles[roleIndex];
      if (!isDeleting) {
        displayText = currentRole.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentRole.length) {
          timeout = setTimeout(() => {
            isDeleting = true;
            typeWriter();
          }, 1800);
          return;
        }
      } else {
        displayText = currentRole.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % personalInfo.roles.length;
        }
      }
      timeout = setTimeout(typeWriter, isDeleting ? 50 : 85);
    }

    timeout = setTimeout(typeWriter, 600);
    return () => clearTimeout(timeout);
  });
</script>

<section
  id="hero"
  class="relative min-h-screen flex items-center justify-center overflow-hidden"
  style="background: #0a0e1a;"
>
  <!-- Three.js background -->
  <ThreeCanvas />

  <!-- Scanline overlay -->
  <div class="scanline-overlay"></div>

  <!-- HUD corner accents -->
  <div class="absolute top-4 left-4 w-16 h-16 pointer-events-none"
    style="border-top: 2px solid rgba(0,212,255,0.4); border-left: 2px solid rgba(0,212,255,0.4);">
  </div>
  <div class="absolute top-4 right-4 w-16 h-16 pointer-events-none"
    style="border-top: 2px solid rgba(0,212,255,0.4); border-right: 2px solid rgba(0,212,255,0.4);">
  </div>
  <div class="absolute bottom-16 left-4 w-16 h-16 pointer-events-none"
    style="border-bottom: 2px solid rgba(0,212,255,0.4); border-left: 2px solid rgba(0,212,255,0.4);">
  </div>
  <div class="absolute bottom-16 right-4 w-16 h-16 pointer-events-none"
    style="border-bottom: 2px solid rgba(0,212,255,0.4); border-right: 2px solid rgba(0,212,255,0.4);">
  </div>

  <!-- Status readouts -->
  <div class="absolute top-6 left-6 pointer-events-none" style="opacity: {visible ? 1 : 0}; transition: opacity 1s 0.5s;">
    <div class="tactical-label" style="color: rgba(0,212,255,0.5);">COMMANDER ONLINE</div>
    <div class="tactical-label mt-1" style="color: rgba(0,212,255,0.3);">STATUS: ACTIVE</div>
  </div>
  <div class="absolute top-6 right-6 pointer-events-none text-right" style="opacity: {visible ? 1 : 0}; transition: opacity 1s 0.7s;">
    <div class="tactical-label" style="color: rgba(0,212,255,0.5);">UEF // SECTOR 7</div>
    <div class="tactical-label mt-1" style="color: rgba(0,212,255,0.3);">EARTH-2</div>
  </div>

  <!-- Main content -->
  <div
    class="relative z-10 text-center px-4"
    style="opacity: {visible ? 1 : 0}; transform: {visible ? 'translateY(0)' : 'translateY(20px)'}; transition: opacity 0.8s 0.2s, transform 0.8s 0.2s;"
  >
    <div class="tactical-label mb-3" style="color: rgba(0,212,255,0.6); letter-spacing: 0.25em;">
      ◆ INITIALIZING COMMANDER PROFILE ◆
    </div>

    <h1
      class="font-bold uppercase tracking-widest mb-4"
      style="
        font-family: 'Rajdhani', sans-serif;
        font-size: clamp(2.5rem, 8vw, 6rem);
        color: #e8f0ff;
        text-shadow: 0 0 40px rgba(0,136,204,0.5), 0 0 80px rgba(0,136,204,0.2);
        line-height: 1;
        letter-spacing: 0.12em;
      "
    >
      {personalInfo.name}
    </h1>

    <div
      class="flex items-center justify-center gap-2 mb-8"
      style="min-height: 2rem;"
    >
      <span class="tactical-label" style="color: rgba(0,212,255,0.5);">//</span>
      <span
        style="
          font-family: 'Share Tech Mono', monospace;
          font-size: clamp(0.9rem, 2.5vw, 1.2rem);
          color: #00d4ff;
          text-shadow: 0 0 12px rgba(0,212,255,0.4);
          min-width: 16ch;
          text-align: left;
        "
      >
        {displayText}<span style="animation: blink-cursor 1s step-end infinite; color: #00d4ff;">█</span>
      </span>
      <span class="tactical-label" style="color: rgba(0,212,255,0.5);">//</span>
    </div>

    <div class="flex flex-wrap items-center justify-center gap-3">
      <a href="#about" class="btn-supcom">View Profile</a>
      <a href="#projects" class="btn-supcom" style="color: #ffcc00; border-color: rgba(255,204,0,0.5);">Unit Database</a>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div
    class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    style="opacity: {visible ? 0.7 : 0}; transition: opacity 1s 1.5s;"
  >
    <div class="tactical-label" style="color: rgba(0,212,255,0.5); font-size: 0.6rem;">SCROLL DOWN</div>
    <div
      style="width: 1px; height: 32px; background: linear-gradient(to bottom, rgba(0,212,255,0.6), transparent);"
    ></div>
  </div>
</section>
