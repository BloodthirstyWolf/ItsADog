  const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    })

   document.querySelectorAll('.dropdown > a').forEach(item => {
        item.addEventListener('click', function(event) {
            const parent = item.parentNode;
            parent.classList.toggle('open');
        });
    });
