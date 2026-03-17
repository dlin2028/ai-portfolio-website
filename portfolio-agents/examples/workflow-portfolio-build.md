# Multi-Agent Workflow: Portfolio Build Campaign

> *"Commander, all units are standing by. The battlefield is prepared. Issue the order."*

Full build sequence for David Lin's Three.js / Bun / SvelteKit portfolio — Supreme Commander themed. Orchestrated by the Supreme Commander ACU, executed by the four-faction specialist team.

**Estimated build phases**: 4 | **Tech tier sequence**: T1 → T2 → T3 → Experimental

---

## The Command Staff

| Agent | Faction | Role |
|-------|---------|------|
| ⚡ Supreme Commander | ACU | Orchestrator, architect, final gate |
| 🔴 Portfolio Intelligence Officer | Cybran | Data analysis, types, content strategy |
| 🔵 Bun Mass Fabricator | UEF | Runtime, build pipeline, API routes |
| 🔵 SvelteKit Frontline Engineer | UEF | Routing, components, page structure |
| 🟡 Visual Illuminate Designer | Aeon | Design system, Tailwind, SupCom HUD theme |
| 🔶 Three.js Experimental Engineer | Seraphim | 3D scenes, shaders, particles |
| ⚙️ Quantum Gate Performance Engineer | Cross-faction | Bundle optimization, Lighthouse, perf |

---

## Phase 1 — Intelligence & Architecture (Run in parallel)

### 🔴 Activate Portfolio Intelligence Officer

```
Activate Portfolio Intelligence Officer.

Analyze portfolio-data/data.json completely.

Deliverables:
1. Full intelligence brief on David Lin's career, projects, and tech stack
2. src/lib/types/portfolio.ts — TypeScript interface definitions for all data shapes
3. Content strategy document for all 6 portfolio sections:
   - Hero: name, roles, tagline
   - About: professional narrative paragraph (SupCom-flavored, professionally accurate)
   - Experience: "Campaign History" framing notes per experience entry
   - Projects: "Unit Database" framing and grouping strategy
   - Tech Stack: "Research Tree" grouping and Special treatment for Three.js
   - Contact: "Transmission Terminal" copy
4. Data validation function
5. Note any data quality issues (e.g., placeholder GitHub URLs)

Context: portfolio-data/data.json contains 4 experiences, 8 projects, 13 technologies.
The website is themed after Supreme Commander (RTS by Chris Taylor). 
Subtle SupCom flavor — not in-your-face gaming references.
```

### ⚡ Activate Supreme Commander (in parallel with above)

```
Activate Supreme Commander.

Issue the Architecture Decision Record for the portfolio project.

Stack:
- Framework: SvelteKit (latest)
- Runtime: Bun (latest)
- 3D: Three.js
- Styling: Tailwind CSS
- Data: portfolio-data/data.json

Deliverables:
1. Full directory structure specification
2. ADR for: SvelteKit adapter choice (adapter-bun), routing strategy (single-page scroll vs multi-route), Three.js integration approach (SSR-safe lazy loading)
3. Tech Tier gate checklist (T1 through Experimental)
4. Dependency list with justification for each package
5. Cross-agent dependency map: who needs what from whom, in what order

Portfolio sections needed:
Hero, About, Experience (4 entries), Projects (8 cards), Tech Stack (13 icons), Contact
```

---

## Phase 2 — T1: Foundation (Sequential)

### 🔵 Activate Bun Mass Fabricator

```
Activate Bun Mass Fabricator.

Initialize the SvelteKit portfolio project using Bun as the sole toolchain.

Architecture decision: [paste Supreme Commander ADR output here]

Deliverables:
1. package.json with all required dependencies and scripts (dev, build, start, test)
2. svelte.config.js configured with @sveltejs/adapter-bun
3. vite.config.ts with esbuild minification and manual chunk config for Three.js
4. tsconfig.json with strict mode
5. .env.example with all required environment variables
6. Verify: `bun run dev` starts on port 5173 with zero errors
7. Verify: `bun run build` produces ./build without errors

Dependencies to install:
- @sveltejs/adapter-bun
- three @types/three
- tailwindcss @tailwindcss/typography
- rollup-plugin-visualizer (dev)

Do NOT install npm, yarn, or pnpm dependencies — Bun only.
```

### 🟡 Activate Visual Illuminate Designer (in parallel with Bun Mass Fabricator)

```
Activate Visual Illuminate Designer.

Create the complete SupCom HUD visual design system for the portfolio.

Deliverables:
1. tailwind.config.ts — complete color palette:
   - void (background layers)
   - uef-blue (primary interactive)
   - aeon-teal (secondary, labels)
   - cybran-red, seraphim-amber (accents)
   - energy/mass (metrics, data readouts)
   - text-primary, text-secondary, text-dim hierarchy
2. tailwind.config.ts — fonts: Share Tech Mono (tactical), Rajdhani (headings), Inter (body)
3. tailwind.config.ts — shadows: hud, hud-hover, glow-blue, glow-teal
4. tailwind.config.ts — animations: pulse-glow, flicker-in, strategic-zoom
5. src/app.css — @layer components with: .hud-panel, .tactical-label, .data-readout, .btn-supcom, .unit-card, .tech-tag, .structural-divider
6. Typography scale documentation
7. Visual spec for each of the 6 section components (layout, spacing, colors, states)

Theme: Supreme Commander HUD aesthetic. Dark void backgrounds. Glowing blue/teal structural lines.
Geometric precision. NOT a flashy gaming theme — subtle, professional, distinctive.
```

---

## Phase 3 — T2: Structure & Content

### 🔵 Activate SvelteKit Frontline Engineer

```
Activate SvelteKit Frontline Engineer.

Build the complete SvelteKit routing and component structure.
The Bun foundation is ready. Design system is ready.

Architecture: [paste Supreme Commander ADR]
Types: [paste from Portfolio Intelligence Officer: src/lib/types/portfolio.ts]
Design tokens: [paste key Tailwind class names from Visual Illuminate Designer]
Content strategy: [paste section copy from Portfolio Intelligence Officer]

Deliverables:
1. src/routes/+layout.svelte — global HUD frame with NavBar
2. src/routes/+page.svelte — assembles all 6 section components
3. src/routes/+page.ts — load function reading typed portfolio data
4. src/lib/data/portfolio.ts — re-exports from the JSON file
5. src/lib/stores/navigation.ts — activeSection, scrollProgress stores
6. src/lib/actions/inView.ts — IntersectionObserver action for scroll reveal
7. All 6 section components (placeholder until Three.js Engineer delivers hero scene):
   - HeroSection.svelte (canvas placeholder for Three.js)
   - AboutSection.svelte
   - ExperienceSection.svelte (timeline using experiences data)
   - ProjectsSection.svelte (card grid using projects data)
   - TechStackSection.svelte (icon grid using technologies data)
   - ContactSection.svelte (form with /api/contact POST)
8. src/lib/components/hud/NavBar.svelte — using navItems store
9. src/routes/api/contact/+server.ts — validated POST endpoint
10. All components use TypeScript, $lib aliases, Tailwind classes from design system

Requirements:
- Mobile-first responsive design (sm, md, lg breakpoints)
- Scroll-reveal animations using inView action
- Accessibility: semantic HTML, ARIA labels on interactive elements
- All content from portfolio-data — zero hardcoded strings
```

---

## Phase 4 — T3: Visual Spectacle

### 🔶 Activate Three.js Experimental Engineer

```
Activate Three.js Experimental Engineer.

Build the Three.js 3D scenes for the portfolio.

SvelteKit structure: [paste from Frontline Engineer — component locations]
Performance profile: [paste from Quantum Gate — perf constraints]

Deliverables:
1. src/lib/three/heroScene.ts — ACU Command Center scene:
   - IcosahedronGeometry wireframe (UEF blue, rotating)
   - Inner solid core (dark, phong)
   - 800-particle field (mobile: 150)
   - UnrealBloomPass post-processing (desktop only)
   - Ambient + point lights with energy pulse animation
   - Returns cleanup() function
2. src/lib/three/backgroundField.ts — ambient particle background (subtle, across all sections)
3. src/lib/three/projectionRing.ts — reusable tactical ring for section headers
4. src/lib/three/perfGuard.ts — getPerfProfile() for mobile/desktop/reduced-motion
5. src/lib/components/three/ThreeCanvas.svelte — SSR-safe canvas wrapper
6. Updated HeroSection.svelte — replace placeholder with ThreeCanvas
7. All scenes: SSR-safe (browser guard), cleanup on destroy, resize handler

CRITICAL: All Three.js imports must be dynamic (await import)
CRITICAL: prefers-reduced-motion must disable animations
CRITICAL: Mobile gets: no bloom, <200 particles, pixelRatio ≤ 1.5
```

---

## Phase 5 — Experimental Gate: Final Tuning (Run in parallel)

### ⚙️ Activate Quantum Gate Performance Engineer

```
Activate Quantum Gate Performance Engineer.

Run the performance audit and optimization pass.

Portfolio is built. Run analysis and optimize to hit budgets:
- LCP < 2.5s
- CLS < 0.1
- Lighthouse Performance ≥ 85
- Initial JS bundle < 150KB gzipped
- Three.js chunk < 350KB gzipped

Deliverables:
1. Bundle analysis report (rollup-plugin-visualizer output reviewed)
2. vite.config.ts manual chunks verified/adjusted for Three.js split
3. All img tags audited — explicit width/height verified, loading="lazy" on below-fold
4. Google Fonts preconnect and preload in app.html
5. font-display: swap confirmed
6. Mobile performance degradation in Three.js scenes verified against getPerfProfile()
7. lighthouserc.js configured
8. Lighthouse score report (run against production build)
9. List of any remaining optimizations with P1/P2/P3 priority

Run: bun run build && bunx lighthouse http://localhost:3000
Report LCP, FID, CLS, TBT, Performance score.
```

### ⚡ Activate Supreme Commander (Final Review)

```
Activate Supreme Commander.

Conduct the Experimental Gate review before deployment authorization.

Review checklist:
1. T1 Gate passed: SvelteKit on Bun runs, builds, deploys
2. T2 Gate passed: All 6 sections render with correct portfolio data
3. T3 Gate passed: Three.js hero scene running, no SSR errors
4. Experimental Gate: Lighthouse ≥ 85, no console errors
5. Cross-browser test: Chrome, Firefox, Safari (manual)
6. Mobile test: portfolio usable on 375px viewport
7. All content from portfolio-data — verify against data.json directly
8. SupCom theme present but professional — would pass a Fortune 500 recruiter review

Outstanding items to resolve:
- placeholder source_code_link values in projects
- Deployment target decision (Bun standalone server / Vercel / Cloudflare Pages)

Issue DEPLOY AUTHORIZATION or list blockers.
```

---

## Rapid Re-Task Templates

### Add a new project card
```
Activate Portfolio Intelligence Officer.
Add project entry to portfolio-data/data.json:
Name: [name]
Description: [description]
Tags: [tag1, tag2, tag3]
Image: [path]
Source: [github url]
Verify types match ProjectEntry interface. Deliver updated data file.

Then activate SvelteKit Frontline Engineer:
ProjectsSection.svelte already maps over projects array — verify new entry renders correctly.
```

### Update experience
```
Activate Portfolio Intelligence Officer.
Update experience at company [name]:
New point: [achievement bullet]
Verify content strategy framing still applies.
Deliver updated portfolio data section.
```

### Performance regression
```
Activate Quantum Gate Performance Engineer.
Lighthouse score has dropped to [X].
Last change: [description].
Audit the specific regression and identify root cause.
Deliver fix with before/after Lighthouse metrics.
```

---

*"All units accounted for. The campaign begins on your order, Commander."*
