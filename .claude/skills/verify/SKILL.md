---
name: verify
description: Build/launch/drive recipe for verifying changes to this static landing page in a real browser.
---

# Verifying changes to this site

Static site — no build step, no server needed. Open
`file:///<repo>/index.html` directly.

## Drive it headlessly

Playwright against the pre-installed Chromium (do NOT run
`playwright install`):

```bash
cd "$SCRATCHPAD" && npm i playwright-core --no-audit --no-fund
```

```js
const { chromium } = require('playwright-core');
const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
});
```

Gotcha: `/opt/pw-browsers/chromium` is a file, not the browser dir —
use the versioned `chromium-1194/chrome-linux/chrome` path (adjust if
the version bumps).

## Flows worth driving

- Mobile menu (`js/menu.js`): toggle at ≤768px viewport, Escape,
  outside pointerdown, link click — all should close it.
- Members gallery modal (radio-input driven CSS, keyboard support in
  `js/gallery.js`): click a `.member-card` → its `figure` becomes a
  fixed modal + backdrop; chevron labels `.modal-prev/.modal-next.nav-N`
  re-check the neighbouring radio; backdrop click checks `#close-all`.
  Keyboard: Tab + Enter/Space on cards and chevrons, arrow keys
  navigate while open, Escape closes.
- Check both 1280px and 375px viewports — media.css changes layout
  substantially at 768px.
