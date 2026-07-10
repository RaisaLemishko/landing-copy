# G & G — Landing Page

A single-page landing site for the band **G & G**.

## Technology

This is a **static website** built with plain, framework-free web technologies:

- **HTML5** — semantic markup in a single `index.html`
- **CSS3** — modular stylesheets in `css/`, composed via `@import` in `css/main.css`
  (`variables`, `header`, `hero`, `schedule`, `members`, `history`, `contacts`, `media`)
- **Images** — static assets in `img/`
- **No JavaScript, no build step, no dependencies** — nothing to compile or install

## Project structure

```
.
├── index.html          # Page markup
├── css/
│   ├── main.css        # Entry point — @imports the partials below
│   ├── variables.css   # Shared CSS custom properties
│   ├── header.css      # Navigation bar
│   ├── hero.css        # Hero section
│   ├── schedule.css    # Concert schedule
│   ├── members.css     # Members / gallery
│   ├── history.css     # Band history
│   ├── contacts.css    # Contacts + map
│   └── media.css       # Responsive / media queries
└── img/                # hero-bg.png, member-1..3.jpeg
```

## How to run

Because the CSS is loaded through relative paths (and `@import`), open the page
via a local web server rather than the `file://` protocol so the stylesheets and
images resolve correctly.

### Option 1 — Python (usually pre-installed)

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

### Option 2 — Node.js

```bash
npx serve .
```

Then open the URL it prints (typically <http://localhost:3000>).

### Option 3 — VS Code

Install the **Live Server** extension, then right-click `index.html` →
**Open with Live Server**.

> Opening `index.html` directly by double-clicking it will mostly work, but a
> local server is recommended to avoid any path/CORS quirks.

## Deployment

The site is fully static, so it can be hosted as-is on any static host:

- **GitHub Pages** — Settings → Pages → deploy from the `main` branch, `/ (root)` folder
- **Netlify / Vercel** — import the repo; leave the build command empty and the
  publish directory as the repo root
