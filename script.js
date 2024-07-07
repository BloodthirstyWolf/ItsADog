document.addEventListener("DOMContentLoaded", function() {
    const heroImage = document.querySelector('.hero-image');
    const ovalShape = document.querySelector('.oval-shape');

    function positionOvalShape() {
        const heroImageRect = heroImage.getBoundingClientRect();
        const heroImageTop = heroImageRect.top;
        const windowHeight = window.innerHeight;

        // Установка вертикальной позиции
        const ovalTop = heroImageTop - (windowHeight * 0.2); // Начать на 20vh выше верхней части hero-image
        ovalShape.style.top = `${ovalTop}px`;
    }

    positionOvalShape(); // Вызываем функцию для первоначальной установки позиции
});
