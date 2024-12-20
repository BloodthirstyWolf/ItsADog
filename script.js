// Мобильное меню
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');  // Поворот гамбургера
    mobileMenu.classList.toggle('active');  // Показ/скрытие мобильного меню
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
    const arrow = dropdown.querySelector('.dropdown-arrow');
    const content = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', () => {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    });

    dropdown.addEventListener('mouseleave', () => {
        content.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    });
});
