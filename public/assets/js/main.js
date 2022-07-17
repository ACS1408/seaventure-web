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
});
const closeHamBtn = document.querySelector('.close-menu-btn');
closeHamBtn.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
});

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1;
if(isAndroid) {
    document.body.classList.add('android');
}