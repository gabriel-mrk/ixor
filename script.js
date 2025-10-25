// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Apply observer to sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(section);
});

// Dynamic flavor card effects
const flavorCards = document.querySelectorAll('.flavor-card');
flavorCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const flavor = card.dataset.flavor;
        document.documentElement.style.setProperty('--active-flavor', `var(--${flavor})`);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Gallery image loading simulation
const loadGalleryImages = () => {
    const gallery = document.querySelector('.gallery-grid');
    if (gallery) {
        // Placeholder for gallery images
        const imageCount = 6;
        for (let i = 0; i < imageCount; i++) {
            const item = document.createElement('div');
            item.className = 'gallery-item glassmorphic';
            item.style.aspectRatio = '1';
            gallery.appendChild(item);
        }
    }
};

// Initialize gallery
loadGalleryImages();