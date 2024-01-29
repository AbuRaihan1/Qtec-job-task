const navIcon = document.querySelector(".nav-icon");
navIcon.addEventListener("click", function () {
  const navContent = document.querySelector(".navbar-links-wrapper");
  navContent.classList.toggle("active-nav");
});
