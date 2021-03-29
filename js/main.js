const burger = document.querySelector('.menu__btn');
const navList = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');


burger.addEventListener('click', e => {
    e.preventDefault();

    navList.classList.toggle('show');
    
});

navLink.forEach(item => {
    item.addEventListener('click', function() {
        for (let i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove('active'); 
          }
          this.classList.add('active');
    });
});

