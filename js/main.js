window.addEventListener('load',()=> {
    const body = document.querySelector('body');
          navLinks = document.querySelector('.nav__links'),
          burgerMenu = document.querySelector('.nav__burger'),
          navLink = document.querySelectorAll('.nav__link')

    function navLinksToggle() {
        burgerMenu.classList.toggle('burger_active')
        navLinks.classList.toggle('active')
        body.classList.toggle('nav-body-active')
    }
    burgerMenu.addEventListener('click',()=> {
        navLinksToggle()
    })
    navLink.forEach(link=> {
        link.addEventListener('click',()=> {
            navLinksToggle()
        })
    })
})