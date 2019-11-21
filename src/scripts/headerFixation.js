function headerFixation() {
    const header = document.querySelector(".js-header");
    const activeClass = "is-active";
    const starPoint = header.getBoundingClientRect().top;

    window.addEventListener("scroll", function () {
        header.classList.add(activeClass);

        const coordY = window.pageYOffset;

        if (starPoint == coordY) {
            header.classList.remove(activeClass);
        }
    });
}


export default headerFixation;