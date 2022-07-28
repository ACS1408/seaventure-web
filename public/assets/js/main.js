history.scrollRestoration = "manual";
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

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

//animation
// just "anim" in your element
window.addEventListener("load", () => {
    function isInViewport(el, gap) {
        let top = el.offsetTop;
        let left = el.offsetLeft;
        let height = el.offsetHeight;
        console.log(el.offsetParent);
        while (el.offsetParent) {
            el = el.offsetParent;
            top += el.offsetTop;
            left += el.offsetLeft;
        }
        return (
            (window.pageYOffset + window.innerHeight - gap) >= (top) &&
            (window.pageYOffset) <= (height + top)
        );
    }
    let getElem = document.querySelectorAll('.anim');
    //please change as per the design
    const breakPoints = {
        desktop: 80,
        laptop: 80,
        tab: 50,
        mobile: 30
    };
    let targetGap;
    window.innerWidth >= 1200 ? targetGap = breakPoints.desktop :
        window.innerWidth >= 1024 ? targetGap = breakPoints.laptop :
        window.innerWidth >= 768 ? targetGap = breakPoints.tab :
        targetGap = breakPoints.mobile;

    function anim() {
        getElem.forEach(element => {
            isInViewport(element, targetGap) ? element.classList.add("visible") : null;
        })
    }
    getElem.length > 0 ? (window.addEventListener('scroll', anim, false)) : null;
    getElem.length > 0 ? anim() : null;
}, false);

(function () {
	var observer = new IntersectionObserver(onIntersect);

	document.querySelectorAll("[data-lazy]").forEach((img) => {
		observer.observe(img);
	});

	function onIntersect(entries) {
		entries.forEach((entry) => {
			if (entry.target.getAttribute("data-processed") || !entry.isIntersecting)
				return true;
			entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
			entry.target.setAttribute("data-processed", true);
		});
	}
})();
