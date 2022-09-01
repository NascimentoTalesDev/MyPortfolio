const navbar = document.querySelector(".navbar")
const navbarOfsetTop = navbar.offsetTop

const sections = document.querySelectorAll('section')
const navbarLinks = document.querySelectorAll('.navbar-link')

const progress = document.querySelector('.progress-bars-wrapper')
// const progressBarSpans = document.querySelectorAll('.progress-bar span')
const progressBarPercents = [98, 90, 83, 93, 80, 85]


window.addEventListener('scroll', () => {
    mainFn();
})

const mainFn = () => {

    if(window.scrollY >= navbarOfsetTop){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }

    sections.forEach( (section, i) => {
    
        if (window.scrollY >= section.offsetTop - 10) {
    
            navbarLinks.forEach(navbarlink => {
                navbarlink.classList.remove('change')
            });
    
            navbarLinks[i].classList.add('change');
        }
    })

    if (window.scrollY + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll('.progress-porcent').forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`
            el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i]
        })
        // progressBarSpans.forEach((sp, i) => {
        //     sp.innerHTML = `${progressBarPercents[i]}`
        // })
    }
}

mainFn()

window.addEventListener('resize', () => {
    // window.location.reload();
})

