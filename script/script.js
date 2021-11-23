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

// color changer
// red
function red() {
   document.getElementById("sideName").style.textDecorationColor="red";
   let subhead =document.getElementsByClassName("sub-head");
   for (let i = 0; i < subhead.length; i++){
    subhead[i].style.textDecorationColor="red";
   }

   let headings = document.getElementsByTagName("h1");
   for (let i = 0; i < headings.length; i++){
    headings[i].style.textDecorationColor="red";
}

let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++){
 buttons[i].style.backgroundColor="red";
 buttons[i].style.color="white";
}

let headings1 = document.getElementsByTagName("h2");
for (let i = 0; i < headings1.length; i++){
 headings[i].style.textDecorationColor="red";
}

document.getElementById("subbed-head2").style.color="red";

let headings3 = document.getElementsByTagName("h4");
for (let i = 0; i < headings3.length; i++){
 headings[i].style.textDecorationColor="red";
}

    let land = document.getElementsByClassName("into1");
    for (let i = 0; i < land.length; i++){
        land[i].style.color="red";
    }

    let contactHead = document.getElementsByClassName("cnthead");
    for (let i = 0; i < contactHead.length; i++){
        contactHead[i].style.color="red";
    }

    document.getElementById("mail").style.color="red";

    document.getElementById("downloadcv").style.backgroundColor="red";
    document.getElementById("downloadcv").style.color="white";

    document.getElementById("timezone").style.borderColor="red";
    document.getElementById("timezone").style.boxShadow="none";
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        