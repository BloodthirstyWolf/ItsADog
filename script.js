document.addEventListener("DOMContentLoaded", function() {
    const heroImage = document.querySelector('.hero-image');
    const ovalShape = document.querySelector('.oval-shape');

    function updateOvalPosition() {
        const heroImageRect = heroImage.getBoundingClientRect();
        const heroImageBottom = heroImageRect.bottom;
        const heroImageCenterX = heroImageRect.left + heroImageRect.width / 2;

        // Установка высоты и позиции овала
        ovalShape.style.top = `${heroImageBottom - (window.innerHeight * 0.2)}px`;
        ovalShape.style.left = `${heroImageCenterX}px`;
    }

    window.addEventListener('resize', updateOvalPosition);
    window.addEventListener('scroll', updateOvalPosition);

    updateOvalPosition();
});
