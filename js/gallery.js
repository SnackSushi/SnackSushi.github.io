/* ===== Gallery Rendering & Lightbox ===== */
(function () {
  let currentIndex = 0;
  let images = [];

  function renderGallery() {
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;

    images = CONFIG.galleryImages || [];

    if (images.length === 0) {
      grid.innerHTML = '';
      for (let i = 0; i < 6; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'gallery-placeholder animate-on-scroll';
        placeholder.innerHTML = `
          ${ICONS.image}
          <span>Coming Soon</span>
        `;
        grid.appendChild(placeholder);
      }
      return;
    }

    grid.innerHTML = '';
    images.forEach((img, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item animate-on-scroll';
      item.setAttribute('role', 'button');
      item.setAttribute('tabindex', '0');
      item.setAttribute('aria-label', `View ${img.caption || 'screenshot'}`);
      item.innerHTML = `
        <img src="${img.src}" alt="${img.caption || 'Screenshot'}" loading="lazy">
        ${img.caption ? `<div class="gallery-caption">${img.caption}</div>` : ''}
      `;

      item.addEventListener('click', () => openLightbox(index));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      grid.appendChild(item);
    });
  }

  function openLightbox(index) {
    if (!images.length) return;
    currentIndex = index;
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    updateLightboxImage();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-modal', 'true');
    document.body.style.overflow = 'hidden';

    // Focus trap
    lightbox.querySelector('.lightbox-close').focus();
  }

  function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    const img = document.querySelector('.lightbox img');
    const caption = document.querySelector('.lightbox-caption');
    if (!img) return;

    const current = images[currentIndex];
    img.src = current.src;
    img.alt = current.caption || 'Screenshot';
    if (caption) caption.textContent = current.caption || '';
  }

  function navigate(direction) {
    if (!images.length) return;
    currentIndex = (currentIndex + direction + images.length) % images.length;
    updateLightboxImage();
  }

  function initLightboxControls() {
    const lightbox = document.querySelector('.lightbox');
    if (!lightbox) return;

    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigate(-1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigate(1));

    // Click backdrop to close
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    initLightboxControls();
  });
})();
