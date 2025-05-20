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
  "(Paper slip): …this one was meant to be forgotten.",
  "(Margin bleed): It spiraled.",
  "(Archive Warning): Do not copy this record.",
  "(Emended): Spelling corrected for regional dialect.",
  "(Note to self): Stop using the red pen.",
  "(Missing page reference)",
  "(Crumpled insert): He said her name twice, then disappeared.",
  "(Postscript): Apologies for the smudges.",
  "(Observation): It was too quiet.",
  "(Addendum): The question is not *when*.",
  "(Margin fragment): The hallway exists—or it did.",
  "(SAE, 1932): Some voices don’t end. They just change hosts.",
  "(Calvert, Editor’s Note V): You always write this one.",
  "(Fragment): He was not the first to carry the ash.",
  "(Untitled marginalia): The ink remembers differently than fire.",
  "(Unpaginated): Found only in the Exeter copy.",
  "(Unknown insertion): A thumbprint, smudged and recent.",
  "(Annotation): Do not linger between pages.",
  "(Untranslated glyph): Speculum.",
  "(Shafiq, 1911): Let none return with more than memory.",
  "(Figure caption): He never looked up.",
  "(Burn-marked): Stylus pointing north.",
  "(Undated): The map omits all roads.",
  "(Inverted prayer): Bear witness or burn.",
  "(Exeter ledger): This version disagrees.",
  "(Recovered fax): The seal does not match any known record.",
  "(Margin ink): The cistern did whisper back.",
  "(Caligula, observed): He laughed at cruelty. He may not be laughing.",
  "(Stanton, private note): I no longer keep the copy in my office.",
  "(Livia Drusilla?): A warning about the winged threshold.",
  "(Editor’s glitch): Line break duplicates appear without version control.",
  "(Post-scriptum): The cloak is seen three entries too early.",
  "(Null source): No record of Shafiq A. at Damascus.",
  "(Folio edge): Appears only when printed.",
  "(Margin repeat): Nones always felt like a trap.",
  "(Calvert, Lecture Title): Concerning the Footnotes We Do Not Annotate.",
  "(Annotation anomaly): This note was not present yesterday.",
  "(Echo?): The text implies it is not an echo, but a rehearsal.",
  "(Fragment recovered): I think I hate him.",
  "(A.M.S.): This is not annotation. This is mapmaking.",
  "(Chronological offset): Entry XXVIII ends differently here.",
  "(Inferred): Stylus = authorship = guilt.",
  "(Footnote): Not included in the Exeter archive.",
  "(Ed. insert?): Returned: never."
];

function injectMarginalia() {
  const container = document.querySelector(".index-card") || document.querySelector(".content");
  if (!container) return;

  console.log("Injecting marginalia...");
  const margin = document.createElement("div");
  margin.className = "marginalia-layer";
  document.body.appendChild(margin);

  const count = 20 + Math.floor(Math.random() * 6); // 20–25 notes only

  for (let i = 0; i < count; i++) {
    const text = marginalia[Math.floor(Math.random() * marginalia.length)];
    const note = document.createElement("div");
    note.className = "marginalia-note";
    note.textContent = text;

    // Randomize vertical placement
    note.style.top = `${Math.floor(Math.random() * 92) + 4}%`; // top 4–96%

    // Keep them mostly outside the readable area
    const flip = Math.random();
    if (flip < 0.45) {
      note.style.left = "-13rem"; // left margin
    } else if (flip > 0.55) {
      note.style.left = "calc(100% + 2rem)"; // right margin
    } else {
      note.style.left = `${Math.floor(Math.random() * 40) + 30}%`; // rare: float in center 30–70%
      note.style.opacity = "0.2"; // translucent
    }

    note.style.transform = `rotate(${Math.random() * 6 - 3}deg)`;
    note.style.position = "absolute";
    note.style.zIndex = `${Math.floor(Math.random() * 2) + 8}`; // 8–9

    margin.appendChild(note);
  }

  console.log(`Injected ${count} marginalia-note elements...`);
}

function runWhenReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    requestAnimationFrame(fn);
  }
}

runWhenReady(() => {
  console.log("✅ Window loaded. Running marginalia.");
  injectMarginalia();

  setInterval(() => {
    const notes = document.querySelectorAll(".marginalia-note");
    notes.forEach(note => {
      const alt = marginalia[Math.floor(Math.random() * marginalia.length)];
      note.textContent = alt;
    });
  }, 20000); // every 20s

  setTimeout(() => {
    const old = document.querySelector(".marginalia-layer");
    if (old) old.remove();
    injectMarginalia();
  }, 90000); // full regen
});
