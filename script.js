document.addEventListener("DOMContentLoaded", function() {
    const ovalShape = document.querySelector('.oval-shape');
    const personWithDog = document.querySelector('.hero-image');
    const getHelpButton = document.querySelector('.get-help');

    function updateOvalPosition() {
        const personRect = personWithDog.getBoundingClientRect();
        const buttonRect = getHelpButton.getBoundingClientRect();

        const ovalTop = personRect.top - (window.innerHeight * 0.1);
        const ovalBottom = buttonRect.bottom + (window.innerHeight * 0.1);

        ovalShape.style.top = ovalTop + 'px';
        ovalShape.style.height = (ovalBottom - ovalTop) + 'px';
    }

    window.addEventListener('resize', updateOvalPosition);
    window.addEventListener('scroll', updateOvalPosition);

    updateOvalPosition();
});
