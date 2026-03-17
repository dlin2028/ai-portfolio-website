<script lang="ts">
  import { isMenuOpen, activeSection } from '$lib/stores/navigation';

  const navItems = [
    { label: 'Home',      href: '#hero' },
    { label: 'Profile',   href: '#about' },
    { label: 'Campaigns', href: '#experience' },
    { label: 'Units',     href: '#projects' },
    { label: 'Research',  href: '#tech' },
    { label: 'Comms',     href: '#contact' },
  ];

  function toggleMenu() {
    isMenuOpen.update((v) => !v);
  }

  function closeMenu() {
    isMenuOpen.set(false);
  }

  function handleNavClick(href: string) {
    closeMenu();
    const id = href.replace('#', '');
    activeSection.set(id);
  }
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50"
  style="background: rgba(10,14,26,0.92); border-bottom: 1px solid rgba(26,61,107,0.8); backdrop-filter: blur(12px); box-shadow: 0 0 24px rgba(0,136,204,0.08);"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
    <!-- Logo -->
    <a
      href="#hero"
      onclick={() => handleNavClick('#hero')}
      class="flex items-center gap-2 no-underline"
      style="text-decoration: none;"
    >
      <span
        class="text-xs tracking-widest uppercase"
        style="font-family: 'Share Tech Mono', monospace; color: #00d4ff; text-shadow: 0 0 12px rgba(0,212,255,0.6);"
      >
        UEF //
      </span>
      <span
        class="font-bold tracking-widest uppercase"
        style="font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; color: #e8f0ff; letter-spacing: 0.18em;"
      >
        DAVID LIN
      </span>
    </a>

    <!-- Desktop nav -->
    <div class="hidden md:flex items-center gap-1">
      {#each navItems as item}
        <a
          href={item.href}
          class="nav-link"
          class:active={$activeSection === item.href.replace('#', '')}
          onclick={() => handleNavClick(item.href)}
        >
          {item.label}
        </a>
      {/each}
    </div>

    <!-- Mobile hamburger -->
    <button
      class="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-0"
      onclick={toggleMenu}
      aria-label="Toggle menu"
    >
      <span
        class="block w-5 h-0.5 transition-all duration-200"
        style="background: {$isMenuOpen ? '#00d4ff' : '#8aaabb'}; transform: {$isMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none'};"
      ></span>
      <span
        class="block w-5 h-0.5 transition-all duration-200"
        style="background: {$isMenuOpen ? '#00d4ff' : '#8aaabb'}; opacity: {$isMenuOpen ? '0' : '1'};"
      ></span>
      <span
        class="block w-5 h-0.5 transition-all duration-200"
        style="background: {$isMenuOpen ? '#00d4ff' : '#8aaabb'}; transform: {$isMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none'};"
      ></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if $isMenuOpen}
    <div
      class="md:hidden"
      style="background: rgba(10,14,26,0.98); border-top: 1px solid rgba(26,61,107,0.8);"
    >
      {#each navItems as item}
        <a
          href={item.href}
          class="block px-6 py-3 nav-link"
          onclick={() => handleNavClick(item.href)}
        >
          {item.label}
        </a>
      {/each}
    </div>
  {/if}
</nav>

<!-- Spacer for fixed nav -->
<div style="height: 56px;"></div>
