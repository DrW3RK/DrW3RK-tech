// Active nav link highlighting
document.addEventListener('DOMContentLoaded', () => {
    // Get current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Update active nav link based on current page
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + H for home
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.location.href = 'index.html';
    }
    // Alt + W for work
    if (e.altKey && e.key === 'w') {
        e.preventDefault();
        window.location.href = 'work.html';
    }
    // Alt + T for talks
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        window.location.href = 'talks.html';
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Track page views (simple analytics)
function trackPageView() {
    const page = window.location.pathname.split('/').pop() || 'index.html';
    console.log(`User viewed: ${page}`);
}

// Log page view on load
document.addEventListener('DOMContentLoaded', () => {
    trackPageView();
});