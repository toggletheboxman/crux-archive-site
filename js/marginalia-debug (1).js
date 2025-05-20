// marginalia.js — Crux Archive Editions (Debug Mode v2)
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
  console.log("🔍 injectMarginalia() called");

  const container = document.querySelector(".index-card") || document.querySelector(".content");
  if (!container) {
    console.warn("⚠️ No .index-card or .content found. Marginalia injection aborted.");
    return;
  }

  const margin = document.createElement("div");
  margin.className = "marginalia-layer";
  document.body.appendChild(margin);
  console.log("✅ .marginalia-layer appended to body");

  marginalia.forEach((text, i) => {
    const note = document.createElement("div");
    note.className = "marginalia-note";
    note.textContent = text;

    // Force positioning
    const top = `${Math.floor(Math.random() * 80) + 10}%`;
    const left = (i % 2 === 0) ? "-12rem" : "100%";
    note.style.top = top;
    note.style.left = left;
    note.style.position = "absolute";

    // Visual debug cues
    note.style.border = "1px dashed red";
    note.style.background = "#fff0f0";

    console.log(`📍 Injected marginalia ${i + 1}: top=${top}, left=${left}`);
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

runWhenReady(() => {
  console.log("🚀 Marginalia script running...");
  injectMarginalia();

  // Subtle delayed regeneration after 90 seconds
  setTimeout(() => {
    const old = document.querySelector(".marginalia-layer");
    if (old) old.remove();
    console.log("♻️ Marginalia layer removed for regeneration");
    injectMarginalia();
  }, 90000);
});