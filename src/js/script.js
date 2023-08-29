const html = document.querySelector('html');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  html.classList.toggle('lock');
});

window.addEventListener("scroll", function() {
  let scrollPos = window.scrollY;

  if (scrollPos > 0) {
     header.classList.add("scroll");
  } else {
     header.classList.remove("scroll");
  };
});

const searchIcon = document.querySelector('.header__search-icon');
const searchBar = document.querySelector('.header__search');

searchIcon.addEventListener("click", function() {
   searchBar.classList.toggle('active');
});

const heroSlider = new Swiper('.hero__slider', {
   slidesPerView: 1,
   spaceBetween: 5,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
});

const topSlider = new Swiper('.top__slider', {
   slidesPerView: 'auto',
   centeredSlides: true,
   initialSlide: 4,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   breakpoints: {
      320: {
         spaceBetween: 28,
      },
      1200: {
         spaceBetween: 40,
      },
   },
});

const filterButtons = document.querySelectorAll('.marketplace__button');
const marketplaceItems = document.querySelectorAll('.marketplace__item');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    const filter = this.dataset.filter;
    const activeItem = document.querySelector('.marketplace__button.clicked');
    
    marketplaceItems.forEach(item => {
      if (filter === 'all' || item.dataset.filter === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });

    if (activeItem) {
      activeItem.classList.remove('clicked');
    }

    this.classList.add('clicked');
  });
});


const viewStat = document.querySelectorAll('.view__stat-prcent');

viewStat.forEach(el => {
  const content = parseFloat(el.innerText);

  if(content > 0) {
   el.style.color = '#10c352';
  } else {
   el.style.color = '#e23333';
  }
});


const viewbuttons = document.querySelectorAll('.view__follow');


viewbuttons.forEach(function(button) {
    button.addEventListener('click', function() {

        button.classList.toggle('followed');
        
        if (button.classList.contains('followed')) {
            button.textContent = 'Unfollow';
        } else {
            button.textContent = 'Follow';
        }
    });
});

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(el => {
   el.addEventListener("click", (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.faq__control');
      const content = self.querySelector('.faq__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
         control.setAttribute('aria-expanded', true);
         content.setAttribute('aria-hidden', false);
         content.style.maxHeight = content.scrollHeight + 'px';
      } else {
         control.setAttribute('aria-expanded', false);
         content.setAttribute('aria-hidden', true);
         content.style.maxHeight = null;
      }
   })
});


const openModalBtns = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');


for (let i = 0; i < openModalBtns.length; i++) {
   openModalBtns[i].addEventListener('click', function() {
      modal.classList.add('show');
      html.classList.add('lock');
   });
}

closeBtn.addEventListener('click', function() {
   closeModal();
});


window.addEventListener('click', function(event) {
  if (event.target.classList.contains('modal')) {
   closeModal();
  }
});

function closeModal() {
   modal.classList.remove('show');
   if (window.innerWidth > 625) {
      html.classList.remove('lock')
   }
}
