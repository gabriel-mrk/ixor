// Chameleon video background effect simulation
const createChameleonEffect = () => {
    const overlay = document.getElementById('video-overlay');
    if (!overlay) return;

    const colors = {
        blackberry: [74, 18, 89],
        strawberry: [255, 77, 109],
        apple: [76, 175, 80],
        mango: [255, 167, 38]
    };

    let currentIndex = 0;
    const colorKeys = Object.keys(colors);

    setInterval(() => {
        const currentColor = colors[colorKeys[currentIndex]];
        const nextColor = colors[colorKeys[(currentIndex + 1) % colorKeys.length]];

        overlay.style.background = `
            linear-gradient(
                45deg,
                rgba(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]}, 0.1),
                rgba(${nextColor[0]}, ${nextColor[1]}, ${nextColor[2]}, 0.1)
            )
        `;

        currentIndex = (currentIndex + 1) % colorKeys.length;
    }, 5000);
};

// Parallax effect for sections
const createParallaxEffect = () => {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const distance = window.scrollY - section.offsetTop;
            const parallaxElements = section.querySelectorAll('.parallax');
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.2;
                element.style.transform = `translateY(${distance * speed}px)`;
            });
        });
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    createChameleonEffect();
    createParallaxEffect();
});