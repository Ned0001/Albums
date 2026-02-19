const ALBUMS = [
  { name: "Kind of Blue", artist: "Miles Davis", year: 1959, color: "#1a3a5c" },
  { name: "A Love Supreme", artist: "John Coltrane", year: 1965, color: "#c46210" },
  { name: "Pet Sounds", artist: "The Beach Boys", year: 1966, color: "#2e8b57" },
  { name: "Sgt. Pepper's", artist: "The Beatles", year: 1967, color: "#d4a017" },
  { name: "Led Zeppelin IV", artist: "Led Zeppelin", year: 1971, color: "#8b7d6b" },
  { name: "What's Going On", artist: "Marvin Gaye", year: 1971, color: "#4682b4" },
  { name: "Ziggy Stardust", artist: "David Bowie", year: 1972, color: "#b8486e" },
  { name: "Rumours", artist: "Fleetwood Mac", year: 1977, color: "#e8d5b7" },
  { name: "Never Mind the Bollocks", artist: "Sex Pistols", year: 1977, color: "#e8c819" },
  { name: "Unknown Pleasures", artist: "Joy Division", year: 1979, color: "#1a1a1a" },
  { name: "London Calling", artist: "The Clash", year: 1979, color: "#2d5a27" },
  { name: "Thriller", artist: "Michael Jackson", year: 1982, color: "#c9a84c" },
  { name: "Purple Rain", artist: "Prince", year: 1984, color: "#6a0dad" },
  { name: "Licensed to Ill", artist: "Beastie Boys", year: 1986, color: "#1874cd" },
  { name: "The Joshua Tree", artist: "U2", year: 1987, color: "#8b6914" },
  { name: "Straight Outta Compton", artist: "N.W.A", year: 1988, color: "#2f2f2f" },
  { name: "Disintegration", artist: "The Cure", year: 1989, color: "#4a4a6a" },
  { name: "Nevermind", artist: "Nirvana", year: 1991, color: "#1c86ee" },
  { name: "The Low End Theory", artist: "A Tribe Called Quest", year: 1991, color: "#8b0000" },
  { name: "Automatic for the People", artist: "R.E.M.", year: 1992, color: "#3d3d3d" },
  { name: "Enter the Wu-Tang", artist: "Wu-Tang Clan", year: 1993, color: "#daa520" },
  { name: "Illmatic", artist: "Nas", year: 1994, color: "#5c4033" },
  { name: "OK Computer", artist: "Radiohead", year: 1997, color: "#708090" },
  { name: "Homogenic", artist: "Bjork", year: 1997, color: "#c0c0c0" },
  { name: "Stankonia", artist: "OutKast", year: 2000, color: "#b22222" },
  { name: "Kid A", artist: "Radiohead", year: 2000, color: "#4f7a8a" },
  { name: "Is This It", artist: "The Strokes", year: 2001, color: "#f5f5dc" },
  { name: "The College Dropout", artist: "Kanye West", year: 2004, color: "#cd853f" },
  { name: "Back to Black", artist: "Amy Winehouse", year: 2006, color: "#2b2b2b" },
  { name: "In Rainbows", artist: "Radiohead", year: 2007, color: "#e04040" },
  { name: "My Beautiful Dark Twisted Fantasy", artist: "Kanye West", year: 2010, color: "#a0522d" },
  { name: "good kid, m.A.A.d city", artist: "Kendrick Lamar", year: 2012, color: "#5b5b5b" },
  { name: "Random Access Memories", artist: "Daft Punk", year: 2013, color: "#1c1c1c" },
  { name: "To Pimp a Butterfly", artist: "Kendrick Lamar", year: 2015, color: "#556b2f" },
  { name: "Blonde", artist: "Frank Ocean", year: 2016, color: "#98fb98" },
  { name: "DAMN.", artist: "Kendrick Lamar", year: 2017, color: "#cd2626" },
];

// State
let pool = [];
let timeline = [];
let currentAlbum = null;
let currentIndex = 0;
let score = 0;
const ROUND_SIZE = 8;

// DOM
const startScreen = document.getElementById("start-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const winScreen = document.getElementById("win-screen");
const startBtn = document.getElementById("start-btn");
const restartBtnLose = document.getElementById("restart-btn-lose");
const restartBtnWin = document.getElementById("restart-btn-win");
const scoreEl = document.getElementById("score");
const currentAlbumEl = document.getElementById("current-album");
const currentAlbumSection = document.getElementById("current-album-section");
const timelineEl = document.getElementById("timeline");
const gameOverMessage = document.getElementById("game-over-message");
const gameOverScore = document.getElementById("game-over-score");

// Events
startBtn.addEventListener("click", startGame);
restartBtnLose.addEventListener("click", startGame);
restartBtnWin.addEventListener("click", startGame);

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startGame() {
  startScreen.classList.remove("visible");
  gameOverScreen.classList.remove("visible");
  winScreen.classList.remove("visible");

  pool = shuffle([...ALBUMS]).slice(0, ROUND_SIZE);
  timeline = [];
  currentIndex = 0;
  score = 0;
  scoreEl.textContent = score;

  // Place the first album automatically
  timeline.push(pool[0]);
  currentIndex = 1;

  renderTimeline();
  presentNextAlbum();
}

function getInitials(name) {
  return name
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

function isLightColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 140;
}

function createAlbumCard(album, showYear) {
  const div = document.createElement("div");
  div.className = "album-card";

  const art = document.createElement("div");
  art.className = "album-art";
  art.style.background = album.color;
  art.style.color = isLightColor(album.color) ? "#1a1a1a" : "#f0f0f0";
  art.textContent = getInitials(album.name);
  div.appendChild(art);

  const name = document.createElement("div");
  name.className = "album-name";
  name.textContent = album.name;
  div.appendChild(name);

  const artist = document.createElement("div");
  artist.className = "album-artist";
  artist.textContent = album.artist;
  div.appendChild(artist);

  if (showYear) {
    const year = document.createElement("div");
    year.className = "album-year";
    year.textContent = album.year;
    div.appendChild(year);
  }

  return div;
}

function presentNextAlbum() {
  if (currentIndex >= pool.length) {
    showWin();
    return;
  }

  currentAlbum = pool[currentIndex];
  currentAlbumSection.style.display = "block";

  currentAlbumEl.innerHTML = "";
  const card = createAlbumCard(currentAlbum, false);
  card.classList.add("new-album");
  currentAlbumEl.appendChild(card.querySelector(".album-art"));
  currentAlbumEl.appendChild(card.querySelector(".album-name"));
  currentAlbumEl.appendChild(card.querySelector(".album-artist"));

  renderTimeline();
}

function renderTimeline() {
  timelineEl.innerHTML = "";

  // Sort timeline by year for display
  timeline.sort((a, b) => a.year - b.year);

  const showSlots = currentAlbum !== null;

  for (let i = 0; i <= timeline.length; i++) {
    if (showSlots) {
      const slot = document.createElement("div");
      slot.className = "insert-slot";
      slot.dataset.index = i;
      slot.addEventListener("click", () => handlePlacement(i));
      timelineEl.appendChild(slot);
    }

    if (i < timeline.length) {
      const card = createAlbumCard(timeline[i], true);
      card.classList.add("timeline-album");
      timelineEl.appendChild(card);
    }
  }
}

function handlePlacement(slotIndex) {
  if (!currentAlbum) return;

  // Determine if placement is valid
  // The album at slotIndex would be inserted at that position in the sorted timeline
  const yearBefore = slotIndex > 0 ? timeline[slotIndex - 1].year : -Infinity;
  const yearAfter = slotIndex < timeline.length ? timeline[slotIndex].year : Infinity;
  const albumYear = currentAlbum.year;

  const correct = albumYear >= yearBefore && albumYear <= yearAfter;

  if (correct) {
    timeline.push(currentAlbum);
    score++;
    scoreEl.textContent = score;
    currentIndex++;
    currentAlbum = null;

    // Re-render with animation
    renderTimeline();

    // Highlight the newly placed card
    const cards = timelineEl.querySelectorAll(".timeline-album");
    timeline.sort((a, b) => a.year - b.year);
    const placedIdx = timeline.findIndex(
      (a) => a.name === pool[currentIndex - 1].name
    );
    if (cards[placedIdx]) {
      cards[placedIdx].classList.add("just-placed");
    }

    setTimeout(() => presentNextAlbum(), 500);
  } else {
    // Wrong answer
    timelineEl.classList.add("wrong-flash");
    setTimeout(() => timelineEl.classList.remove("wrong-flash"), 500);
    setTimeout(() => showGameOver(), 700);
  }
}

function showGameOver() {
  currentAlbumSection.style.display = "none";
  currentAlbum = null;

  // Show all years on timeline
  renderTimeline();

  const album = pool[currentIndex];
  gameOverMessage.textContent = `"${album.name}" by ${album.artist} was released in ${album.year}.`;
  gameOverScore.textContent = `You placed ${score} out of ${ROUND_SIZE - 1} albums correctly.`;
  gameOverScreen.classList.add("visible");
}

function showWin() {
  currentAlbumSection.style.display = "none";
  currentAlbum = null;
  renderTimeline();
  winScreen.classList.add("visible");
}
