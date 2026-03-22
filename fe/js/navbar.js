// ================================================================
//  STAGEBOOK — Shared Navbar
//  Muốn sửa navbar? Chỉ cần sửa file này, tất cả trang tự cập nhật
// ================================================================

const NAV_LINKS = [
    { href: 'index.html', label: 'Trang chủ' },
    { href: 'artists.html', label: 'Nghệ sĩ' },
    { href: 'booking.html', label: 'Đặt lịch' },
];

function renderNavbar() {
    // Xác định trang hiện tại để highlight link đúng
    const currentPage = location.pathname.split('/').pop() || 'index.html';

    const links = NAV_LINKS.map(link => {
        const isActive = currentPage === link.href ||
            (currentPage === '' && link.href === 'index.html');
        return `<li><a href="${link.href}" ${isActive ? 'class="active"' : ''}>${link.label}</a></li>`;
    }).join('');

    // ── Thay đổi nút ở đây để cập nhật tất cả trang ──────────
    const actions = `
    <a href="artists.html" class="btn btn-gold btn-sm">Tìm nghệ sĩ</a>
    <a href="login.html"   class="btn btn-outline btn-sm">Đăng nhập</a>
    <a href="register.html" class="btn btn-ghost btn-sm" style="display:none" id="nav-register-btn">Đăng ký</a>
  `;
    // ─────────────────────────────────────────────────────────

    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    navbar.innerHTML = `
    <div class="container">
      <a href="index.html" class="nav-logo">
        Stage<span>Book</span><span class="dot"></span>
      </a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-actions">
        ${actions}
        <button class="nav-toggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  `;

    // Mobile toggle
    const toggle = navbar.querySelector('.nav-toggle');
    const navLinks = navbar.querySelector('.nav-links');
    toggle?.addEventListener('click', () => navLinks?.classList.toggle('open'));
}

// Chạy ngay khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', renderNavbar);