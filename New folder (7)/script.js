/* JavaScript pour le bouton de bascule */
const menuToggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
