import "../scss/main.scss";

//toggle mobile menu
if (document.querySelector(".header__menu")) {
   document.querySelector(".header__menu").addEventListener("click", (e) => {
      e.currentTarget.classList.toggle("opened");
      document.querySelector(".nav").classList.toggle("opened");

      if (document.querySelector(".nav").classList.contains("opened")) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
   });
}
