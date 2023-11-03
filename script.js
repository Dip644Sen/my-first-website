// ------ about section buttons -------

const overlay = document.querySelector('.overlay');
const allSections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-links');
const navBar = document.querySelector('.nav');
const header = document.querySelector('.header');
const navHeight = navBar.getBoundingClientRect().height;
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');
const section1 = document.querySelector('#header');
const btnScroll = document.querySelector('.scroll--btn');
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');

tabLinks.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        const clicked = e.target.closest('.tab-links');
        let id = e.target.getAttribute('href');
        if (!clicked) return;

        tabLinks.forEach(t => t.classList.remove('active-link'));
        e.target.classList.add('active-link');
        tabContents.forEach(tab => tab.classList.remove('active-tab'));
        document.querySelector(id).classList.add('active-tab');
    })
})

// ----- navlinks behaviour -----

navLinks.forEach(nav => {
    nav.addEventListener('click', function (e) {
        e.preventDefault();

        const clicked = e.target.closest('.nav-links');
        let id = e.target.getAttribute('href');
        if (!clicked) return;

        document.querySelector('.nav-ul').style.right = '-200px';
        navLinks.forEach(n => n.classList.remove('active-nav-link'));
        e.target.classList.add('active-nav-link');
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    })
})

window.onscroll = () => {
    allSections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active-nav-link');
                document.querySelector('.nav-links[href*=' + id + ']').classList.add('active-nav-link');
            })
        }
    })
}

//----- sticky navbar-------

// document.addEventListener('scroll', function () {
//     if (window.scrollY > 0) navBar.classList.add('sticky')
//     else navBar.classList.remove('sticky');
// })

const stickyFunction = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        navBar.classList.add('sticky');
    }
    else navBar.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyFunction,
    {
        root: null,
        threshold: 0,
        rootMargin: (`-${navHeight}px`),
    });

headerObserver.observe(header);

// ------- footer button --------

btnScroll.addEventListener('click', function (e) {
    e.preventDefault();
    section1.scrollIntoView({ behavior: "smooth" });
})

// ------menu button -----

menuBtn.addEventListener('click', function () {
    document.querySelector('.nav-ul').style.right = '0';

    closeBtn.addEventListener('click', function () {
        document.querySelector('.nav-ul').style.right = '-200px';
    });
});

overlay.addEventListener('click', function () {
    document.querySelector('.nav-ul').style.right = '-200px';
})

