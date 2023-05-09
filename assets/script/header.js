const listHeader = document.querySelector('.js-header-list');
const navHeader = document.querySelector('.js-header-nav');


listHeader.addEventListener('click', (e) => {
    navHeader.classList.add('active');
    e.stopPropagation();
})

navHeader.addEventListener('click', (e) => {
    e.stopPropagation();
})

window.addEventListener('click', (e) => {
    navHeader.classList.remove('active');
})