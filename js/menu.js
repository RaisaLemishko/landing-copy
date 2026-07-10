// Mobile nav: WAI-ARIA disclosure pattern.
// All visual state derives from aria-expanded (see header.css / media.css),
// so this script is a one-attribute state machine.
(() => {
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.getElementById("site-menu");
  if (!toggle || !panel) return;
  const nav = toggle.closest("nav");

  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
  const setOpen = (open) => toggle.setAttribute("aria-expanded", String(open));

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  // Choosing a section closes the menu (anchor smooth-scroll proceeds normally)
  panel.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  // Escape closes and returns focus to the toggle
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Interacting anywhere outside the nav closes the menu. pointerdown (not
  // click) so a touch-scroll gesture starting on page content also closes it.
  document.addEventListener("pointerdown", (event) => {
    if (isOpen() && !nav.contains(event.target)) setOpen(false);
  });

  // Crossing to desktop resets state so the menu is closed on return to mobile
  const mobileView = window.matchMedia("(max-width: 768px)");
  mobileView.addEventListener("change", (event) => {
    if (!event.matches) setOpen(false);
  });
})();
