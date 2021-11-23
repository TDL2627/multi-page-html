var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0.08) {
    // Show button
    scrollToTopBtn.classList.add("showBtn");
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
// nav
$(".nav a").on("click", function () {
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});
// scroll active
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.onscroll = () => {
var current = "";

sections.forEach((section) => {
const sectionTop = section.offsetTop;
if (pageYOffset >= sectionTop - 60) {
  current = section.getAttribute("id"); }
});

navLi.forEach((li) => {
li.classList.remove("active");
if (li.classList.contains(current)) {
  li.classList.add("active");
}
});
};