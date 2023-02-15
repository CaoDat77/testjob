console.log("haha");

let open = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close");
console.log(open);
console.log(menu);
open.addEventListener("click", function () {
  menu.style.transform = "translateX(0)";
});

close.addEventListener("click", function () {
  menu.style.transform = "translateX(-100%)";
});
