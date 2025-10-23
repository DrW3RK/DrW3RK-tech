// Active nav link highlighting
document.addEventListener('DOMContentLoaded', () => {
    // Get current page path
    const currentPath = window.location.pathname;
    
    // Normalize path - remove trailing slash and .html if present
    const normalizedPath = currentPath.replace(/\/$/, '').replace(/\.html$/, '');
    
    // Update active nav link based on current path
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const normalizedHref = href.replace(/\/$/, '').replace(/\.html$/, '');
        
        // Check if this is the current page
        if (normalizedHref === normalizedPath || 
            (normalizedPath === '' && normalizedHref === '') ||
            (normalizedPath === '/index' && normalizedHref === '')) {
            link.classList.add('active');
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Alt + H for home
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        window.location.href = '/';
    }
    // Alt + W for work
    if (e.altKey && e.key === 'w') {
        e.preventDefault();
        window.location.href = '/work';
    }
    // Alt + T for talks
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        window.location.href = '/talks';
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
    const page = window.location.pathname.replace(/\.html$/, '') || '/';
    console.log(`User viewed: ${page}`);
}

// Log page view on load
document.addEventListener('DOMContentLoaded', () => {
    trackPageView();
});