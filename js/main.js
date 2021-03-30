const burger = document.querySelector('.menu__btn');
const navList = document.querySelector('.nav__list');
const navLink = document.querySelectorAll('.nav__link');
const header = document.querySelector('.nav');
const headerHeight = header.offsetTop;


function mobileMenu() {
    burger.addEventListener('click', e => {
        e.preventDefault();
    
        navList.classList.toggle('show');
        
    });
}


function activeLink() {
    navLink.forEach(item => {
        item.addEventListener('click', function() {
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].classList.remove('active'); 
              }
              this.classList.add('active');
        });
    });
}

function smoothScroll() {
	const scrollLinks = document.querySelectorAll('a.scroll-link');

	for (const scrollLink of scrollLinks) {
		scrollLink.addEventListener('click', event => {
			event.preventDefault();
			const id = scrollLink.getAttribute('href');
			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}
}


function menuFixed() {
    window.addEventListener('scroll', (e) => {
        e.preventDefault();
    
        if (window.scrollY >= headerHeight) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}


mobileMenu();
activeLink();
smoothScroll();
menuFixed();
