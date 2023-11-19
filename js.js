function handleResize() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var container = document.querySelector(".container");
  console.log(container);
  if (screenWidth <= 440 && screenHeight <= 940) {
    // Remove the class when conditions are met
    container.classList.remove("px-52");
    container.classList.add("px-10");
  } else {
    // Add the class back when conditions are not met
    container.classList.add("px-52");
  }
}
handleResize();
window.addEventListener("resize", handleResize);
