function toggleMenu() {
    var menuOverlay = document.querySelector('.menu-overlay');
    var menuContainer = document.querySelector('.menu-container');
    var verticalMenu = document.getElementById('verticalMenu');

    menuOverlay.classList.toggle('active');
    menuContainer.classList.toggle('active');
    verticalMenu.classList.toggle('show-menu');
}
document.addEventListener("DOMContentLoaded", function() {
    // Your other JavaScript code if any
});