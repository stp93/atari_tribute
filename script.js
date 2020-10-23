const toggle = document.getElementById("toggle"),
  nav = document.getElementById("nav"),
  close = document.getElementById("close"),
  bars = document.getElementById("bars");

const showMenu = () => {
  if (toggle) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
      bars.classList.add("disappear");
    });
  }
  if (close) {
    close.addEventListener("click", () => {
      nav.classList.toggle("show");
      bars.classList.remove("disappear");
    });
  }
};

showMenu("toggle", "nav");

const navLink = document.querySelectorAll(".link"),
  navMenu = document.getElementById("nav");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*change color on scroll*/
window.onscroll = () => {
  const bar = document.getElementById("bar");
  if (this.scrollY >= 10) bar.classList.add("scroll-bar");
  else bar.classList.remove("scroll-bar");
};
