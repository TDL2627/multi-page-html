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
// the active
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


   document.getElementById("scrolling").style.color="red";

   let headings = document.getElementsByTagName("h1");
   for (let i = 0; i < headings.length; i++){
    headings[i].style.textDecorationColor="red";
}

let buttons = document.getElementsByClassName("buit");
for (let i = 0; i < buttons.length; i++){
 buttons[i].style.backgroundColor="red";
 buttons[i].style.boxShadow="0 8px 32px 0 red";
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

    let percent = document.getElementsByClassName("p-bar");
    for (let i = 0; i < percent.length; i++){
        percent[i].style.backgroundColor="red";
        percent[i].style.color="white";
    }

    let accordion = document.getElementsByClassName("accordion-button");
    for (let i = 0; i < accordion.length; i++){
        accordion[i].style.backgroundColor="red";
        accordion[i].style.color="white";
    }


    let timeCard = document.getElementsByClassName(".time-card");
    for (let i = 0; i < timeCard.length; i++){
        timeCard[i].style.backgroundColor="red";
        timeCard[i].style.color="white";
    }
    document.getElementById("timy").style.color="red";

    document.getElementById("mail1").style.color="red";



    document.getElementById("downloadcv").style.backgroundColor="red";
    document.getElementById("downloadcv").style.color="white";
    document.getElementById("downloadcv").style.boxShadow="0 8px 32px 0 red";

    document.getElementById("timezone").style.borderColor="red";
    document.getElementById("timezone").style.boxShadow="0 8px 32px 0 red";


    let activation = document.getElementsByClassName("slink1");
    console.log(activation);
    for (let i = 0; i < activation.length; i++){
      if(activation[i].classList.contains("active")){
        activation[i].style.textDecorationColor="red";
        activation[i].style.color="white";
        activation[i].style.backgroundColor="red";
      }
    }
    


  }

// alert("Please allow page to load to become fully functional");
