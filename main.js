// Function to animate 10 images on scroll
function animateImagesOnScroll(images) {
    if (images.length !== 5) {
        console.error('Please provide exactly 5 images.');
        return;
    }

    let animationTriggered = false;

    window.addEventListener('scroll', () => {
        if (!animationTriggered && window.scrollY > 100) { // Trigger animation after scrolling 100px
            animationTriggered = true;

            images.forEach((image, index) => {
                setTimeout(() => {
                    image.classList.add('animate');
                }, index * 200); // Stagger animations by 200ms
            });

            // Allow scrolling after animation completes
            setTimeout(() => {
                document.body.style.overflowY = 'auto';
            }, images.length * 200 + 500); // Add extra time for the last animation
        }
    });
}