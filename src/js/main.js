const menuIcon = document.getElementById("hambmenuicon");
const menu = document.querySelector(".porfolio__home--navbar--menu");
const menuList = document.querySelectorAll(".porfolio__home--navbar--menu li");



menuIcon.addEventListener("click", function () {
  menu.classList.toggle("menushow");
  menu.classList.value.includes("menushow")
    ? (document.getElementById("hambmenuicon").src="./src/img/icons/closemenu.svg")
    : (document.getElementById("hambmenuicon").src="./src/img/icons/openmenu.svg");
});

menuList.forEach(e => { e.addEventListener("click",function(){
  menu.classList.remove("menushow");
})})