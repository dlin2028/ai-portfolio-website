<script lang="ts">
  import type { PageData } from './$types';
  import HeroSection from '$lib/components/sections/HeroSection.svelte';
  import AboutSection from '$lib/components/sections/AboutSection.svelte';
  import ExperienceSection from '$lib/components/sections/ExperienceSection.svelte';
  import ProjectsSection from '$lib/components/sections/ProjectsSection.svelte';
  import TechStackSection from '$lib/components/sections/TechStackSection.svelte';
  import ContactSection from '$lib/components/sections/ContactSection.svelte';

  let { data }: { data: PageData } = $props();
</script>

<HeroSection personalInfo={data.personalInfo} />
<AboutSection />
<ExperienceSection experiences={data.experiences} />
<ProjectsSection projects={data.projects} />
<TechStackSection technologies={data.technologies} />
<ContactSection />
