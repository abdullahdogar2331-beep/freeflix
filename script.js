document.addEventListener("DOMContentLoaded", () => {

```
const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

/* Mobile menu */
if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");
    });
}


/* Smooth navigation */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* Movie card interaction */
document.querySelectorAll(".movie-image").forEach(card => {

    card.addEventListener("click", () => {

        const movieName =
            card.querySelector("h3")?.textContent || "Movie";

        console.log(`Selected movie: ${movieName}`);

    });

});


/* Search button */
const searchButton = document.querySelector(".icon-btn");

if (searchButton) {

    searchButton.addEventListener("click", () => {

        const search = prompt("Search movies:");

        if (!search) return;

        const query = search.toLowerCase().trim();

        document.querySelectorAll(".movie-card").forEach(card => {

            const text =
                card.textContent.toLowerCase();

            card.style.display =
                text.includes(query) ? "" : "none";

        });

    });

}


/* Active navigation */
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${current}`) {
            link.classList.add("active");
        }

    });

});
```

});

