
const burger = document.querySelector('.menu__btn');
const navList = document.querySelector('.nav__list');


burger.addEventListener('click', e => {
    e.preventDefault();

    navList.classList.toggle('hide');
    
});

