const el = document.getElementById("search");
const SAFE_MARGIN = 40;
const FOOTER_OFFSET = 80; // Brave bottom bar
const TRIGGER_DISTANCE = 140;

let lastMove = 0;
const COOLDOWN = 200; // ms

function moveRandomly() {
  // const r = el.getBoundingClientRect();

  // const maxX = window.innerWidth - r.width - SAFE_MARGIN;
  // const maxY = window.innerHeight - r.height - SAFE_MARGIN - FOOTER_OFFSET;

  // const x = Math.random() * maxX + SAFE_MARGIN;
  // const y = Math.random() * maxY + SAFE_MARGIN;

  // el.style.left = `${x}px`;
  // el.style.top = `${y}px`;
  // el.style.transform = "none";
  const now = Date.now();
  if (now - lastMove < COOLDOWN) return;
  lastMove = now;

  const r = el.getBoundingClientRect();

  const maxX = window.innerWidth - r.width - SAFE_MARGIN;
  const maxY = window.innerHeight - r.height - SAFE_MARGIN - FOOTER_OFFSET;

  const x = Math.random() * maxX + SAFE_MARGIN;
  const y = Math.random() * maxY + SAFE_MARGIN;

  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.transform = "none";
}

window.addEventListener("mousemove", (e) => {
  const r = el.getBoundingClientRect();
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;

  const dx = e.clientX - cx;
  const dy = e.clientY - cy;

  if (Math.hypot(dx, dy) < TRIGGER_DISTANCE) {
    moveRandomly();
  }
});

search.addEventListener("mouseenter", moveRandomly);

search.addEventListener("focusin", moveRandomly);

search.addEventListener("keydown", moveRandomly);
