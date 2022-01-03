const menubtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu");

menubtn.addEventListener("click", (e) => {
  console.log(menu.style.display);
  console.log(menu.style.display=='none')
  if ((menu.style.display !== "flex")) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});


