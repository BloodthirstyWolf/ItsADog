// Мобильное меню
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');  // Поворот гамбургера
    mobileMenu.classList.toggle('active');  // Показ/скрытие мобильного меню
});

// Выпадающее меню
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const arrow = dropdown.querySelector('.dropdown-arrow');

    // Обработчик клика по выпадающему меню
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Останавливаем стандартное поведение ссылки
        dropdown.classList.toggle('active'); // Открываем/закрываем меню
        arrow.classList.toggle('rotate');  // Поворачиваем стрелку
    });
});
