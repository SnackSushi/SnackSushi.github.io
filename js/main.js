/* ===== SVG Icons ===== */
const ICONS = {
  skull: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><path d="M8 20v-4a8 8 0 0 1 0-12h8a8 8 0 0 1 0 12v4"/><path d="M12 20v-4"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  discord: '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="40" height="40"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>'
};

/* ===== Build Navbar ===== */
function buildNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  const logo = nav.querySelector('.nav-logo');
  if (logo) logo.textContent = CONFIG.serverName;

  const linksList = nav.querySelector('.nav-links');
  if (!linksList) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  linksList.innerHTML = '';
  CONFIG.navLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.label;
    if (link.href === currentPage) a.classList.add('active');
    li.appendChild(a);
    linksList.appendChild(li);
  });
}

/* ===== Build Footer ===== */
function buildFooter() {
  const footer = document.querySelector('.footer');
  if (!footer) return;
  footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} ${CONFIG.serverName}. ${CONFIG.footerText}</p>`;
}

/* ===== Hamburger Toggle ===== */
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

/* ===== Navbar Scroll Effect ===== */
function initNavScroll() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ===== Scroll Animations ===== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

/* ===== Get Icon SVG ===== */
function getIcon(name) {
  return ICONS[name] || '';
}

/* ===== Render Feature Cards ===== */
function renderFeatureCards(container, features, showImages) {
  if (!container) return;

  container.innerHTML = '';
  features.forEach(feature => {
    const card = document.createElement('div');
    card.className = 'feature-card animate-on-scroll';

    let imageHtml = '';
    if (showImages) {
      if (feature.image) {
        imageHtml = `<img src="${feature.image}" alt="${feature.title}" class="feature-card-image">`;
      } else {
        imageHtml = `<div class="feature-card-image-placeholder">Screenshot coming soon</div>`;
      }
    }

    card.innerHTML = `
      <div class="feature-icon">${getIcon(feature.icon)}</div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
      ${imageHtml}
    `;

    container.appendChild(card);
  });
}

/* ===== Render Landing Page ===== */
function renderLandingPage() {
  // Hero
  const heroTitle = document.querySelector('.hero-title');
  const heroTagline = document.querySelector('.hero-tagline');
  const downloadBtn = document.getElementById('hero-download');
  if (heroTitle) heroTitle.textContent = CONFIG.serverName;
  if (heroTagline) heroTagline.textContent = CONFIG.tagline;
  if (downloadBtn) downloadBtn.href = CONFIG.downloadUrl;

  // Feature highlights (first 4 on landing)
  const featGrid = document.querySelector('.landing-features .features-grid');
  if (featGrid) {
    renderFeatureCards(featGrid, CONFIG.features.slice(0, 4), false);
  }

  // Server info
  const infoPanel = document.querySelector('.server-info');
  if (infoPanel) {
    infoPanel.innerHTML = `
      <div class="info-item">
        <div class="info-label">Version</div>
        <div class="info-value">${CONFIG.version}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Quest EXP</div>
        <div class="info-value">${CONFIG.rates.questExp}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Meso Rate</div>
        <div class="info-value">${CONFIG.rates.meso}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Drop Rate</div>
        <div class="info-value">${CONFIG.rates.drop}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Mob Spawn</div>
        <div class="info-value">${CONFIG.rates.mobSpawn}</div>
      </div>
      <div class="info-item">
        <div class="info-label">Max Level</div>
        <div class="info-value">${CONFIG.maxLevel}</div>
      </div>
    `;
  }

  // EXP rates table
  const expTableBody = document.querySelector('#exp-rates-table tbody');
  if (expTableBody) {
    expTableBody.innerHTML = CONFIG.expRates.map(r =>
      `<tr><td>${r.range}</td><td>${r.multiplier}</td></tr>`
    ).join('');
  }

  // Info cards (NX drops, drop scaling, happy hour, PQ points)
  const infoCards = document.getElementById('info-cards');
  if (infoCards) {
    infoCards.innerHTML = `
      <div class="info-card animate-on-scroll">
        <div class="feature-icon">${getIcon('trophy')}</div>
        <h3>NX from Mobs</h3>
        <ul>
          <li><span class="info-card-label">Chance per kill:</span> ${CONFIG.nxDrops.chance}</li>
          <li><span class="info-card-label">NX range:</span> ${CONFIG.nxDrops.min}–${CONFIG.nxDrops.max}</li>
        </ul>
      </div>
      <div class="info-card animate-on-scroll">
        <div class="feature-icon">${getIcon('map')}</div>
        <h3>Drop Scaling</h3>
        <p>${CONFIG.dropScaling.description}</p>
        <ul>
          <li><span class="info-card-label">Range:</span> ${CONFIG.dropScaling.multiplierRange}</li>
        </ul>
      </div>
      <div class="info-card animate-on-scroll">
        <div class="feature-icon">${getIcon('sparkles')}</div>
        <h3>Happy Hour</h3>
        <ul>
          <li><span class="info-card-label">Duration:</span> ${CONFIG.happyHour.duration}</li>
          <li><span class="info-card-label">EXP bonus:</span> ${CONFIG.happyHour.expBonus}</li>
          <li><span class="info-card-label">PQ Points bonus:</span> ${CONFIG.happyHour.pqPointsBonus}</li>
          <li><span class="info-card-label">Random start:</span> ${CONFIG.happyHour.window}</li>
          <li><span class="info-card-label">Mob respawn:</span> ${CONFIG.happyHour.mobRespawn}</li>
        </ul>
      </div>
      <div class="info-card animate-on-scroll">
        <div class="feature-icon">${getIcon('users')}</div>
        <h3>PQ Points</h3>
        <p>${CONFIG.pqPoints.description}</p>
      </div>
    `;
  }

  // Download CTA
  const dlBtn = document.getElementById('download-cta');
  if (dlBtn) dlBtn.href = CONFIG.downloadUrl;

  // Discord
  const discordBtn = document.getElementById('discord-btn');
  if (discordBtn) discordBtn.href = CONFIG.discordLink;
}

/* ===== Render Features Page ===== */
function renderFeaturesPage() {
  const grid = document.querySelector('.features-page .features-grid');
  if (grid) {
    renderFeatureCards(grid, CONFIG.features, true);
  }
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', () => {
  buildNavbar();
  buildFooter();
  initHamburger();
  initNavScroll();

  // Page-specific rendering
  if (document.querySelector('.hero')) renderLandingPage();
  if (document.querySelector('.features-page')) renderFeaturesPage();

  // Init scroll animations after content is rendered
  requestAnimationFrame(initScrollAnimations);
});
