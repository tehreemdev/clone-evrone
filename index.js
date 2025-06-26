// create  variable with default value true
// get element hamburger and then add event listner -> function -> make hamburger hidden and show cross
// get element cross and then add event listner -> make cross hidden and show hamburger
console.log("helloooo");
let a = true;

function showCross() {
  let ham = document.getElementById("hamburgerForSideBar");
  console.log("ham", ham);
  ham.style.display = "none";

  let cross = document.getElementById("crossForSideBar");
  console.log("cross", cross);
  cross.style.display = "block";

  let Bar = document.getElementById("leftBar");
  console.log("show", Bar);
  Bar.style.display = "block";

  let BackDrop = document.getElementById("backDrop");
  console.log("Filter", BackDrop);
  BackDrop.style.backdropFilter = "blur(5px)";
  BackDrop.style.backgroundColor = "rgba(0, 0, 0, 0.5)";

  let NavBar = document.getElementById("navBar");
  console.log("navBar", NavBar);
  NavBar.style.backdropFilter = "";
  NavBar.style.backgroundColor = "";
}

function showHamburger() {
  let ham = document.getElementById("hamburgerForSideBar");
  console.log("ham", ham);
  ham.style.display = "block";

  let cross = document.getElementById("crossForSideBar");
  console.log("cross", cross);
  cross.style.display = "none";

  let Bar = document.getElementById("leftBar");
  console.log("show", Bar);
  Bar.style.display = "none";

  let BackDrop = document.getElementById("backDrop");
  console.log("Filter", BackDrop);
  BackDrop.style.backdropFilter = "0px";
  BackDrop.style.backgroundColor = "transparent";

  console.log("Filter", BackDrop);

  let NavBar = document.getElementById("navBar");
  console.log("navBar", NavBar);
  // NavBar.style.backdropFilter = "";
  NavBar.style.backgroundColor = "white";
}
