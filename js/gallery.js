// Keyboard support for the CSS-only members gallery (see members.css).
// The gallery radios are display:none, so their labels — the member cards
// and the modal prev/next chevrons — can't receive focus or react to
// Enter/Space on their own. The labels carry role="button" + tabindex="0"
// in the markup; this script supplies the matching button behavior.
(() => {
  const container = document.querySelector(".members-container");
  if (!container) return;

  const openMember = () => container.querySelector(".member-toggle:checked");

  // Enter/Space activate a focused label like the button it appears to be
  container.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const label = event.target.closest('label[role="button"]');
    if (!label) return;
    event.preventDefault(); // Space must not scroll the page
    label.click();
  });

  // A used chevron hides as the next member's pair appears in its place;
  // keep focus on the equivalent new chevron so navigation can continue.
  // The label's click event fires before its radio is checked, so note
  // the side here and focus on the radio's change event, which fires
  // synchronously after the new chevron pair has become focusable.
  let chevronSide = null;
  container.addEventListener("click", (event) => {
    const nav = event.target.closest(".modal-nav");
    if (!nav) return;
    chevronSide = nav.classList.contains("modal-prev")
      ? ".modal-prev"
      : ".modal-next";
  });
  container.addEventListener("change", (event) => {
    if (!chevronSide) return;
    const side = chevronSide;
    chevronSide = null;
    const opened = event.target.id.replace("member-", "");
    container.querySelector(`${side}.nav-${opened}`).focus();
  });

  // While a modal is open: arrow keys navigate, Escape closes and returns
  // focus to the card that the modal belongs to.
  document.addEventListener("keydown", (event) => {
    const open = openMember();
    if (!open) return;
    if (/^(input|textarea|select)$/i.test(event.target.tagName)) return;

    if (event.key === "Escape") {
      document.getElementById("close-all").checked = true;
      container.querySelector(`.member-card[for="${open.id}"]`).focus();
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      const side = event.key === "ArrowLeft" ? ".modal-prev" : ".modal-next";
      const n = open.id.replace("member-", "");
      container.querySelector(`${side}.nav-${n}`).click();
    }
  });
})();
