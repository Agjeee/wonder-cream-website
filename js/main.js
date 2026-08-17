document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});

// Poster lightbox — the posters carry a lot of small text, so let people
// open them full-size rather than squinting at the card.
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
let lastFocused = null;

function openLightbox(src, alt) {
  lastFocused = document.activeElement;
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  lightboxImg.src = '';
  if (lastFocused) lastFocused.focus();
}

document.querySelectorAll('.poster-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    openLightbox(btn.dataset.full, img ? img.alt : '');
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});
