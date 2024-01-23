document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var parallaxImage = document.querySelector(".cover-image");
  parallaxImage.style.transform = "translateY(" + scrollPosition * 0.4 + "px)";
});
