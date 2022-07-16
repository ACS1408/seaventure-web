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
window.addEventListener('resize', () => serviceCardOffset())