"use strict";
const burger = document.querySelector(".header__btn"),
    nav = document.querySelector(".navigation");
/*
//  Способ №1
if (burger) {
    burger.addEventListener("click", () => {
        nav.classList.toggle("menu-active");
    });
}
*/
/*
// Способ №2
if (burger) {
    burger.addEventListener("click", () => {
        if (nav.classList.contains("menu-active")) {
            nav.classList.remove("menu-active");
        } else {
            nav.classList.add("menu-active");
        }
    });
}
*/
/*
// Способ №3
if (burger) {
    burger.addEventListener("click", () => {
        if (!nav.classList.contains("menu-active")) {
            nav.classList.add("menu-active");
        } else {
            nav.classList.remove("menu-active");
        }
    });
}
*/
/*
// Способ №4 (наследование)
if (burger) {
    burger.addEventListener("click", () => {
        if (nav.closest(".header__wrapper")) {
            nav.classList.toggle("menu-active");
        }
    });
}
*/

// Способ №5 (делегирование)
document.addEventListener("click", (e) => {
    const target = e.target;

    if (target.classList.contains("header__btn")) {
        nav.classList.toggle("menu-active");
    }
});
