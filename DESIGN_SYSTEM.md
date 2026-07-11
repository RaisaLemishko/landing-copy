# G&G Design System

Design language of the «Грим та Грім» band site, extracted from the landing
page design into a reusable token + component layer.

- **Tokens** live in [`css/variables.css`](css/variables.css) as CSS custom
  properties on `:root`.
- **Living style guide**: open [`design-system.html`](design-system.html) in a
  browser — it renders every token and component with the real production CSS.
- **Components** are styled per section in `css/*.css`; all of them consume
  tokens only.

## Architecture

Tokens come in two tiers:

1. **Primitives** — raw palette and scale values (`--gray-800`, `--yellow-500`,
   `--space-4`, `--font-size-3xl`, …). They exist only to feed the semantic
   tier; component CSS must never reference them directly.
2. **Semantic tokens** — role-based names (`--bg-card`, `--color-accent`,
   `--shadow-modal`, …). This is the only tier component CSS may use.

To re-theme the site, edit the primitives (or re-point a semantic token);
component CSS should not need to change.

## Color

### Backgrounds

| Token | Value | Use |
| --- | --- | --- |
| `--bg-main` | `#0a0a0c` | Page background |
| `--bg-section-alt` | `#121216` | Alternating sections (schedule, history, contacts) |
| `--bg-card` | `#18181f` | Cards, inputs, panels, dropdown menu |
| `--bg-card-translucent` | `rgba(24, 24, 31, 0.85)` | Floating controls over content (modal chevrons) |

### Text

| Token | Value | Use |
| --- | --- | --- |
| `--text-main` | `#ffffff` | Headings, body copy |
| `--text-secondary` | `#e0e0e0` | Subtitles |
| `--text-tertiary` | `#d0d0d0` | Long-form copy over imagery (hero) |
| `--text-muted` | `#b3b3b3` | Captions, table headers, helper text |
| `--text-inverse` | `#0a0a0c` | Dark text on accent surfaces (yellow CTA) |

### Accents

| Token | Value | Use |
| --- | --- | --- |
| `--color-accent` | `#ffcc00` | Brand yellow: focus rings, hover fills, highlights |
| `--color-accent-blue` | `#6babff` | Inline text emphasis |
| `--color-btn-red` | `#e62e5a` | Secondary CTA (ticket buttons, form submit) |
| `--color-btn-red-hover` | `#ff5d85` | Red CTA hover state |

### Borders & overlays

| Token | Value | Use |
| --- | --- | --- |
| `--border-subtle` | `rgba(255, 255, 255, 0.1)` | Dividers, card edges |
| `--border-input` | `#333333` | Form controls |
| `--overlay-backdrop` | `rgba(0, 0, 0, 0.72)` | Modal backdrop |
| `--overlay-hover` | `rgba(255, 255, 255, 0.04)` | Row hover tint |

### Gradients

| Token | Value | Use |
| --- | --- | --- |
| `--gradient-accent` | `#ffd83d → #ffbf00` (180°) | Primary CTA fill |
| `--gradient-hero-scrim` | `rgba(0,0,0,.85) → rgba(0,0,0,.65)` | Legibility scrim over hero photo |

## Typography

Family: `--font-family-base` — `Arial, Helvetica, sans-serif`.

| Token | Value | Use |
| --- | --- | --- |
| `--font-size-5xl` | 60px | Hero h1 (desktop) |
| `--font-size-4xl` | 40px | Hero h1 (mobile) |
| `--font-size-3xl` | 32px | Section titles (`.section-title`) |
| `--font-size-2xl` | 28px | Page-level card titles (tickets page) |
| `--font-size-xl` | 24px | Logo |
| `--font-size-lg` | 20px | Hero subtitle |
| `--font-size-md` | 18px | Emphasized rows, mobile subtitle |
| `--font-size-base` | 16px | Body copy (set on `body`) |
| `--font-size-sm` | 14px | Table headers, captions, small buttons |

Weights: `--font-weight-regular` 400 · `--font-weight-bold` 700 ·
`--font-weight-black` 900 (hero display only).

Line heights: `--line-height-base` 1.6 (body) · `--line-height-tight` 1.15
(display headings).

Letter spacing: `--letter-spacing-tight` 0.5px (hero h1, small buttons) ·
`--letter-spacing-wide` 1px (primary CTA, uppercase label).

## Spacing

4px-base scale: `--space-1` 4 · `--space-2` 8 · `--space-3` 12 · `--space-4`
16 · `--space-5` 20 · `--space-6` 24 · `--space-8` 32 · `--space-10` 40 ·
`--space-20` 80.

Section shells: `--section-padding` (`80px 10%`, desktop) and
`--section-padding-mobile` (`40px 20px`, ≤768px), applied globally to
`section` in `main.css`. A few legacy component offsets (15/18/25/30px)
intentionally keep their exact pixel values for visual fidelity; use the
scale for anything new.

## Corner radius

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | 8px | Inputs, small controls, map frame |
| `--radius-md` | 12px | Cards, buttons, panels |
| `--radius-lg` | 14px | Modals |
| `--radius-full` | 50% | Circular controls (modal chevrons) |

## Elevation

| Token | Use |
| --- | --- |
| `--shadow-dropdown` | Mobile menu panel, popovers |
| `--shadow-modal` | Gallery modal |
| `--shadow-glow-accent` | Primary CTA resting state |
| `--shadow-glow-accent-hover` | Primary CTA hover |

The yellow glow is reserved for the single primary CTA per view.

## Motion

| Token | Value | Use |
| --- | --- | --- |
| `--transition-speed` | 0.3s | Standard transitions |
| `--transition-func` | ease-in-out | Standard easing |
| `--duration-slow` | 0.35s | Soft reveals (modal, expanding text) |
| `--ease-smooth` | ease | Easing for soft reveals |

`media.css` collapses menu animation to 0.01s under
`prefers-reduced-motion: reduce`.

## Layout

- Containers: `--container-md` 1000px (schedule, history) ·
  `--container-lg` 1100px (contacts) · `--container-xl` 1200px (members).
- Breakpoint: single switch at **`max-width: 768px`** (custom properties can't
  parameterize media queries — keep this value in sync manually).

## Accessibility

- Focus: every interactive element shows `--focus-ring`
  (2px solid `--color-accent`) with `--focus-ring-offset` on `:focus-visible`.
- Reduced motion is honored (see Motion).
- Interactive targets (menu toggle, modal chevrons) are ≥44px.

## Component inventory

| Component | Classes | Defined in |
| --- | --- | --- |
| Header / nav | `nav`, `.logo`, `.menu-toggle`, `.menu-panel` | `header.css`, `media.css` |
| Hero | `#hero`, `.hero-subtitle`, `.hero-description`, `.hero-accent` | `hero.css` |
| Primary button | `.btn-primary` | `hero.css` |
| Ticket button | `.btn-ticket` | `schedule.css` |
| Section title | `.section-title` | `schedule.css` |
| Schedule table | `.schedule-container`, `.schedule-header`, `.schedule-row`, `.schedule-cell` | `schedule.css`, `media.css` |
| Member card + gallery modal | `.member-card`, `.img-wrapper`, `.member-info`, `.modal-backdrop`, `.modal-nav` | `members.css` |
| History block | `.history-content` | `history.css` |
| Contact form | `.contact-form`, `.row`, `.field` | `contacts.css` |
| Map card | `.map` | `contacts.css` |

## Rules of use

1. Component CSS consumes **semantic tokens only** — never primitives, never
   raw hex/rgba values.
2. New spacing uses the `--space-*` scale; new radii, shadows, and durations
   use their token sets.
3. One `.btn-primary` per view; repeated CTAs use `.btn-ticket`.
4. New sections alternate `--bg-main` / `--bg-section-alt`; content cards sit
   on `--bg-card`.
5. Check new components into `design-system.html` so the style guide stays a
   complete visual regression surface.
