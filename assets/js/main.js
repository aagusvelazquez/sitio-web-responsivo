/*=============== CAMBIAR BACKGROUND DEL HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById("header")
    // cuando el scroll tiene una altura superior a 50 viewport, agregue la clase scroll-header a la etiqueta del header
    if (this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== ACORDION DE VALOR ===============*/
const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".value__accordion-header")

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem!== item) {
            toggleItem(openItem)
        }
    })
})
const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

/*=============== DESPLAZARSE POR SECCIONES CON ENLACE ACTIVO ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== MOSTRAR SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== TEMA OSCURO ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Tema seleccionado previamente (si está seleccionado por el usuario)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que tiene la interfaz validando la clase de dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// Validamos si el usuario eligió previamente un tema
if (selectedTheme) {
    // Si se cumple la validación preguntamos cuál fue el problema para saber si activamos o desactivamos el tema oscuro
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activar/Desactivar el tema manualmente con el botón
themeButton.addEventListener('click', () => {
    // Agregar o remover el tema oscuro/icono
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // Guardamos el tema y el icono actual que el eligió usuario.
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/