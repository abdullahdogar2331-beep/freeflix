/* ===== DATA (edit images/titles here) ===== */
// Images use picsum.photos seeded stand-ins. Replace any `img` value with your own URL.
const IMG = (seed, w = 600, h = 900) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const VIDEO_SRC = ""; // Optional: put a licensed/royalty-free .mp4 URL here to enable the demo player.
const HERO_IMG = "https://picsum.photos/seed/freeflix-heist-night/1920/1080";

const MOVIES = [
  { id: "m1", type: "Movie", title: "Shadow Protocol", year: 2026, genre: "Thriller", runtime: "2h 04m", rating: "8.4", img: IMG("shadow-protocol"), desc: "A disgraced analyst uncovers a hidden network that rewrites history one night at a time." },
  { id: "m2", type: "Movie", title: "Last Horizon", year: 2025, genre: "Sci-Fi", runtime: "2h 21m", rating: "8.1", img: IMG("last-horizon"), desc: "The final colony ship drifts toward a signal no one was meant to hear." },
  { id: "m3", type: "Movie", title: "Red Signal", year: 2026, genre: "Action", runtime: "1h 52m", rating: "7.9", img: IMG("red-signal"), desc: "One rooftop, one countdown, and a courier who cannot afford to be late." },
  { id: "m4", type: "Movie", title: "Midnight Run", year: 2024, genre: "Adventure", runtime: "1h 58m", rating: "7.6", img: IMG("midnight-run"), desc: "Three strangers race across the desert to deliver a mysterious crate before sunrise." },
  { id: "m5", type: "Movie", title: "Dark City Rain", year: 2025, genre: "Drama", runtime: "2h 10m", rating: "8.2", img: IMG("dark-city-rain"), desc: "A retired detective returns to the streets that shaped him, and the secrets they kept." },
  { id: "m6", type: "Movie", title: "The Final Code", year: 2026, genre: "Thriller", runtime: "1h 47m", rating: "7.8", img: IMG("final-code"), desc: "A cryptographer has 48 hours to break a cipher that is breaking her first." },
  { id: "m7", type: "Movie", title: "Black Horizon", year: 2024, genre: "Horror", runtime: "1h 39m", rating: "7.2", img: IMG("black-horizon"), desc: "A lighthouse crew learns the fog has been counting them." },
  { id: "m8", type: "Movie", title: "Silent Target", year: 2025, genre: "Action", runtime: "2h 01m", rating: "7.7", img: IMG("silent-target"), desc: "A sniper with no orders must decide who is really behind the scope." },
  { id: "m9", type: "Movie", title: "Laugh Lines", year: 2026, genre: "Comedy", runtime: "1h 36m", rating: "7.3", img: IMG("laugh-lines"), desc: "Two rival stand-ups are trapped in one tour van for thirty chaotic nights." },
  { id: "m10", type: "Movie", title: "Paper Lanterns", year: 2025, genre: "Romance", runtime: "1h 55m", rating: "7.9", img: IMG("paper-lanterns"), desc: "A festival photographer and a lantern maker find each other, one night at a time." },
  { id: "m11", type: "Movie", title: "Little Comet", year: 2026, genre: "Animation", runtime: "1h 28m", rating: "8.0", img: IMG("little-comet"), desc: "A tiny comet sets out to find the sky's brightest star, and learns to glow on its own." },
  { id: "m12", type: "Movie", title: "Beneath the Ice", year: 2024, genre: "Documentary", runtime: "1h 44m", rating: "8.5", img: IMG("beneath-the-ice"), desc: "Scientists descend below the polar cap to film a world untouched for a million years." }
];

const SERIES = [
  { id: "s1", type: "Series", title: "Vault Nine", year: 2026, genre: "Thriller", seasons: "3 Seasons", runtime: "48m / ep", rating: "8.6", img: IMG("vault-nine"), desc: "A crew of specialists plans an impossible job beneath a sleeping city." },
  { id: "s2", type: "Series", title: "Neon Outpost", year: 2025, genre: "Sci-Fi", seasons: "2 Seasons", runtime: "52m / ep", rating: "8.2", img: IMG("neon-outpost"), desc: "Life on a lawless space station where every favor has a price." },
  { id: "s3", type: "Series", title: "Crown of Ash", year: 2026, genre: "Drama", seasons: "1 Season", runtime: "58m / ep", rating: "8.3", img: IMG("crown-of-ash"), desc: "Three families fight for a fading empire in the last days of winter." },
  { id: "s4", type: "Series", title: "Night Shift", year: 2024, genre: "Horror", seasons: "4 Seasons", runtime: "44m / ep", rating: "7.8", img: IMG("night-shift"), desc: "The graveyard shift at a small-town hospital never ends quietly." },
  { id: "s5", type: "Series", title: "Wild Frontier", year: 2025, genre: "Adventure", seasons: "2 Seasons", runtime: "50m / ep", rating: "7.9", img: IMG("wild-frontier"), desc: "An expedition maps the last blank corner of the world." },
  { id: "s6", type: "Series", title: "Office Hours", year: 2026, genre: "Comedy", seasons: "5 Seasons", runtime: "24m / ep", rating: "8.0", img: IMG("office-hours"), desc: "A university department where nothing is ever on schedule." },
  { id: "s7", type: "Series", title: "Iron Circuit", year: 2025, genre: "Action", seasons: "3 Seasons", runtime: "46m / ep", rating: "7.7", img: IMG("iron-circuit"), desc: "An underground racing league becomes a fight for the city's future." },
  { id: "s8", type: "Series", title: "Tidewater", year: 2024, genre: "Romance", seasons: "2 Seasons", runtime: "45m / ep", rating: "7.5", img: IMG("tidewater"), desc: "Two harbor towns, one summer, and a love neither family approves of." }
];

const CATEGORIES = [
  { name: "Action", img: IMG("cat-action", 700, 440) },
  { name: "Comedy", img: IMG("cat-comedy", 700, 440) },
  { name: "Drama", img: IMG("cat-drama", 700, 440) },
  { name: "Horror", img: IMG("cat-horror", 700, 440) },
  { name: "Sci-Fi", img: IMG("cat-scifi", 700, 440) },
  { name: "Thriller", img: IMG("cat-thriller", 700, 440) },
  { name: "Romance", img: IMG("cat-romance", 700, 440) },
  { name: "Adventure", img: IMG("cat-adventure", 700, 440) },
  { name: "Animation", img: IMG("cat-animation", 700, 440) },
  { name: "Documentary", img: IMG("cat-documentary", 700, 440) }
];

const CONTINUE = [
  { id: "m1", progress: 68 }, { id: "s1", progress: 42 }, { id: "m2", progress: 85 }, { id: "s3", progress: 23 }
];

const BENEFITS = [
  { t: "Cinematic Experience", d: "Rich visuals and a theatre-inspired look in every corner.", i: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5M16 4v5"/>' },
  { t: "Discover New Stories", d: "Fresh movies and series added regularly, sorted by mood.", i: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 5-5 2 2-5z"/>' },
  { t: "Watch Anywhere", d: "Designed to look great on phone, tablet, laptop and TV.", i: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>' },
  { t: "Simple & Fast", d: "No clutter. Find it, click it, watch it.", i: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>' }
];

const ALL = [...MOVIES, ...SERIES];
const $ = (id) => document.getElementById(id);
const PLAY = '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>';
const find = (id) => ALL.find((x) => x.id === id);

/* ===== RENDER HELPERS ===== */
function sub(x) { return x.type === "Series" ? `${x.genre} • ${x.seasons}` : `${x.year} • ${x.genre}`; }

function cardHTML(x, rank) {
  const inner = `<img src="${x.img}" alt="${x.title}" loading="lazy" onerror="this.style.opacity=0">
    <div class="ov"><h3>${x.title}</h3><small>${sub(x)}</small></div>
    <span class="hd">HD</span><span class="play">${PLAY}</span>`;
  if (rank) return `<div class="card" data-id="${x.id}"><span class="rank">${String(rank).padStart(2, "0")}</span><div class="pic">${inner}</div></div>`;
  return `<div class="card" data-id="${x.id}">${inner}</div>`;
}

function contHTML(c) {
  const x = find(c.id);
  return `<div class="card" data-id="${x.id}"><img src="${IMG(x.id + "-wide", 640, 360)}" alt="${x.title}" loading="lazy" onerror="this.style.opacity=0">
    <div class="ov"><h3>${x.title}</h3><div class="bar"><i style="width:${c.progress}%"></i></div><small>${c.progress}% watched</small><button class="btn primary">Continue</button></div></div>`;
}

function fill(el, items, empty) {
  el.innerHTML = items.length ? items.map(cardHTML).join("") : `<div class="empty">${empty || "No results found"}</div>`;
}

/* ===== INITIAL RENDER ===== */
fill($("featuredRow"), MOVIES.slice(0, 8));
fill($("seriesGrid"), SERIES);
$("trendRow").innerHTML = [...MOVIES.slice(0, 5), ...SERIES.slice(0, 5)].map((x, i) => cardHTML(x, i + 1)).join("");
$("contRow").innerHTML = CONTINUE.map(contHTML).join("");
$("heroBg").style.backgroundImage = `url(${HERO_IMG})`;

$("catGrid").innerHTML = CATEGORIES.map((c) => `<div class="cat" data-cat="${c.name}"><img src="${c.img}" alt="${c.name}" loading="lazy" onerror="this.style.opacity=0"><div><b>${c.name.toUpperCase()}</b><span>Explore →</span></div></div>`).join("");
$("whyGrid").innerHTML = BENEFITS.map((b) => `<div class="feat"><svg viewBox="0 0 24 24">${b.i}</svg><h3>${b.t}</h3><p>${b.d}</p></div>`).join("");

/* ===== CATEGORY FILTERING ===== */
const FILTERS = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller"];
$("chips").innerHTML = FILTERS.map((f, i) => `<button class="chip${i ? "" : " on"}" data-f="${f}">${f}</button>`).join("");

function applyFilter(f) {
  document.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c.dataset.f === f));
  fill($("filterGrid"), f === "All" ? ALL : ALL.filter((x) => x.genre === f), `No ${f} titles yet`);
}
applyFilter("All");
$("chips").addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (b) applyFilter(b.dataset.f); });

/* ===== MODAL ===== */
let current = null;
function openModal(id) {
  const x = find(id); if (!x) return;
  current = x;
  $("modalMedia").innerHTML = `<img src="${x.img.replace("/600/900", "/1200/675")}" alt="${x.title}" onerror="this.style.opacity=0">`;
  $("mTitle").textContent = x.title;
  $("mDesc").textContent = x.desc;
  $("mTags").innerHTML = `<span class="hd">HD</span><span>${x.genre}</span><span>${x.year}</span><span>${x.runtime}</span><span>★ ${x.rating}</span>${x.seasons ? `<span>${x.seasons}</span>` : ""}`;
  $("mWatch").textContent = "▶ Start Watching";
  $("modal").hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() { $("modal").hidden = true; $("modalMedia").innerHTML = ""; document.body.style.overflow = ""; }

$("mWatch").addEventListener("click", () => {
  if (!current) return;
  const box = $("modalMedia");
  box.innerHTML = VIDEO_SRC
    ? `<video src="${VIDEO_SRC}" controls autoplay></video>`
    : `<div class="demo">Demo player — add your licensed video source here.</div>`;
});
$("modalClose").addEventListener("click", closeModal);
$("modal").addEventListener("click", (e) => { if (e.target === $("modal")) closeModal(); });

/* Card clicks (delegated across the whole page, including search results) */
document.addEventListener("click", (e) => {
  const cat = e.target.closest(".cat");
  if (cat) { closeSearch(); applyFilter(FILTERS.includes(cat.dataset.cat) ? cat.dataset.cat : "All"); if (!FILTERS.includes(cat.dataset.cat)) openSearch(cat.dataset.cat); else $("movies").scrollIntoView(); return; }
  const card = e.target.closest(".card[data-id]");
  if (card) openModal(card.dataset.id);
});

/* Hero buttons */
$("heroWatch").addEventListener("click", () => openModal("m1"));
$("heroInfo").addEventListener("click", () => openModal("m1"));

/* ===== SEARCH ===== */
function runSearch(q) {
  q = q.trim().toLowerCase();
  const out = $("searchResults");
  if (!q) { out.innerHTML = `<div class="empty">Start typing to search movies, series or categories.</div>`; return; }
  const hits = ALL.filter((x) => x.title.toLowerCase().includes(q) || x.genre.toLowerCase().includes(q) || x.type.toLowerCase().includes(q));
  fill(out, hits, "No results found");
}
function openSearch(v = "") {
  $("search").hidden = false; document.body.style.overflow = "hidden";
  $("searchInput").value = v; runSearch(v); $("searchInput").focus();
}
function closeSearch() { $("search").hidden = true; if ($("modal").hidden) document.body.style.overflow = ""; }
$("searchBtn").addEventListener("click", () => openSearch());
$("searchClose").addEventListener("click", closeSearch);
$("searchInput").addEventListener("input", (e) => runSearch(e.target.value));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeSearch(); } });

/* ===== NAVBAR ===== */
window.addEventListener("scroll", () => $("nav").classList.toggle("solid", window.scrollY > 40), { passive: true });
$("burger").addEventListener("click", () => $("links").classList.toggle("open"));
$("links").addEventListener("click", (e) => { if (e.target.tagName === "A") $("links").classList.remove("open"); });

function toast(msg) { const t = $("toast"); t.textContent = msg; t.classList.add("show"); setTimeout(() => t.classList.remove("show"), 2600); }
$("signInBtn").addEventListener("click", () => toast("Sign In is a demo button."));

/* ===== NEWSLETTER ===== */
$("newsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const v = $("newsEmail").value.trim(), m = $("newsMsg");
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { m.className = "form-msg"; m.textContent = "Thanks for subscribing! You're on the list."; $("newsEmail").value = ""; }
  else { m.className = "form-msg err"; m.textContent = "Please enter a valid email address."; }
});
