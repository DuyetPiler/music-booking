// ================================================================
//  STAGEBOOK — Page Controllers
// ================================================================

// ── Artists Page ─────────────────────────────────────────────
function initArtistsPage() {
    const grid = document.getElementById('artists-grid');
    const countEl = document.getElementById('artists-count');
    const searchInput = document.getElementById('search-input');
    const typeSelect = document.getElementById('filter-type');
    const citySelect = document.getElementById('filter-city');
    const sortSelect = document.getElementById('filter-sort');

    if (!grid) return;

    function render() {
        const filters = {
            search: searchInput?.value.trim() || '',
            type: typeSelect?.value || '',
            city: citySelect?.value || '',
            sort: sortSelect?.value || 'popular',
        };
        const results = filterArtists(filters);
        if (countEl) countEl.textContent = results.length;

        if (results.length === 0) {
            grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:80px 0;color:var(--text-3)">
          <div style="font-size:3rem;margin-bottom:16px">🎵</div>
          <p style="font-size:1.1rem">Không tìm thấy nghệ sĩ phù hợp.</p>
          <button class="btn btn-outline btn-sm" style="margin-top:16px" onclick="resetFilters()">Xóa bộ lọc</button>
        </div>`;
        } else {
            grid.innerHTML = results.map(renderArtistCard).join('');
            // Stagger fade-in
            grid.querySelectorAll('.artist-card').forEach((el, i) => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, i * 60);
            });
        }
    }

    window.resetFilters = () => {
        if (searchInput) searchInput.value = '';
        if (typeSelect) typeSelect.value = '';
        if (citySelect) citySelect.value = '';
        if (sortSelect) sortSelect.value = 'popular';
        render();
    };

    window.filterByType = (type) => {
        if (typeSelect) typeSelect.value = type;
        render();
        document.querySelector('.artists-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    [searchInput, typeSelect, citySelect, sortSelect].forEach(el => {
        if (el) el.addEventListener('input', render);
    });

    // Populate selects
    if (typeSelect && !typeSelect.options.length) {
        typeSelect.innerHTML = `<option value="">Tất cả loại</option>` +
            CATEGORIES.map(c => `<option value="${c.value}">${c.icon} ${c.name}</option>`).join('');
    }
    if (citySelect && !citySelect.options.length) {
        citySelect.innerHTML = `<option value="">Tất cả thành phố</option>` +
            CITIES.map(c => `<option value="${c}">${c}</option>`).join('');
    }

    render();
}

// ── Artist Detail Page ───────────────────────────────────────
function initDetailPage() {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const artist = getArtistById(id);

    if (!artist) {
        document.body.innerHTML += `<div class="success-page"><div class="success-inner"><h2>Không tìm thấy</h2><p>Nghệ sĩ không tồn tại.</p><a href="artists.html" class="btn btn-gold">← Quay lại</a></div></div>`;
        return;
    }

    // Header info
    set('detail-img', `<img src="${artist.img}" alt="${artist.name}">`);
    set('detail-type', artist.type);
    set('detail-name', artist.name);
    set('detail-city', `📍 ${artist.city}`);
    set('detail-rating', `${renderStars(artist.rating)} ${artist.rating} (${artist.reviews} đánh giá)`);
    set('detail-bookings', `🎯 ${artist.bookings} lượt đặt`);
    set('detail-price', `${formatPrice(artist.price)} <small>/ buổi biểu diễn</small>`);
    set('detail-bio', artist.bio);
    set('detail-tags', artist.genres.map(g => `<span class="badge badge-gold">${g}</span>`).join(''));

    // Gallery
    const gallery = document.getElementById('detail-gallery');
    if (gallery) gallery.innerHTML = artist.gallery.map(src => `
    <div class="media-grid-item"><img src="${src}" alt="" loading="lazy"></div>`).join('');

    // Reviews
    const rev = document.getElementById('detail-reviews');
    if (rev) rev.innerHTML = artist.reviewList.map(renderReview).join('');

    // Booking widget
    set('widget-name', artist.name);
    set('widget-type', artist.type);
    set('widget-price', `${formatPrice(artist.price)} <small>/ buổi</small>`);

    const bookBtn = document.getElementById('widget-book-btn');
    if (bookBtn) {
        if (!artist.available) {
            bookBtn.textContent = 'Hết slot tháng này';
            bookBtn.disabled = true;
            bookBtn.style.opacity = '0.5';
        } else {
            bookBtn.addEventListener('click', () => goToBooking(artist.id));
        }
    }

    // Page title
    document.title = `${artist.name} — StageBook`;
}

// ── Booking Page ─────────────────────────────────────────────
function initBookingPage() {
    const params = new URLSearchParams(location.search);
    const artistId = params.get('id');
    const artist = getArtistById(artistId);

    if (!artist) {
        window.location.href = 'artists.html';
        return;
    }

    // Populate summary sidebar
    set('summary-img', `<img src="${artist.img}" alt="${artist.name}">`);
    set('summary-name', artist.name);
    set('summary-type', artist.type);
    updateSummary(artist);

    document.title = `Đặt lịch — ${artist.name} — StageBook`;

    // Form logic
    const form = document.getElementById('booking-form');
    const dateEl = document.getElementById('b-date');
    const timeEl = document.getElementById('b-time');
    const typeEl = document.getElementById('b-event-type');
    const noteEl = document.getElementById('b-note');

    // Min date = tomorrow
    if (dateEl) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateEl.min = tomorrow.toISOString().split('T')[0];
        dateEl.addEventListener('change', () => updateSummary(artist));
    }
    if (timeEl) timeEl.addEventListener('change', () => updateSummary(artist));
    if (typeEl) {
        typeEl.innerHTML = `<option value="">Chọn loại sự kiện</option>` +
            EVENT_TYPES.map(t => `<option value="${t}">${t}</option>`).join('');
        typeEl.addEventListener('change', () => updateSummary(artist));
    }

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            handleBookingSubmit(artist);
        });
    }
}

function updateSummary(artist) {
    const date = document.getElementById('b-date')?.value;
    const time = document.getElementById('b-time')?.value;
    const type = document.getElementById('b-event-type')?.value;

    const rows = [
        ['Nghệ sĩ', artist.name],
        ['Loại hình', artist.type],
        ['Thành phố', artist.city],
        ['Ngày biểu diễn', date ? new Date(date).toLocaleDateString('vi-VN') : '—'],
        ['Giờ bắt đầu', time || '—'],
        ['Loại sự kiện', type || '—'],
    ];

    const container = document.getElementById('summary-rows');
    if (container) container.innerHTML = rows.map(([k, v]) => renderSummaryRow(k, v)).join('');

    const totalEl = document.getElementById('summary-total');
    if (totalEl) totalEl.textContent = artist.priceLabel;
}

function handleBookingSubmit(artist) {
    // Validate
    const required = ['b-name', 'b-phone', 'b-date', 'b-time', 'b-event-type'];
    let valid = true;
    required.forEach(id => {
        const el = document.getElementById(id);
        if (!el?.value.trim()) {
            el?.classList.add('error');
            valid = false;
        } else {
            el?.classList.remove('error');
        }
    });

    if (!valid) {
        showToast('Vui lòng điền đầy đủ thông tin bắt buộc.', 'error');
        return;
    }

    // Show loading
    const btn = document.querySelector('#booking-form button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = 'Đang xử lý...'; }

    setTimeout(() => {
        const ref = generateBookingRef();
        // Store for success page
        sessionStorage.setItem('booking_success', JSON.stringify({
            ref,
            artistName: artist.name,
            artistType: artist.type,
            date: document.getElementById('b-date')?.value,
            time: document.getElementById('b-time')?.value,
            price: artist.priceLabel,
        }));
        window.location.href = 'booking.html?success=1';
    }, 1200);
}

// ── Home Page ─────────────────────────────────────────────────
function initHomePage() {
    // Render categories
    const catGrid = document.getElementById('categories-grid');
    if (catGrid) catGrid.innerHTML = CATEGORIES.map(renderCategoryCard).join('');

    // Render featured artists
    const featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid) {
        const featured = ARTISTS.filter(a => a.featured);
        featuredGrid.innerHTML = featured.map(renderArtistCard).join('');
    }
}

// ── Success State ─────────────────────────────────────────────
function initSuccessPage() {
    const data = sessionStorage.getItem('booking_success');
    if (!data) { window.location.href = 'index.html'; return; }

    const b = JSON.parse(data);
    sessionStorage.removeItem('booking_success');

    set('success-ref', b.ref);
    set('success-artist', b.artistName);
    set('success-date', b.date ? new Date(b.date).toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : '');
    set('success-time', b.time || '');
    set('success-price', b.price || '');
}

// ── Helpers ───────────────────────────────────────────────────
function set(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
}

// ── Auto-init based on page ────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const page = location.pathname.split('/').pop() || 'index.html';
    const params = new URLSearchParams(location.search);

    if (page === 'index.html' || page === '') initHomePage();
    if (page === 'artists.html') initArtistsPage();
    if (page === 'artists-detail.html') initDetailPage();
    if (page === 'booking.html') {
        if (params.get('success') === '1') initSuccessPage();
        else initBookingPage();
    }
});