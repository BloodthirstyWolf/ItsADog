document.addEventListener("DOMContentLoaded", function() {
    const heroImage = document.querySelector('.hero-image');
    const ovalShape = document.querySelector('.oval-shape');

    function updateOvalPosition() {
        const heroImageRect = heroImage.getBoundingClientRect();
        const heroImageBottom = heroImageRect.bottom + window.scrollY; // Позиция нижней границы hero-image

        const ovalHeight = window.innerHeight * 0.2; // Высота овала (20vh)

        const ovalTop = heroImageBottom - ovalHeight; // Позиция верхней границы овала

        ovalShape.style.top = `${ovalTop}px`;
    }

    window.addEventListener('resize', updateOvalPosition);
    window.addEventListener('scroll', updateOvalPosition);

    updateOvalPosition();
});
