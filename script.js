document.addEventListener("DOMContentLoaded", function() {
    const heroImage = document.querySelector('.hero-image');
    const getHelpButtons = document.querySelectorAll('.btn.get-help');
    const ovalShape = document.querySelector('.oval-shape');

    function updateOvalPosition() {
        const heroImageRect = heroImage.getBoundingClientRect();
        const bottomGetHelpButton = getHelpButtons[getHelpButtons.length - 1].getBoundingClientRect();

        const ovalTop = heroImageRect.top - (window.innerHeight * 0.1);
        const ovalBottom = bottomGetHelpButton.bottom + (window.innerHeight * 0.1);

        ovalShape.style.top = `${ovalTop}px`;
        ovalShape.style.height = `${ovalBottom - ovalTop}px`;
    }

    window.addEventListener('resize', updateOvalPosition);
    window.addEventListener('scroll', updateOvalPosition);

    updateOvalPosition();
});
