const logoToggle = document.querySelector('.logo-toggle');
const menuItems = document.querySelector('.menu-items');

logoToggle.addEventListener('click', () => {
    menuItems.classList.toggle('show-menu');
});
