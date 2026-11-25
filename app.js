/* =========================================================
   ZGOD RITTIK — Cloud Hub Engine (Zero-Dependency ES6+)
   ========================================================= */

// 1. Global Crash & Error Shield
(function installErrorShield() {
  const shield = document.getElementById("error-shield");
  const textEl = document.getElementById("error-shield-text");
  const copyBtn = document.getElementById("btn-copy-error");

  function showErr(msg) {
    if (!shield || !textEl) return;
    textEl.textContent = String(msg);
    shield.classList.remove("hidden");
  }

  window.onerror = function (message, source, lineno, colno) {
    showErr(`${message}\nAt: ${source}:${lineno}:${colno}`);
    return false;
  };

  window.onunhandledrejection = function (event) {
    showErr(`Unhandled Promise Rejection:\n${event.reason}`);
  };

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard?.writeText(textEl.textContent || "");
      showSnackbar("Diagnostic error copied");
    });
  }
})();

// 2. Crisp Inline SVG Vector Icon Factory (Zero Emojis)
const IconFactory = {
  svg(paths, size = 20) {
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
  },
  search() {
    return this.svg('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>');
  },
  palette() {
    return this.svg('<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>');
  },
  plus() {
    return this.svg('<path d="M12 5v14"/><path d="M5 12h14"/>');
  },
  close() {
    return this.svg('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>');
  },
  home() {
    return this.svg('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>');
  },
  cpu() {
    return this.svg('<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>');
  },
  wrench() {
    return this.svg('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>');
  },
  terminal() {
    return this.svg('<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>');
  },
  play() {
    return this.svg('<polygon points="5 3 19 12 5 21 5 3"/>');
  },
  shield() {
    return this.svg('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>');
  },
  download() {
    return this.svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>');
  },
  bookmark(filled = false) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>`;
  },
  check() {
    return this.svg('<polyline points="20 6 9 17 4 12"/>');
  }
};

// 3. Default Curated Archive Data (Stored + Extensible in localStorage)
const DEFAULT_DATA = {
  roms: [
    {
      id: "rom-hyperos-cn-port",
      title: "HyperOS 2 China Hybrid Port (Redmi K70E Base)",
      category: "HyperOS Ports",
      device: "POCO X6 Pro / Redmi K70E (Duchamp)",
      android: "Android 15",
      size: "5.4 GB",
      sha256: "8f4b2e91c04a7d6f3b11a9c4e552d08f19c3b7a2e4d1809f6c3a1122b8e9041a",
      desc: "Smooth 120Hz animations, patched Indian modem/md1img for full 5G carrier aggregation, and optimized thermal profile.",
      notes: "Flash via PBRP / OrangeFox or Fastboot script. Format Data required if migrating from AOSP or global stock.",
      url: "https://www.youtube.com/@ZGODRITTIK"
    },
    {
      id: "rom-voltage-aosp",
      title: "VoltageOS Official Build — Clean AOSP",
      category: "AOSP",
      device: "POCO X6 Pro (Duchamp)",
      android: "Android 15",
      size: "2.3 GB",
      sha256: "3d9a71c5b2084e1f9a66c302d84e119b7c42a085e3f1902c6b8a4419d7e0235f",
      desc: "Minimal, battery-focused AOSP experience with Play Integrity readiness, zero bloatware, and high gaming frame stability.",
      notes: "Includes firmware vendor check. Recommended with KernelSU-Next for root modules.",
      url: "https://www.youtube.com/@ZGODRITTIK"
    },
    {
      id: "rom-eliterom-lite",
      title: "EliteROM Lite — Debloated Performance Edition",
      category: "China Base",
      device: "Redmi K70E / POCO X6 Pro",
      android: "Android 14 / 15",
      size: "4.9 GB",
      sha256: "6a1c84d2e9053b7f1c48a290e73d551b8f24c906d1a3874e5b9c2038f6a1472d",
      desc: "Pre-debloated HyperOS build with enhanced Game Turbo, unlocked high refresh rate profiles, and multi-language support.",
      notes: "Backup persist partition before flashing. Verify anti-rollback index on HyperOS 2+.",
      url: "https://www.youtube.com/@ZGODRITTIK"
    }
  ],
  tools: [
    {
      id: "tool-hybrid-flasher",
      title: "Rittik Hybrid ROM Flasher (Termux CLI)",
      category: "Termux Scripts",
      version: "v2.4 • aarch64",
      size: "48 KB",
      desc: "Automated Termux fastboot flashing script with partition verification, super.img slot handling, and safe OTG detection.",
      command: "git clone https://github.com/rittik55/Rittik-Hybrib-rom-flasher && cd Rittik-Hybrib-rom-flasher && bash flash.sh",
      scriptName: "rittik-flasher-setup.sh",
      url: "https://github.com/rittik55"
    },
    {
      id: "tool-zgod-netengine",
      title: "Z-GOD NetEngine & 5G Band Locker",
      category: "Utility APKs",
      version: "v1.8 • Pure SDK",
      size: "1.4 MB",
      desc: "Lightweight Android utility APK for locking NR N78/N28 5G bands, monitoring latency, and stabilizing ping during gaming.",
      command: "am start -n com.zgod.netengine/.MainActivity",
      scriptName: "launch-netengine.sh",
      url: "https://www.youtube.com/@ZGODRITTIK"
    },
    {
      id: "tool-ksu-120fps",
      title: "120 FPS & Original Color Pro Spoof Module",
      category: "KernelSU / Magisk",
      version: "v3.1 • Zygisk-Free",
      size: "320 KB",
      desc: "Systemless prop module enabling 120 FPS unlock and vivid display color calibration without triggering banking app detections.",
      command: "su -c 'ksud module install /sdcard/Download/ZGOD-120FPS-Pro.zip'",
      scriptName: "install-120fps-module.sh",
      url: "https://www.youtube.com/@ZGODRITTIK"
    }
  ],
  videos: [
    {
      id: "vid-flash-no-pc",
      title: "How to Flash Custom ROMs Using Only Phone & Termux (No PC)",
      category: "Flashing Guides",
      duration: "11:42",
      date: "2026",
      desc: "Complete OTG + Termux fastboot walkthrough covering bootloader check, modem patching, and safe super.img flashing.",
      steps: [
        "00:00 — Required OTG cable & Termux android-tools setup",
        "03:15 — Backing up modem & persist partitions safely",
        "06:40 — Running the automated fastboot flashing script",
        "09:50 — First boot & Play Integrity verification"
      ],
      url: "https://www.youtube.com/@ZGODRITTIK"
    },
    {
      id: "vid-gsf-shizuku",
      title: "Fix Play Protect Not Certified & Get GSF ID on Android 15/16",
      category: "Root & Shizuku",
      duration: "07:18",
      date: "2026",
      desc: "Step-by-step guide to retrieving your Google Services Framework ID via Shizuku and registering custom ROM builds.",
      steps: [
        "00:00 — Why custom ROMs show Device Not Certified",
        "02:10 — Pairing Shizuku via Wireless Debugging",
        "04:30 — Extracting GSF ID & registering on Google Portal"
      ],
      url: "https://www.youtube.com/@ZGODRITTIK"
    },
    {
      id: "vid-hyperos-vs-aosp",
      title: "HyperOS China Port vs VoltageOS AOSP — Gaming & Battery Test",
      category: "ROM Reviews",
      duration: "14:05",
      date: "2026",
      desc: "Side-by-side thermal, 120 FPS stability, and standby drain comparison on POCO X6 Pro (Dimensity 8300-Ultra).",
      steps: [
        "00:00 — UI smoothness & RAM management comparison",
        "05:20 — 1-hour 120 FPS gaming thermal benchmark",
        "10:45 — Final verdict: Which ROM should you daily drive?"
      ],
      url: "https://www.youtube.com/@ZGODRITTIK"
    }
  ]
};

// 4. State & Persistence Manager
const STORAGE_KEY_DATA = "zgod_hub_data_v1";
const STORAGE_KEY_SAVED = "zgod_hub_saved_v1";
const STORAGE_KEY_THEME = "zgod_hub_theme_v1";
const STORAGE_KEY_EMBLEM = "zgod_hub_emblem_v1";

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DATA);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.roms) && Array.isArray(parsed.tools) && Array.isArray(parsed.videos)) {
        return parsed;
      }
    }
  } catch (_) {}
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveStore(data) {
  localStorage.setItem(STORAGE_KEY_DATA, JSON.stringify(data));
}

function loadSavedIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY_SAVED) || "[]"));
  } catch (_) {
    return new Set();
  }
}

function persistSavedIds(set) {
  localStorage.setItem(STORAGE_KEY_SAVED, JSON.stringify([...set]));
}

let appData = loadStore();
let savedIds = loadSavedIds();
let activeTab = "home";
let searchQuery = "";
let activeFilters = {
  roms: "All",
  tools: "All",
  videos: "All"
};

// 5. Dynamic Theme Engine
const THEMES = [
  {
    id: "midnight",
    name: "Midnight Liquid",
    subtitle: "Deep Cyan & Indigo Glass (Dark)",
    metaColor: "#060913",
    swatches: ["#060913", "#38bdf8", "#818cf8", "#10b981"]
  },
  {
    id: "amoled",
    name: "AMOLED Violet",
    subtitle: "True Pitch Black & Neon Violet (Dark)",
    metaColor: "#000000",
    swatches: ["#000000", "#c084fc", "#f472b6", "#6366f1"]
  },
  {
    id: "crimson",
    name: "Crimson Cyber",
    subtitle: "Dark Obsidian & Ruby Glow (Dark)",
    metaColor: "#0d0508",
    swatches: ["#0d0508", "#fb7185", "#f59e0b", "#e11d48"]
  },
  {
    id: "light-glass",
    name: "Liquid Glass",
    subtitle: "Frosted Ice & Sky Blue (Light)",
    metaColor: "#eef4fb",
    swatches: ["#eef4fb", "#0284c7", "#4f46e5", "#0ea5e9"]
  },
  {
    id: "sakura",
    name: "Sakura Dream",
    subtitle: "Soft Rose & Magenta Mist (Light)",
    metaColor: "#fdf2f6",
    swatches: ["#fdf2f6", "#db2777", "#9333ea", "#f472b6"]
  }
];

function applyTheme(themeId) {
  const theme = THEMES.find(t => t.id === themeId) || THEMES[0];
  document.documentElement.setAttribute("data-theme", theme.id);
  const meta = document.getElementById("meta-theme-color");
  if (meta) meta.setAttribute("content", theme.metaColor);
  localStorage.setItem(STORAGE_KEY_THEME, theme.id);
}

applyTheme(localStorage.getItem(STORAGE_KEY_THEME) || "midnight");

// 6. 60 FPS Animated Canvas Background
let emblemEnabled = localStorage.getItem(STORAGE_KEY_EMBLEM) !== "false";

(function initCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w = 0, h = 0, dpr = 1, angle = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  function getCssVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || "rgba(56,189,248,0.2)";
  }

  function drawPolygon(cx, cy, radius, sides, rot) {
    ctx.beginPath();
    for (let i = 0; i < sides; i++) {
      const a = rot + (i * Math.PI * 2) / sides;
      const x = cx + Math.cos(a) * radius;
      const y = cy + Math.sin(a) * radius;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  function frame(ts) {
    const t = ts * 0.0005;
    ctx.clearRect(0, 0, w, h);

    // Soft ambient glowing orbs
    const orbs = [
      { x: w * (0.25 + 0.15 * Math.sin(t)), y: h * (0.22 + 0.1 * Math.cos(t * 0.8)), r: Math.max(w, h) * 0.36, c: getCssVar("--orb-1") },
      { x: w * (0.78 + 0.14 * Math.cos(t * 0.9)), y: h * (0.65 + 0.12 * Math.sin(t * 0.7)), r: Math.max(w, h) * 0.38, c: getCssVar("--orb-2") },
      { x: w * (0.5 + 0.18 * Math.sin(t * 0.6)), y: h * (0.85 + 0.08 * Math.cos(t)), r: Math.max(w, h) * 0.3, c: getCssVar("--orb-3") }
    ];

    for (const orb of orbs) {
      const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
      grad.addColorStop(0, orb.c);
      grad.addColorStop(1, "transparent");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    }

    // Optional Rotating Geometric Tech Emblem
    if (emblemEnabled) {
      angle += 0.0035;
      const cx = w * 0.5;
      const cy = h * 0.46;
      const baseR = Math.min(w, h) * 0.27;

      ctx.save();
      ctx.strokeStyle = getCssVar("--glass-border");
      ctx.lineWidth = 1.2;
      drawPolygon(cx, cy, baseR, 6, angle);
      drawPolygon(cx, cy, baseR * 0.78, 6, -angle * 1.4);
      drawPolygon(cx, cy, baseR * 0.54, 3, angle * 1.8);

      ctx.beginPath();
      ctx.arc(cx, cy, baseR * 1.12, angle, angle + Math.PI * 1.35);
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();

// 7. Haptics & Pill Snackbar
function triggerHaptic() {
  if (navigator.vibrate) navigator.vibrate(10);
}

let snackbarTimer = null;
function showSnackbar(message) {
  const el = document.getElementById("pill-snackbar");
  if (!el) return;
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(snackbarTimer);
  snackbarTimer = setTimeout(() => {
    el.classList.remove("show");
  }, 2400);
}

// 8. Slide-Up Glass Bottom Sheet + Android Back History Handling
const backdrop = document.getElementById("sheet-backdrop");
const sheetTitle = document.getElementById("sheet-title");
const sheetBody = document.getElementById("sheet-body");
let sheetHistoryPushed = false;

function openSheet(title, htmlContent) {
  triggerHaptic();
  sheetTitle.textContent = title;
  sheetBody.innerHTML = htmlContent;
  backdrop.classList.remove("hidden");
  backdrop.setAttribute("aria-hidden", "false");
  if (!sheetHistoryPushed) {
    history.pushState({ sheet: true }, "");
    sheetHistoryPushed = true;
  }
}

function closeSheet(fromPopState = false) {
  if (backdrop.classList.contains("hidden")) return;
  backdrop.classList.add("hidden");
  backdrop.setAttribute("aria-hidden", "true");
  if (sheetHistoryPushed && !fromPopState) {
    sheetHistoryPushed = false;
    history.back();
  } else {
    sheetHistoryPushed = false;
  }
}

window.addEventListener("popstate", () => {
  if (!backdrop.classList.contains("hidden")) {
    closeSheet(true);
  }
});

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeSheet(false);
});

document.getElementById("btn-sheet-close").addEventListener("click", () => closeSheet(false));
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSheet(false);
});

// 9. Navigation & Tab Switching
function switchTab(tabName, presetFilter = null) {
  triggerHaptic();
  activeTab = tabName;
  if (presetFilter && activeFilters[tabName] !== undefined) {
    activeFilters[tabName] = presetFilter;
  }

  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.toggle("active", sec.id === `view-${tabName}`);
  });

  renderAll();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 10. Copy & Download Helpers
function copyText(text, label = "Copied to clipboard") {
  triggerHaptic();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showSnackbar(label)).catch(() => fallbackCopy(text, label));
  } else {
    fallbackCopy(text, label);
  }
}

function fallbackCopy(text, label) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  showSnackbar(label);
}

function downloadFile(filename, content, mime = "text/plain") {
  triggerHaptic();
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showSnackbar(`Downloaded ${filename}`);
}

function toggleBookmark(id) {
  triggerHaptic();
  if (savedIds.has(id)) {
    savedIds.delete(id);
    showSnackbar("Removed from Saved");
  } else {
    savedIds.add(id);
    showSnackbar("Saved to bookmarks");
  }
  persistSavedIds(savedIds);
  renderAll();
}

// 11. Render Engines
function matchesQuery(item) {
  if (!searchQuery) return true;
  const q = searchQuery.toLowerCase();
  return JSON.stringify(item).toLowerCase().includes(q);
}

function renderFilterPills(containerId, categories, sectionKey) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const allCats = ["All", ...categories, "Saved"];
  container.innerHTML = allCats.map(cat => `
    <button class="filter-pill spring-tap ${activeFilters[sectionKey] === cat ? "active" : ""}" data-section="${sectionKey}" data-cat="${cat}" type="button">${cat}</button>
  `).join("");
}

function renderRoms() {
  const list = document.getElementById("roms-list");
  const filter = activeFilters.roms;
  const filtered = appData.roms.filter(r => {
    if (!matchesQuery(r)) return false;
    if (filter === "Saved") return savedIds.has(r.id);
    if (filter !== "All" && r.category !== filter) return false;
    return true;
  });

  document.getElementById("roms-visible-count").textContent = `${filtered.length} Builds`;
  renderFilterPills("roms-filters", ["HyperOS Ports", "AOSP", "China Base"], "roms");

  if (!filtered.length) {
    list.innerHTML = `<div class="glass-card item-card"><p class="item-desc">No ROM builds match the current filter.</p></div>`;
    return;
  }

  list.innerHTML = filtered.map(rom => {
    const isSaved = savedIds.has(rom.id);
    return `
      <article class="glass-card item-card">
        <div>
          <div class="item-top">
            <div class="badge-row">
              <span class="meta-badge">${rom.category}</span>
              <span class="meta-badge muted">${rom.android}</span>
              <span class="meta-badge muted">${rom.size}</span>
            </div>
            <button class="bookmark-btn spring-tap ${isSaved ? "saved" : ""}" data-bookmark="${rom.id}" type="button" aria-label="Save">${IconFactory.bookmark(isSaved)}</button>
          </div>
          <h3 class="item-title">${rom.title}</h3>
          <p class="item-desc">${rom.desc}</p>
          <div class="hash-box" title="SHA-256">SHA256: ${rom.sha256}</div>
        </div>
        <div class="item-actions">
          <button class="primary-glass-btn spring-tap" data-open-rom="${rom.id}" type="button">
            ${IconFactory.download()}
            <span>Download &amp; Flash Notes</span>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function renderTools() {
  const list = document.getElementById("tools-list");
  const filter = activeFilters.tools;
  const filtered = appData.tools.filter(t => {
    if (!matchesQuery(t)) return false;
    if (filter === "Saved") return savedIds.has(t.id);
    if (filter !== "All" && t.category !== filter) return false;
    return true;
  });

  document.getElementById("tools-visible-count").textContent = `${filtered.length} Items`;
  renderFilterPills("tools-filters", ["Utility APKs", "KernelSU / Magisk", "Termux Scripts"], "tools");

  if (!filtered.length) {
    list.innerHTML = `<div class="glass-card item-card"><p class="item-desc">No tools or scripts match the current filter.</p></div>`;
    return;
  }

  list.innerHTML = filtered.map(tool => {
    const isSaved = savedIds.has(tool.id);
    return `
      <article class="glass-card item-card">
        <div>
          <div class="item-top">
            <div class="badge-row">
              <span class="meta-badge">${tool.category}</span>
              <span class="meta-badge muted">${tool.version}</span>
              <span class="meta-badge muted">${tool.size}</span>
            </div>
            <button class="bookmark-btn spring-tap ${isSaved ? "saved" : ""}" data-bookmark="${tool.id}" type="button" aria-label="Save">${IconFactory.bookmark(isSaved)}</button>
          </div>
          <h3 class="item-title">${tool.title}</h3>
          <p class="item-desc">${tool.desc}</p>
          <div class="terminal-card" style="margin-top:10px;margin-bottom:0;">
            <div class="terminal-header">
              <span class="term-filename">${tool.scriptName}</span>
              <div class="terminal-actions">
                <button class="mini-pill-btn spring-tap" data-copy-code="${tool.command.replace(/"/g, "&quot;")}" type="button">Copy</button>
                <button class="mini-pill-btn spring-tap" data-download-sh="${tool.scriptName}" data-sh-body="#!/usr/bin/env bash&#10;${tool.command.replace(/"/g, "&quot;")}&#10;" type="button">.sh</button>
              </div>
            </div>
            <pre class="terminal-code"><code>${tool.command}</code></pre>
          </div>
        </div>
        <div class="item-actions">
          <a class="secondary-glass-btn spring-tap" href="${tool.url}" target="_blank" rel="noopener noreferrer">
            ${IconFactory.download()}
            <span>Open Release / Repo</span>
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function renderVideos() {
  const list = document.getElementById("videos-list");
  const filter = activeFilters.videos;
  const filtered = appData.videos.filter(v => {
    if (!matchesQuery(v)) return false;
    if (filter === "Saved") return savedIds.has(v.id);
    if (filter !== "All" && v.category !== filter) return false;
    return true;
  });

  document.getElementById("videos-visible-count").textContent = `${filtered.length} Guides`;
  renderFilterPills("videos-filters", ["Flashing Guides", "Root & Shizuku", "ROM Reviews"], "videos");

  if (!filtered.length) {
    list.innerHTML = `<div class="glass-card item-card"><p class="item-desc">No video guides match the current filter.</p></div>`;
    return;
  }

  list.innerHTML = filtered.map(vid => {
    const isSaved = savedIds.has(vid.id);
    return `
      <article class="glass-card item-card">
        <div>
          <div class="item-top">
            <div class="badge-row">
              <span class="meta-badge">${vid.category}</span>
              <span class="meta-badge muted" style="font-variant-numeric:tabular-nums;">${vid.duration}</span>
            </div>
            <button class="bookmark-btn spring-tap ${isSaved ? "saved" : ""}" data-bookmark="${vid.id}" type="button" aria-label="Save">${IconFactory.bookmark(isSaved)}</button>
          </div>
          <h3 class="item-title">${vid.title}</h3>
          <p class="item-desc">${vid.desc}</p>
        </div>
        <div class="item-actions">
          <button class="primary-glass-btn spring-tap" data-open-video="${vid.id}" type="button">
            ${IconFactory.play()}
            <span>Timestamps &amp; Watch</span>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function renderStats() {
  document.getElementById("stat-roms").textContent = appData.roms.length;
  document.getElementById("stat-tools").textContent = appData.tools.length;
  document.getElementById("stat-videos").textContent = appData.videos.length;
  document.getElementById("stat-saved").textContent = savedIds.size;
}

function renderAll() {
  renderStats();
  renderRoms();
  renderTools();
  renderVideos();
}

// 12. Bottom Sheet Views (Safety Download, Video Guide, Themes, Creator Studio)
function openRomSafetySheet(romId) {
  const rom = appData.roms.find(r => r.id === romId);
  if (!rom) return;
  openSheet("Safety Check & Download", `
    <div class="glass-card safety-card">
      <div class="safety-icon">${IconFactory.shield()}</div>
      <div class="safety-text">
        <h4>Pre-Flash Verification</h4>
        <p>Ensure your bootloader is unlocked and you have backed up <code>persist</code> and <code>modem</code> partitions for <strong>${rom.device}</strong>.</p>
      </div>
    </div>
    <div>
      <strong style="color:var(--text-primary);display:block;margin-bottom:4px;">${rom.title}</strong>
      <p>${rom.notes}</p>
    </div>
    <div class="hash-box" style="white-space:normal;word-break:break-all;">
      <strong>SHA-256:</strong> ${rom.sha256}
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="secondary-glass-btn spring-tap" onclick="copyText('${rom.sha256}', 'SHA-256 hash copied')" type="button">Copy SHA-256</button>
      <a class="primary-glass-btn spring-tap" href="${rom.url}" target="_blank" rel="noopener noreferrer">Proceed to Cloud Link</a>
    </div>
  `);
}

function openVideoSheet(vidId) {
  const vid = appData.videos.find(v => v.id === vidId);
  if (!vid) return;
  const stepsHtml = (vid.steps || []).map(s => `<li style="margin-left:18px;margin-bottom:6px;">${s}</li>`).join("");
  openSheet("Tutorial Breakdown", `
    <div class="badge-row">
      <span class="meta-badge">${vid.category}</span>
      <span class="meta-badge muted">${vid.duration}</span>
    </div>
    <h4 style="color:var(--text-primary);font-size:1rem;">${vid.title}</h4>
    <p>${vid.desc}</p>
    <div class="glass-card" style="padding:14px;">
      <strong style="color:var(--text-primary);display:block;margin-bottom:8px;">Chapter Timestamps:</strong>
      <ul>${stepsHtml}</ul>
    </div>
    <a class="primary-glass-btn spring-tap" href="${vid.url}" target="_blank" rel="noopener noreferrer">
      ${IconFactory.play()}
      <span>Watch Full Video on YouTube</span>
    </a>
  `);
}

function openThemeSheet() {
  const currentTheme = localStorage.getItem(STORAGE_KEY_THEME) || "midnight";
  const cardsHtml = THEMES.map(t => `
    <button class="theme-card-option spring-tap ${t.id === currentTheme ? "active" : ""}" data-select-theme="${t.id}" type="button">
      <div>
        <strong style="display:block;font-size:0.92rem;">${t.name}</strong>
        <span style="font-size:0.75rem;color:var(--text-secondary);">${t.subtitle}</span>
        <div class="theme-swatches">
          ${t.swatches.map(c => `<span style="background:${c};"></span>`).join("")}
        </div>
      </div>
      <span style="color:var(--accent-primary);">${t.id === currentTheme ? IconFactory.check() : ""}</span>
    </button>
  `).join("");

  openSheet("Liquid Glass Themes", `
    <label class="toggle-row">
      <div>
        <strong style="display:block;font-size:0.88rem;">Animated background emblem</strong>
        <span style="font-size:0.74rem;color:var(--text-secondary);">60 FPS geometric vector overlay</span>
      </div>
      <input id="toggle-emblem-input" class="switch-input" type="checkbox" ${emblemEnabled ? "checked" : ""} />
    </label>
    ${cardsHtml}
  `);

  const toggleInput = document.getElementById("toggle-emblem-input");
  if (toggleInput) {
    toggleInput.addEventListener("change", (e) => {
      emblemEnabled = e.target.checked;
      localStorage.setItem(STORAGE_KEY_EMBLEM, String(emblemEnabled));
      showSnackbar(emblemEnabled ? "Background emblem enabled" : "Background emblem hidden");
    });
  }
}

function openCreatorSheet() {
  openSheet("Creator Studio (Mobile Manager)", `
    <p>Add new Custom ROMs, Tools, or YouTube Videos directly from your phone, or export your cloud database backup.</p>
    <form id="creator-add-form" style="display:flex;flex-direction:column;gap:10px;">
      <div class="form-field">
        <label>Entry Type</label>
        <select name="type" id="creator-type">
          <option value="roms">Custom ROM</option>
          <option value="tools">Tool / APK / Script</option>
          <option value="videos">YouTube Video Guide</option>
        </select>
      </div>
      <div class="form-field">
        <label>Title</label>
        <input name="title" required placeholder="e.g. HyperOS 2.2 Port for POCO X6 Pro" />
      </div>
      <div class="form-field">
        <label>Category / Tag</label>
        <input name="category" required placeholder="e.g. HyperOS Ports / Utility APKs / Flashing Guides" />
      </div>
      <div class="form-field">
        <label>Description</label>
        <textarea name="desc" rows="2" required placeholder="Key features, changelog, or instructions..."></textarea>
      </div>
      <div class="form-field">
        <label>Command / SHA-256 / Duration</label>
        <input name="meta" placeholder="e.g. pkg install ... OR 12:30 OR SHA-256 hash" />
      </div>
      <div class="form-field">
        <label>Download / YouTube URL</label>
        <input name="url" type="url" value="https://www.youtube.com/@ZGODRITTIK" required />
      </div>
      <button class="primary-glass-btn spring-tap" type="submit">Save to Cloud Hub</button>
    </form>
    <div style="display:flex;gap:8px;margin-top:6px;">
      <button id="btn-export-json" class="secondary-glass-btn spring-tap" style="flex:1;" type="button">Export JSON Backup</button>
      <button id="btn-reset-data" class="secondary-glass-btn spring-tap" type="button">Reset Defaults</button>
    </div>
  `);

  document.getElementById("creator-add-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const type = fd.get("type");
    const id = `${type}-${Date.now()}`;
    const title = String(fd.get("title")).trim();
    const category = String(fd.get("category")).trim();
    const desc = String(fd.get("desc")).trim();
    const meta = String(fd.get("meta") || "").trim();
    const url = String(fd.get("url")).trim();

    if (type === "roms") {
      appData.roms.unshift({
        id, title, category,
        device: "POCO X6 Pro / Universal",
        android: "Android 15",
        size: "4.8 GB",
        sha256: meta || "Verified-Release-Build",
        desc,
        notes: "Always verify device codename and backup persist before flashing.",
        url
      });
    } else if (type === "tools") {
      appData.tools.unshift({
        id, title, category,
        version: "Latest Release",
        size: "Release",
        desc,
        command: meta || "echo 'ZGOD RITTIK Tool Ready'",
        scriptName: "zgod-tool.sh",
        url
      });
    } else {
      appData.videos.unshift({
        id, title, category,
        duration: meta || "10:00",
        date: "2026",
        desc,
        steps: ["00:00 — Watch full tutorial on ZGOD RITTIK YouTube channel"],
        url
      });
    }

    saveStore(appData);
    renderAll();
    closeSheet(false);
    switchTab(type);
    showSnackbar("New entry added to hub");
  });

  document.getElementById("btn-export-json").addEventListener("click", () => {
    downloadFile("zgod-rittik-hub-backup.json", JSON.stringify(appData, null, 2), "application/json");
  });

  document.getElementById("btn-reset-data").addEventListener("click", () => {
    appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveStore(appData);
    renderAll();
    closeSheet(false);
    showSnackbar("Default archive restored");
  });
}

// 13. Mount Static Icons & Global Event Delegation
function mountIcons() {
  document.getElementById("btn-search-toggle").innerHTML = IconFactory.search();
  document.getElementById("btn-theme-open").innerHTML = IconFactory.palette();
  document.getElementById("btn-creator-open").innerHTML = IconFactory.plus();
  document.getElementById("btn-sheet-close").innerHTML = IconFactory.close();
  document.getElementById("search-icon-slot").innerHTML = IconFactory.search();
  document.getElementById("yt-btn-icon").innerHTML = IconFactory.play();
  document.getElementById("plus-btn-icon").innerHTML = IconFactory.plus();
  document.getElementById("bento-icon-roms").innerHTML = IconFactory.cpu();
  document.getElementById("bento-icon-tools").innerHTML = IconFactory.wrench();
  document.getElementById("bento-icon-scripts").innerHTML = IconFactory.terminal();
  document.getElementById("bento-icon-videos").innerHTML = IconFactory.play();
  document.getElementById("safety-icon-slot").innerHTML = IconFactory.shield();
  document.getElementById("nav-icon-home").innerHTML = IconFactory.home();
  document.getElementById("nav-icon-roms").innerHTML = IconFactory.cpu();
  document.getElementById("nav-icon-tools").innerHTML = IconFactory.wrench();
  document.getElementById("nav-icon-videos").innerHTML = IconFactory.play();
}

document.addEventListener("click", (e) => {
  const navTab = e.target.closest("[data-tab]");
  if (navTab) return switchTab(navTab.dataset.tab);

  const bentoNav = e.target.closest("[data-nav]");
  if (bentoNav) return switchTab(bentoNav.dataset.nav, bentoNav.dataset.filter || null);

  const filterBtn = e.target.closest("[data-section][data-cat]");
  if (filterBtn) {
    triggerHaptic();
    activeFilters[filterBtn.dataset.section] = filterBtn.dataset.cat;
    return renderAll();
  }

  const bookmarkBtn = e.target.closest("[data-bookmark]");
  if (bookmarkBtn) return toggleBookmark(bookmarkBtn.dataset.bookmark);

  const copyBtn = e.target.closest("[data-copy-code]");
  if (copyBtn) return copyText(copyBtn.dataset.copyCode, "Command copied");

  const shBtn = e.target.closest("[data-download-sh]");
  if (shBtn) return downloadFile(shBtn.dataset.downloadSh, shBtn.dataset.shBody, "application/x-sh");

  const romBtn = e.target.closest("[data-open-rom]");
  if (romBtn) return openRomSafetySheet(romBtn.dataset.openRom);

  const vidBtn = e.target.closest("[data-open-video]");
  if (vidBtn) return openVideoSheet(vidBtn.dataset.openVideo);

  const themeOpt = e.target.closest("[data-select-theme]");
  if (themeOpt) {
    applyTheme(themeOpt.dataset.selectTheme);
    openThemeSheet();
    showSnackbar("Theme updated");
  }
});

document.getElementById("btn-search-toggle").addEventListener("click", () => {
  triggerHaptic();
  const wrap = document.getElementById("search-bar-wrap");
  wrap.classList.toggle("hidden");
  if (!wrap.classList.contains("hidden")) {
    document.getElementById("global-search-input").focus();
  }
});

const searchInput = document.getElementById("global-search-input");
const clearSearchBtn = document.getElementById("btn-search-clear");
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value.trim();
  clearSearchBtn.classList.toggle("hidden", !searchQuery);
  if (searchQuery && activeTab === "home") {
    switchTab("roms");
  } else {
    renderAll();
  }
});

clearSearchBtn.addEventListener("click", () => {
  searchQuery = "";
  searchInput.value = "";
  clearSearchBtn.classList.add("hidden");
  renderAll();
});

document.getElementById("btn-theme-open").addEventListener("click", openThemeSheet);
document.getElementById("btn-creator-open").addEventListener("click", openCreatorSheet);
document.getElementById("btn-quick-add").addEventListener("click", openCreatorSheet);

// 14. Register Offline PWA Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

mountIcons();
renderAll();
