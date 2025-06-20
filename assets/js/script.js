document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="/web#"]');

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        const hash = this.getAttribute("href").split("#")[1];
        const target = document.getElementById(hash);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 70, // ajuste por navbar
            behavior: "smooth"
          });
        }
      });
    });
  });