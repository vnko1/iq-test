const menuEl = document.querySelector('.menu-container');
const openMenuBtn = document.querySelector('.header-button');
const closeMenuBtn = document.querySelector('.menu-button');

openMenuBtn.addEventListener('click', openMenu);

closeMenuBtn.addEventListener('click', closeMenu);

function openMenu() {
  menuEl.classList.add('is-open');
}

function closeMenu() {
  menuEl.classList.remove('is-open');
}
