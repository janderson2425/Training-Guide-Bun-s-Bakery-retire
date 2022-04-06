const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))


  function myFunction(){
    var x = document.getElementById("myDIV");
    if (x.style.display === "none"){
      x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }