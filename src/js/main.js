const menuIcon = document.getElementById("hambmenuicon");
const menu = document.querySelector(".porfolio__home--navbar--menu");
const menuList = document.querySelectorAll(".porfolio__home--navbar--menu li");

menuIcon.addEventListener("click", function () {
  menu.classList.toggle("menushow");
  changeMenu();
});

menuList.forEach((e) => {
  e.addEventListener("click", function () {
    menu.classList.remove("menushow");
    changeMenu();
  });
});

function changeMenu() {
  menu.classList.value.includes("menushow")
    ? (menuIcon.src = "./src/img/icons/closemenu.svg")
    : (menuIcon.src = "./src/img/icons/openmenu.svg");
}
