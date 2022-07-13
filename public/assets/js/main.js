window.addEventListener('scroll', (e) => {
    const scroll = this.scrollY;
    scroll >= 100 ? document.body.classList.add('slim-header') : document.body.classList.remove('slim-header');
})