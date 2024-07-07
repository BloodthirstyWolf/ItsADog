document.addEventListener("DOMContentLoaded", function() {
    const heroImage = document.querySelector('.hero-image');
    const ovalShape = document.querySelector('.oval-shape');

    function positionOvalShape() {
        const heroImageRect = heroImage.getBoundingClientRect();
        const heroImageBottom = heroImageRect.bottom;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        // Установка вертикальной позиции
        const ovalTop = heroImageBottom - (windowHeight * 0.2); // Начать на 20vh выше нижней части hero-image
        ovalShape.style.top = `${ovalTop}px`;

        // Установка горизонтальной позиции в центре экрана
        const ovalLeft = (windowWidth / 2) - (ovalShape.offsetWidth / 2);
        ovalShape.style.left = `${ovalLeft}px`;

        // Установка высоты овала
        const ovalHeight = windowHeight * 1.2; // Высота овала на 120vh
        ovalShape.style.height = `${ovalHeight}px`;
    }

    window.addEventListener('resize', positionOvalShape);
    window.addEventListener('scroll', positionOvalShape);

    positionOvalShape(); // Вызываем функцию для первоначальной установки позиции
});
