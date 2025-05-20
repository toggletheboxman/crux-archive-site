// marginalia.js — Crux Archive Editions (Stable with Debug Logging)

const marginalia = [
  "(Stanton, 2025): That door should not have been there.",
  "(Unverified): The mirror may have written this entry itself.",
  "(From an unknown hand): Don’t trust the figs.",
  "(Calvert): The original manuscript made no mention of him—until it did.",
  "[Redacted by request of Prof. Stanton]",
  "(Stanton): This line is overwritten in some editions.",
  "(Appears only in the Capri copy): The stylus was already warm.",
  "(Annotation?): There is no Entry XXXIX.",
  "(Margin note, untranslated): Iterum.",
  "(Unknown): See ledger fragment B-17, line 8.",
  "(Eli, later): She paused at the threshold, then stepped through.",
  "(Clerk’s Log, 1899): Unfiled entries are to be burned unread.",
  "(Smeared): …not who they claimed to be.",
  "(Corrupted): T%%%@e c&&l does not loop.",
  "(Transcription Error?): Word ends in -uruk but trail vanishes.",
  "(Watcher’s note): It blinked.",
  "(Cross-reference): See CAE-X0097 (untranslated glyphwork).",
  "(Notation in rust): Never listen twice.",
  "(Partial): The child was alone, but not unaccompanied.",
  "(Unverified): The index reshuffles itself when left unattended.",
  "(Paper slip): …this one was meant to be forgotten.",
  "(Margin bleed): It spiraled.",
  "(Archive Warning): Do not copy this record.",
  "(Emended): Spelling corrected for regional dialect.",
  "(Note to self): Stop using the red pen.",
  "(Missing page reference)",
  "(Crumpled insert): He said her name twice, then disappeared.",
  "(Postscript): Apologies for the smudges.",
  "(Observation): It was too quiet.",
  "(Addendum): The question is not *when*."
];

function injectMarginalia() {
  console.log("Injecting marginalia...");
  const container = document.querySelector(".index-card") || document.querySelector(".content");
  console.log("Container found:", container);
  if (!container) return;

  const margin = document.createElement("div");
  margin.className = "marginalia-layer";
  document.body.appendChild(margin);

  const count = 60 + Math.floor(Math.random() * 40); // 60–100 notes
  console.log(`Injecting ${count} marginalia-note elements...`);

  for (let i = 0; i < count; i++) {
    const text = marginalia[Math.floor(Math.random() * marginalia.length)];
    const note = document.createElement("div");
    note.className = "marginalia-note";
    note.textContent = text;

    // Random positioning
    note.style.top = `${Math.floor(Math.random() * 100)}vh`; // 0–100% of viewport height
    note.style.left = `${Math.floor(Math.random() * 100)}vw`; // anywhere across screen
    note.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    note.style.position = "absolute";
    note.style.zIndex = `${Math.floor(Math.random() * 3) + 8}`;

    margin.appendChild(note);
  }

  console.log("✅ Marginalia injection complete.");
}

window.addEventListener("load", () => {
  console.log("🟢 Window loaded. Running marginalia.");
  injectMarginalia();

  // Swap text content every 20 seconds
  setInterval(() => {
    const notes = document.querySelectorAll(".marginalia-note");
    notes.forEach(note => {
      const alt = marginalia[Math.floor(Math.random() * marginalia.length)];
      note.textContent = alt;
    });
  }, 20000);

  // Regenerate marginalia every 90 seconds
  setTimeout(() => {
    const old = document.querySelector(".marginalia-layer");
    if (old) old.remove();
    injectMarginalia();
  }, 90000);
});
