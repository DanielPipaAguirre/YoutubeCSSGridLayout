bar.addEventListener('click', () => {
    page.classList.toggle("active");
})
const comprobarAncho = () => {
    if (window.innerWidth <= 768) {
        page.classList.remove("active");
    } else {
        page.classList.add("active");
    }
}
comprobarAncho();
window.addEventListener("resize", () => {
    comprobarAncho();
})