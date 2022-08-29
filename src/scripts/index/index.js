const navbar = document.querySelector(".navbar")
const navbarOfsetTop = navbar.offsetTop


window.addEventListener('scroll', (e) => {

    e.preventDefault()

    if(window.scrollY >= navbarOfsetTop ){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
})

// 

const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')

sections.forEach( (section, i) => {
    
    if (window.pageYOffset >= section.offsetTop - 10) {

        navbarLinks.forEach(navbarlink => {
            navbarlink.classList.remove('change')
        });

        navbarLinks[i].classList.add('change');
    }
})