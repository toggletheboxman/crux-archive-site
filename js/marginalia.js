// marginalia.js — Crux Archive Editions (Production)
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
    note.style.top = `${Math.floor(Math.random() * 85) + 5}%`; // Spread top: 5%–90%
    note.style.left = (i % 2 === 0) ? "1rem" : "calc(100% - 14rem)";
    note.style.position = "absolute";
    note.style.zIndex = Math.floor(Math.random() * 3) + 8; // 8–10
    margin.appendChild(note);
  });
}

function runWhenReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    requestAnimationFrame(fn);
  }
}

setInterval(() => {
  const notes = document.querySelectorAll(".marginalia-note");
  notes.forEach(note => {
    const alt = marginalia[Math.floor(Math.random() * marginalia.length)];
    note.textContent = alt;
  });
}, 20000); // every 20 seconds

runWhenReady(() => {
  injectMarginalia();
  setTimeout(() => {
    const old = document.querySelector(".marginalia-layer");
    if (old) old.remove();
    injectMarginalia();
  }, 90000);
});
