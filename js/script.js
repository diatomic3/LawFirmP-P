// script.js (версия с var для максимальной совместимости)
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.main-navigation');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');

            var isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded.toString());

            if (isExpanded) {
                this.setAttribute('aria-label', 'Закрити меню');
            } else {
                this.setAttribute('aria-label', 'Відкрити меню');
            }
        });

        var menuItems = document.querySelectorAll('.main-navigation a');
        menuItems.forEach(function(item) { // Используем function() для лучшей совместимости
            item.addEventListener('click', function() {
                if (menuToggle.classList.contains('active')) {
                    menuToggle.classList.remove('active');
                    nav.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Відкрити меню');
                }
            });
        });

        var isNavActiveOnLoad = nav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isNavActiveOnLoad.toString());
        if (isNavActiveOnLoad) {
            menuToggle.setAttribute('aria-label', 'Закрити меню');
        } else {
            menuToggle.setAttribute('aria-label', 'Відкрити меню');
        }

        // Для aria-controls, если вы добавили id="mainNav" в HTML
        // if (nav.id) {
        //     menuToggle.setAttribute('aria-controls', nav.id);
        // }
    }
});