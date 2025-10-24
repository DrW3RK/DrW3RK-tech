// Utility function to normalize paths
function normalizePath(path) {
    if (!path) return '/';
    // Remove trailing slash and .html extension
    return path.replace(/\/$/, '').replace(/\.html$/, '') || '/';
}

// Active nav link highlighting
function updateActiveNavLink() {
    try {
        const currentPath = normalizePath(window.location.pathname);
        const navLinks = document.querySelectorAll('.nav-item');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const normalizedHref = normalizePath(href);
            
            // Remove active class from all links
            link.classList.remove('active');
            
            // Add active class to matching link
            if (normalizedHref === currentPath) {
                link.classList.add('active');
            }
        });
    } catch (error) {
        console.error('Error updating active nav link:', error);
    }
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        try {
            // Alt + H for home
            if (e.altKey && e.key === 'h') {
                e.preventDefault();
                window.location.href = '/';
            }
            // Alt + W for work
            else if (e.altKey && e.key === 'w') {
                e.preventDefault();
                window.location.href = '/work';
            }
            // Alt + T for talks
            else if (e.altKey && e.key === 't') {
                e.preventDefault();
                window.location.href = '/talks';
            }
            // Alt + L for life
            else if (e.altKey && e.key === 'l') {
                e.preventDefault();
                window.location.href = '/life';
            }
        } catch (error) {
            console.error('Error handling keyboard shortcut:', error);
        }
    });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    try {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                try {
                    const targetId = this.getAttribute('href');
                    if (targetId && targetId !== '#') {
                        const target = document.querySelector(targetId);
                        if (target) {
                            e.preventDefault();
                            target.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            });
                        }
                    }
                } catch (error) {
                    console.error('Error during smooth scroll:', error);
                }
            });
        });
    } catch (error) {
        console.error('Error setting up smooth scroll:', error);
    }
}

// Track page views (simple analytics)
function trackPageView() {
    try {
        const page = normalizePath(window.location.pathname);
        console.log(`User viewed: ${page}`);
    } catch (error) {
        console.error('Error tracking page view:', error);
    }
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
    setupKeyboardShortcuts();
    setupSmoothScroll();
    trackPageView();
});