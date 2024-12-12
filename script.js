  const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('open'); // Добавляем/убираем класс "open" для анимации стрелки и открытия меню
        });
    });

menuToggle.addEventListener('click', function() {
    if (menuToggle.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    } else {
        mobileMenu.classList.add('active');
    }
    menuToggle.classList.toggle('active');
});
