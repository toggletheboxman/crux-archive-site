// marginalia.js — Crux Archive Editions
// Adds drifting marginal footnotes that may or may not correspond to reality

const marginalia = [
  "(Stanton, 2025): That door should not have been there.",
  "(Unverified): The mirror may have written this entry itself.",
  "(From an unknown hand): Don’t trust the figs.",
  "(Calvert): The original manuscript made no mention of him—until it did.",
  "[Redacted by request of Prof. Stanton]",
  "(Stanton): This line is overwritten in some editions.",
  "(Appears only in the Capri copy): The stylus was already warm.",
  "(Annotation?): There is no Entry XXXIX.",
  "(Margin note, untranslated): Iterum."
];

function injectMarginalia() {
  const container = document.querySelector(".index-card") || document.querySelector(".content");
  if (!container) return;

  const margin = document.createElement("div");
  margin.className = "marginalia-layer";
  document.body.appendChild(margin);

  marginalia.forEach((text, i) => {
    const note = document.createElement("div");
    note.className = "marginalia-note";
    note.textContent = text;
    note.style.top = `${Math.floor(Math.random() * 80) + 10}%`;
    note.style.left = (i % 2 === 0) ? "-12rem" : "100%";
    margin.appendChild(note);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectMarginalia();

  // Subtle delayed regeneration after 90 seconds
  setTimeout(() => {
    const old = document.querySelector(".marginalia-layer");
    if (old) old.remove();
    injectMarginalia();
  }, 90000);
});

