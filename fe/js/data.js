// ================================================================
//  STAGEBOOK — Fake Data
// ================================================================

const ARTISTS = [
    {
        id: 1,
        name: "Linh Anh",
        slug: "linh-anh",
        type: "Ca sĩ",
        genres: ["Acoustic", "Pop", "R&B"],
        tags: ["acoustic", "pop", "r&b"],
        price: 2500000,
        priceLabel: "2.500.000₫ / show",
        rating: 4.9,
        reviews: 87,
        bookings: 214,
        city: "TP.HCM",
        bio: "Ca sĩ acoustic với giọng hát nhẹ nhàng, phong cách indie. Phù hợp với quán cafe, không gian nhỏ, sự kiện ngoài trời. Đã biểu diễn tại hơn 50 quán cafe acoustic ở TP.HCM.",
        img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=500&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=75",
            "https://images.unsplash.com/photo-1501612780327-45045538702b?w=400&q=75",
            "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&q=75",
        ],
        reviewList: [
            { name: "Minh Tuấn", date: "Tháng 3, 2025", rating: 5, text: "Linh Anh biểu diễn rất chuyên nghiệp và đúng giờ. Quán mình ai cũng khen." },
            { name: "Thu Hà", date: "Tháng 2, 2025", rating: 5, text: "Giọng hát rất hay, set nhạc phù hợp với không khí quán cafe. Sẽ book lại!" },
        ],
        featured: true,
        available: true,
    },
    {
        id: 2,
        name: "DJ Minh Khoa",
        slug: "dj-minh-khoa",
        type: "DJ",
        genres: ["EDM", "House", "Deep House"],
        tags: ["edm", "house", "deep house"],
        price: 4000000,
        priceLabel: "4.000.000₫ / show",
        rating: 4.8,
        reviews: 62,
        bookings: 130,
        city: "Hà Nội",
        bio: "DJ chuyên biểu diễn tại các sự kiện lớn, bar, club và đám cưới. Phong cách âm nhạc đa dạng từ Deep House đến EDM sôi động.",
        img: "https://images.unsplash.com/photo-1571266028243-d220c6a2d090?w=500&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=75",
            "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&q=75",
            "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=400&q=75",
        ],
        reviewList: [
            { name: "Long Việt", date: "Tháng 3, 2025", rating: 5, text: "Set nhạc cực đỉnh, đám cưới nhà mình ai cũng nhảy." },
            { name: "Hồng Anh", date: "Tháng 1, 2025", rating: 4, text: "Chuyên nghiệp, có thiết bị riêng. Rất hài lòng." },
        ],
        featured: true,
        available: true,
    },
    {
        id: 3,
        name: "Ban nhạc The Jazz Five",
        slug: "jazz-five",
        type: "Ban nhạc",
        genres: ["Jazz", "Blues", "Bossa Nova"],
        tags: ["jazz", "blues", "bossa nova"],
        price: 6000000,
        priceLabel: "6.000.000₫ / show",
        rating: 5.0,
        reviews: 41,
        bookings: 89,
        city: "TP.HCM",
        bio: "Ban nhạc Jazz 5 thành viên với 10 năm kinh nghiệm. Phù hợp với nhà hàng fine dining, sự kiện doanh nghiệp, tiệc cưới sang trọng.",
        img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&q=75",
            "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=75",
            "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=400&q=75",
        ],
        reviewList: [
            { name: "Phạm Hoàng", date: "Tháng 3, 2025", rating: 5, text: "Đẳng cấp thật sự. Đêm nhạc doanh nghiệp của chúng tôi rất thành công." },
        ],
        featured: true,
        available: true,
    },
    {
        id: 4,
        name: "MC Quang Vinh",
        slug: "mc-quang-vinh",
        type: "MC",
        genres: ["Wedding", "Corporate", "Event"],
        tags: ["wedding", "corporate", "event"],
        price: 3000000,
        priceLabel: "3.000.000₫ / show",
        rating: 4.7,
        reviews: 95,
        bookings: 310,
        city: "TP.HCM",
        bio: "MC chuyên nghiệp với phong cách trẻ trung, hài hước. Kinh nghiệm dẫn chương trình hơn 300 sự kiện bao gồm đám cưới, hội nghị, tiệc công ty.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=75",
            "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&q=75",
            "https://images.unsplash.com/photo-1528605105345-5344ea20f232?w=400&q=75",
        ],
        reviewList: [
            { name: "Ngọc Diệp", date: "Tháng 2, 2025", rating: 5, text: "Rất duyên dáng và chuyên nghiệp. Đám cưới của mình rất vui!" },
            { name: "Trần Sơn", date: "Tháng 1, 2025", rating: 4, text: "Dẫn chương trình tốt, khách hàng phản hồi rất tích cực." },
        ],
        featured: false,
        available: true,
    },
    {
        id: 5,
        name: "Hưng Guitar",
        slug: "hung-guitar",
        type: "Nhạc công",
        genres: ["Acoustic", "Fingerstyle", "Classical"],
        tags: ["acoustic", "fingerstyle", "classical"],
        price: 1500000,
        priceLabel: "1.500.000₫ / show",
        rating: 4.8,
        reviews: 53,
        bookings: 145,
        city: "Đà Nẵng",
        bio: "Nhạc công guitar fingerstyle với phong cách nhẹ nhàng. Phù hợp với không gian cafe, nhà hàng, tiệc nhỏ. Có thể biểu diễn repertoire đa dạng theo yêu cầu.",
        img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=500&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=75",
            "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=75",
            "https://images.unsplash.com/photo-1484186139897-d3fd81f5f411?w=400&q=75",
        ],
        reviewList: [
            { name: "Bảo Linh", date: "Tháng 3, 2025", rating: 5, text: "Tiếng đàn rất hay, không gian cafe thêm phần đặc biệt." },
        ],
        featured: false,
        available: true,
    },
    {
        id: 6,
        name: "Nhóm nhảy FlexCrew",
        slug: "flex-crew",
        type: "Vũ đoàn",
        genres: ["Hip-hop", "Breaking", "Contemporary"],
        tags: ["hip-hop", "breaking", "contemporary"],
        price: 5000000,
        priceLabel: "5.000.000₫ / show",
        rating: 4.6,
        reviews: 28,
        bookings: 67,
        city: "TP.HCM",
        bio: "Nhóm nhảy chuyên nghiệp 6 thành viên. Tiết mục đa dạng từ hip-hop sôi động đến contemporary ấn tượng. Phù hợp với sự kiện, lễ khai trương, đám cưới.",
        img: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=500&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=400&q=75",
            "https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=400&q=75",
            "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&q=75",
        ],
        reviewList: [
            { name: "Công Minh", date: "Tháng 2, 2025", rating: 5, text: "Màn trình diễn cực kỳ ấn tượng! Khách mời ai cũng thích." },
        ],
        featured: false,
        available: false,
    },
];

const CATEGORIES = [
    { icon: "🎤", name: "Ca sĩ", value: "Ca sĩ" },
    { icon: "🎧", name: "DJ", value: "DJ" },
    { icon: "🎸", name: "Ban nhạc", value: "Ban nhạc" },
    { icon: "🎙️", name: "MC", value: "MC" },
    { icon: "🎹", name: "Nhạc công", value: "Nhạc công" },
    { icon: "💃", name: "Vũ đoàn", value: "Vũ đoàn" },
];

const CITIES = ["TP.HCM", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Huế"];

const EVENT_TYPES = [
    "Quán cafe / Bar",
    "Nhà hàng / Fine dining",
    "Tiệc cưới",
    "Sự kiện doanh nghiệp",
    "Lễ khai trương",
    "Tiệc sinh nhật",
    "Sự kiện ngoài trời",
    "Khác",
];

function getArtistById(id) {
    return ARTISTS.find(a => a.id === parseInt(id));
}

function getArtistBySlug(slug) {
    return ARTISTS.find(a => a.slug === slug);
}

function filterArtists({ type = '', city = '', search = '', sort = 'popular' } = {}) {
    let result = [...ARTISTS];
    if (type) result = result.filter(a => a.type === type);
    if (city) result = result.filter(a => a.city === city);
    if (search) result = result.filter(a =>
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.genres.some(g => g.toLowerCase().includes(search.toLowerCase()))
    );
    if (sort === 'price_asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (sort === 'popular') result.sort((a, b) => b.bookings - a.bookings);
    return result;
}

function formatPrice(n) {
    return new Intl.NumberFormat('vi-VN').format(n) + '₫';
}

function formatStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function generateBookingRef() {
    return 'SB-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).slice(2, 5).toUpperCase();
}