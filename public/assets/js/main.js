setTimeout(() => {
    let stateCheck = setInterval(() => {
        if (document.readyState === 'complete') {
          clearInterval(stateCheck);
          document.querySelector('html').classList.add('page-loaded');
        }
    }, 100);
}, 3000);

window.addEventListener('scroll', (e) => {
    const scroll = this.scrollY;
    scroll >= 100 ? document.body.classList.add('slim-header') : document.body.classList.remove('slim-header');
})

const serviceCard = document.querySelectorAll('.service-card');
const serviceCardOffset = () => {
    serviceCard.forEach((card) => {
        const cardHeight = card.offsetHeight;
        const titleHeight = card.querySelector('.service-card__title').offsetHeight;
        const cardOffset = cardHeight - titleHeight - 33;
        card.querySelector('.service-card__contents').style.transform = `translateY(${cardOffset}px)`;
    })
}
serviceCardOffset();
window.addEventListener('resize', () => serviceCardOffset());

const hamburgerBtn = document.querySelector('.hamburger');
hamburgerBtn.addEventListener('click', () => {
    document.body.classList.add('menu-open');
    document.querySelector('main').style.overflow = 'hidden';
});
const closeHamBtn = document.querySelector('.close-menu-btn');
closeHamBtn.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    document.querySelector('main').style.overflow = '';
});

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
if(isAndroid) {
    document.body.classList.add('android');
}

const serviceModal = document.querySelector('.service-modal');
serviceCard.forEach((card, index) => {
    card.addEventListener('click', () => {
        let serviceTitle = card.querySelector('.service-card__title').innerText;
        let serviceContent = card.querySelector('.service-card__description').innerText;
        serviceModal.querySelector('.modal-title').innerText = serviceTitle;
        serviceModal.querySelector('.modal-body').innerText = serviceContent;
    })
});

const contactInput = document.querySelectorAll('.home-contact__form input');
const contactTextarea = document.querySelectorAll('.home-contact__form textarea');

contactInput.forEach(input => {
    input.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
    })
    input.addEventListener('blur', (e) => {
        e.target.value == "" && e.target.parentElement.classList.remove('focused');
    })
});

contactTextarea.forEach(input => {
    input.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
    })
    input.addEventListener('blur', (e) => {
        e.target.value == "" && e.target.parentElement.classList.remove('focused');
    })
})