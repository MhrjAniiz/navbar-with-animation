const showNav = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-link");
  const nav_links = document.querySelectorAll(".nav-link li");
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav_show");

    nav_links.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `show_navLinks 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

showNav();
