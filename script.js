// ===========================
// PAGE NAVIGATION
// ===========================

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Scroll to top
    window.scrollTo(0, 0);
}

// ===========================
// FORM HANDLING
// ===========================

function handleSubmit(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
    }

    // Show success message
    alert(`Thank you ${name}! Your message has been received. We'll get back to you soon at ${email}`);

    // Reset form
    document.querySelector('.contact-form').reset();

    // In a real application, you would send this data to a server
    console.log({
        name,
        email,
        company,
        service,
        message,
        timestamp: new Date().toISOString()
    });
}

// ===========================
// SMOOTH ANIMATIONS ON LOAD
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to hero on load
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(20px)';
        setTimeout(() => {
            hero.style.transition = 'all 0.8s ease';
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }

    // Add stagger animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });

    // Add stagger animation to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
        }, 100 + index * 100);
    });
});

// ===========================
// ACTIVE NAV LINK INDICATOR
// ===========================

function updateActiveNav(pageId) {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
    });

    // Find and highlight the current page link
    navLinks.forEach(link => {
        if (link.textContent.toLowerCase() === pageId) {
            link.style.color = 'var(--primary-glow)';
        }
    });
}

// Override showPage to include nav update
const originalShowPage = showPage;
showPage = function(pageId) {
    originalShowPage(pageId);
    updateActiveNav(pageId);
};
