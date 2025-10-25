// Video sequence controller
class IxorVideoController {
    constructor() {
        this.currentSequence = 0;
        this.sequences = [
            {
                color: '#4A1259', // Blackberry
                duration: 5000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            },
            {
                color: '#4CAF50', // Apple
                duration: 5000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            },
            {
                color: '#FFA726', // Mango
                duration: 5000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            },
            {
                color: '#FF4D6D', // Strawberry
                duration: 5000,
                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }
        ];
        
        this.init();
    }

    init() {
        // Initialize video overlay elements
        const overlay = document.getElementById('video-overlay');
        if (!overlay) return;

        this.startSequence(overlay);
    }

    startSequence(overlay) {
        setInterval(() => {
            const currentColor = this.sequences[this.currentSequence].color;
            const nextColor = this.sequences[(this.currentSequence + 1) % this.sequences.length].color;
            
            overlay.style.background = `
                linear-gradient(
                    45deg,
                    ${currentColor}20,
                    ${nextColor}20
                )
            `;
            
            this.currentSequence = (this.currentSequence + 1) % this.sequences.length;
        }, 5000);
    }
}

// Initialize controller when document is ready
document.addEventListener('DOMContentLoaded', () => {
    new IxorVideoController();
});