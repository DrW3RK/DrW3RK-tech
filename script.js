// Page Navigation
function navigateTo(page) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    const selectedSection = document.getElementById(page);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update nav links
    document.querySelectorAll('.nav-item').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        console.log('Pressed Escape key');
    }
    // Alt + H for home
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        navigateTo('home');
    }
});

// Active nav link on page load
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-item');
    links[0].classList.add('active');
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
function trackPageView(page) {
    console.log(`User viewed: ${page}`);
}

// Log navigation events
const originalNavigateTo = navigateTo;
navigateTo = function(page) {
    trackPageView(page);
    return originalNavigateTo(page);
};
