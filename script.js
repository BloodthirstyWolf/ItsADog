// Мобильное меню
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');  // Поворот гамбургера
    mobileMenu.classList.toggle('active');  // Показ/скрытие мобильного меню
});
