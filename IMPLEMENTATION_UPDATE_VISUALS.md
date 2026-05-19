# IMPLEMENTATION PLAN: Modernize Meridian Landing Page Visuals & Depth

**Goal**: Transform the current flat, solid dark design into a premium, dynamic, atmospheric experience using lightweight CSS + minimal JS.  
Focus on depth, subtle animation, and tactile feel without heavy libraries or performance hits.

**Target Model / Constraints**: Gemini 3 Flash (plan mode) – keep prompts short, focused, and broken into small sequential tasks.

---

## Overall Approach
- **Three depth layers**:
  1. Hero: Particles + floating orbs
  2. Global: Subtle noise texture
  3. Section-specific: Gradient mesh backgrounds
- Add polish: Hover micro-interactions, animated audit glow, light parallax, navbar improvements.
- All changes are progressive and reversible.
- No new external assets (use inline SVG / data URIs / CSS only).

---

## Phase 1: Global Foundations (Do these first)

1. **Add Noise Texture Overlay**
   - Create a subtle grain/noise using inline SVG (`feTurbulence`) or tiny CSS data-URI.
   - Apply as fixed `::before` or wrapper div on `body` or main container.
   - Opacity: 3-5%, blend-mode: overlay or soft-light.
   - Ensure it sits behind content but above solid backgrounds.

2. **Update Base Backgrounds**
   - Slightly dim the existing grid background in hero (reduce opacity or brightness).
   - Prepare CSS custom properties for accent glows (`--accent-glow`, `--accent-rgba`).

---

## Phase 2: Hero Section Enhancements

1. **Floating Gradient Orbs (CSS only)**
   - 2-3 large, blurred `radial-gradient` orbs.
   - Position absolutely behind hero content, different z-index/offsets.
   - Slow infinite `translateY` + slight `translateX` keyframe animation (30-60s duration, ease-in-out).
   - Very low opacity (5-10%) using accent color.

2. **Canvas Particle System**
   - Lightweight HTML5 `<canvas>` behind hero text.
   - Small dots drifting slowly upward, gentle random movement, fade in/out.
   - Connect particles optionally with faint lines if performance allows.
   - Low particle count (50-80), requestAnimationFrame, throttle on resize/visibility.

3. **Hero Background Polish**
   - Combine grid + orbs + particles.
   - Test on mobile (reduce particles or disable canvas if needed).

---

## Phase 3: Section Background Variety

1. **Gradient Mesh Backgrounds**
   - For Credibility, WhoItsFor, WhatHappensNext (and any other flat sections):
     - Replace solid `bg-surface`/`bg-bg` with layered `radial-gradient`s.
     - One warm accent glow (top-left), one cool secondary glow (bottom-right), low opacity (5-8%).
   - Use CSS custom properties for easy tweaking.

---

## Phase 4: Interactive Polish

1. **Hover Micro-Interactions**
   - Credibility cards & HowItWorks steps:
     - Border glow on hover: `box-shadow: 0 0 20px rgba(108,99,255,0.15)`
     - Slight `translateY(-2px)` lift on cards.
   - Stats strip items: subtle `scale(1.02)` on hover.

2. **Animated Audit Card Glow**
   - Animate the existing `::before` gradient line with `@keyframes` shifting background position (scanning effect).
   - Horizontal movement, ~8-12s duration, infinite.

---

## Phase 5: Scroll & Navigation Enhancements

1. **Lightweight Parallax**
   - Use existing `useScrollProgress` hook (or simple IntersectionObserver + scroll listener).
   - Apply small transform offset (max 10-20px) to hero orbs and audit glow based on scroll.
   - Keep movement very subtle.

2. **Navbar Active Indicator**
   - Extend IntersectionObserver to detect when audit section is in view.
   - Add accent dot/underline next to “Request an Audit” link.
   - On scroll past hero: increase navbar opacity + backdrop blur slightly.

---

## Checklist (Progress Tracking)

- [x] Phase 1 – Noise texture + base bg updates
- [x] Phase 2 – Hero orbs
- [x] Phase 2 – Hero canvas particles
- [x] Phase 3 – Gradient meshes on key sections
- [x] Phase 4 – Hover effects (cards, steps, stats)
- [x] Phase 4 – Animated audit card line
- [x] Phase 5 – Subtle parallax
- [x] Phase 5 – Navbar active state & scroll style
- [ ] Mobile / performance testing & fallbacks
- [ ] Final visual QA + motion comfort check
- [ ] Merge / deploy

**Notes for Anti-Gravity / Gemini 3 Flash**:
- Always implement **one small task at a time**.
- Ask for confirmation after each phase before proceeding.
- Provide before/after code diffs when relevant.
- Prioritize performance and mobile compatibility.

**Success Criteria**:
- Page feels “alive” and premium on first load.
- No jank, no heavy battery/CPU usage.
- All effects degrade gracefully on mobile/low-power devices.

---
Last updated: 2026-05-20
