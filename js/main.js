
window.addEventListener('load',()=> {
    const body = document.querySelector('body');
          navLinks = document.querySelector('.nav__links'),
          burgerMenu = document.querySelector('.nav__burger'),
          navLink = document.querySelectorAll('.nav__link'),
          portfolio = document.querySelector('.portfolio__items')

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
    portfolios.forEach((item)=> {
        portfolio.innerHTML +=`
            <div class="portfolio__item">
                <div class="portfolio__img">
                    <img src=${item.image}>
                </div>
                <div class="portfolio__info">
                    <h3 class="portfolio__name">${item.name}</h3>
                    <p class="portfolio__desc">${item.desc}</p> 
                    <div class="portfolio__techs">
                    
                    </div>
                    <div class="portfolio__links">
                    </div>
            </div>
        `
    })
    const portfolioTech = document.querySelectorAll('.portfolio__techs')
        portfolios.forEach((portfolio)=> {
            portfolio.technology.forEach(tech=> {
                portfolioTech[portfolio.id-1].innerHTML += `
                <span>${tech}</span>
            `
            })
        } )
    const portfolioLinks = document.querySelectorAll('.portfolio__links')
        portfolios.forEach((portfolio)=> {
            portfolio.links.forEach(link=> {
                portfolioLinks[portfolio.id-1].innerHTML += `
                <a href=${link.url}>${link.name}</a>
            `
            })
        } )

})