const navBar = document.querySelector(".nav-bar");
const bottomCont = document.querySelector(".bottom-container");

console.log(bottomCont.offsetTop);
console.log(navBar.offsetHeight);

window.addEventListener("scroll", function () {
  if (window.scrollY > bottomCont.offsetTop - navBar.offsetHeight - 50) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
});
