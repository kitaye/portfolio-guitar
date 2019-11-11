function anchorScroll() {
    const links = document.querySelectorAll("[href^='#']");

    for (const link of links) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const attr = link.getAttribute("href");
            const anchor = document.querySelector(attr);
            const coordAnchor = anchor.getBoundingClientRect().top;
            const windowY = window.pageYOffset;
            let start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                const progress = time - start;

                let coordY =
                    coordAnchor < 0
                        ? Math.max(windowY - progress / 0.1, windowY + coordAnchor)
                        : Math.min(windowY + progress / 0.1, windowY + coordAnchor);

                window.scrollTo(0, coordY);
                if (coordY !== windowY + coordAnchor) {
                    requestAnimationFrame(step);
                }
            }
        })
    }
}

export default anchorScroll;