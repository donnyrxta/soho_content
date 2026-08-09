# Soho Connect homepage design contract

Status: preview candidate. This contract governs the corporate homepage preview and any later production promotion of that preview. Existing product and authority routes keep their current contracts until separately reviewed.

## Product intent

The homepage helps a Zimbabwean business decision-maker answer three questions quickly:

1. Can Soho Connect handle the kind of work I need?
2. Does the delivery process feel controlled and credible?
3. How do I start a properly scoped quote?

The primary action is **Request a quote**. WhatsApp is a direct secondary path. Portfolio and service links support evaluation but do not compete with the primary action.

## Visual world

Use the visual language of a well-run commercial production studio: white working surfaces, disciplined navy typography, precise blue interaction, tactile production photography, restrained dividers, and generous clear space. The interface should feel capable and established without looking like a bank, a speculative technology company, or a template marketplace.

Generated photographs are service illustrations, not client evidence. They must be visibly described as illustrative and must never carry invented customer names, logos, metrics, testimonials, or certifications.

## Tokens

```yaml
color:
  ink: "#09152e"
  navy: "#061744"
  blue: "#1648d8"
  blue_dark: "#1037aa"
  cyan: "#0aaed0"
  red: "#d63b4a"
  muted: "#56647c"
  line: "#dce3ef"
  soft: "#f5f7fb"
  white: "#ffffff"
type:
  family: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
  body_min_mobile: "16px"
  hero_desktop: "clamp(3.25rem, 5.25vw, 4.8rem)"
  section_desktop: "clamp(2.25rem, 4vw, 3.65rem)"
spacing:
  shell: "min(1180px, calc(100% - 40px))"
  section_desktop: "96px"
  section_mobile: "68px"
shape:
  control_radius: "10px"
  media_radius: "18px"
  card_radius: "18px"
motion:
  feedback: "180ms"
  decorative_motion: "none"
```

## Invariants

- Use one dominant CTA per viewport.
- Keep the header conventional, compact, and readable.
- The first viewport contains the offer, the primary action, direct contact context, and one meaningful image.
- Do not use glass panels, floating proof cards, fake dashboards, unsupported performance claims, or ornamental animation.
- Use only one primary interaction color. Red is a small brand accent, not a competing CTA color.
- Body copy remains at least 16px on mobile and normal text meets WCAG AA contrast.
- Touch targets are at least 44px high where practical, with visible keyboard focus.
- Mobile reprioritizes: copy and CTA first, image second, proof points third.
- Every raster image uses intrinsic dimensions, AVIF and WebP sources, a responsive `srcset`, and lazy loading unless it is the hero.
- The page remains understandable if every image fails to load.

## Release gate

Promotion to the production homepage requires: verified routes and public claims, client-permission review for any real casework, 320/375/768/1024/1440 visual checks, keyboard and reduced-motion checks, no horizontal overflow, no console errors, and a successful project build on current `main`.
