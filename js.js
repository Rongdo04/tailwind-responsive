function handleResize() {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;

  var takeYourSite = document.getElementById("take-your-site");

  if (screenWidth <= 440 && screenHeight <= 940) {
    // Remove the class when conditions are met
    takeYourSite.classList.remove("text-6xl");
    console.log(takeYourSite);
  } else {
    // Add the class back when conditions are not met
    takeYourSite.classList.add("text-6xl");
  }
}
handleResize();
window.addEventListener("resize", handleResize);
