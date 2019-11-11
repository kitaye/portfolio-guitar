function parallax() {
    const area = document.querySelector(".js-parallax");
    const layers = area.querySelectorAll(".js-layer");

    window.addEventListener("scroll", function() {
        const coordY = window.pageYOffset;

        layers.forEach( layer => {
            const speed = layer.dataset.speed;
            const value = speed * coordY / 2;
            layer.style.transform = `translateY(-${value}px)`;

        })
    });
}

export default parallax;

