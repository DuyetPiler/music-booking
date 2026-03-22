// ================================================================
//  STAGEBOOK — Render Helpers
// ================================================================

function renderArtistCard(artist) {
    const discount = artist.available ? '' : `<span class="badge badge-crimson" style="position:absolute;top:14px;right:14px;z-index:2">Hết slot</span>`;
    return `
    <article class="artist-card" onclick="goToDetail(${artist.id})">
      <div class="artist-card-img">
        <img src="${artist.img}" alt="${artist.name}" loading="lazy">
        <div class="artist-card-overlay"></div>
        <span class="artist-card-genre badge badge-dim">${artist.type}</span>
        ${discount}
        <span class="artist-card-price">${formatPrice(artist.price)}</span>
      </div>
      <div class="artist-card-body">
        <div class="artist-card-name">${artist.name}</div>
        <div class="artist-card-meta">
          <div class="artist-card-rating">
            <span class="stars">★</span>
            <span>${artist.rating} <span style="color:var(--text-3)">(${artist.reviews})</span></span>
          </div>
          <span style="color:var(--text-3);font-size:13px">📍 ${artist.city}</span>
        </div>
        <div class="artist-card-tags">
          ${artist.genres.slice(0, 3).map(g => `<span class="badge badge-dim">${g}</span>`).join('')}
        </div>
        <a class="artist-card-btn" href="artists-detail.html?id=${artist.id}">Xem hồ sơ →</a>
      </div>
    </article>`;
}

function renderStars(rating) {
    const filled = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) =>
        `<span style="color:${i < filled ? 'var(--gold)' : 'var(--text-3)'}">★</span>`
    ).join('');
}

function renderReview(r) {
    return `
    <div class="review-item">
      <div class="review-item-header">
        <div>
          <div class="reviewer-name">${r.name}</div>
          <div class="stars">${renderStars(r.rating)}</div>
        </div>
        <span class="reviewer-date">${r.date}</span>
      </div>
      <p class="review-text">"${r.text}"</p>
    </div>`;
}

function renderCategoryCard(cat) {
    return `
    <div class="category-item" onclick="filterByType('${cat.value}')">
      <div class="icon">${cat.icon}</div>
      <div class="name">${cat.name}</div>
    </div>`;
}

function renderSummaryRow(key, val) {
    return `<div class="summary-row"><span class="key">${key}</span><span class="val">${val}</span></div>`;
}

function showToast(msg, type = 'success') {
    const icons = { success: '✓', error: '✕' };
    const el = document.createElement('div');
    el.className = `toast ${type}`;
    el.innerHTML = `<span>${icons[type]}</span> ${msg}`;
    const container = document.getElementById('toast-container') || (() => {
        const c = document.createElement('div');
        c.id = 'toast-container';
        document.body.appendChild(c);
        return c;
    })();
    container.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(20px)'; el.style.transition = '0.3s'; setTimeout(() => el.remove(), 300); }, 3000);
}

function goToDetail(id) {
    window.location.href = `artists-detail.html?id=${id}`;
}

function goToBooking(id) {
    window.location.href = `booking.html?id=${id}`;
}

// Animate on scroll
function initScrollAnim() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.animationPlayState = 'running';
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Mobile nav toggle
function initNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    // Mark active link
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && (href.includes(path) || (path === '' && href.includes('index')))) {
            a.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initScrollAnim();
});