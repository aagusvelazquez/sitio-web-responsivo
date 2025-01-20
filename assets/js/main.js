/*=============== CAMBIAR BACKGROUND DEL HEADER ===============*/
function scrollHeader () {
    const header = document.getElementById("header")
    // cuando el scroll tiene una altura superior a 50 viewport, agregue la clase scroll-header a la etiqueta del header
    if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)