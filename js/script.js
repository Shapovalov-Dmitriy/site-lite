'use strict';

// ////////  menu /////////

const burger = document.querySelector('.header__btn'),
    nav = document.querySelector('.navigation');

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
document.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('header__btn')) {
        nav.classList.toggle('menu-active');
    }
});

// //////////наведение мышью ///////////

const logo = document.querySelector('.header__logo'),
    text = document.querySelector('.hero__title');
if (logo) {
    logo.addEventListener('mouseover', () => {
        // При наведениимышью на логотип, меняем текст элемента на ПОЛУЧИЛОСЬ!!!
        text.innerHTML = 'ПОЛУЧИЛОСЬ!!!';
    });
}

if (logo) {
    logo.addEventListener('mouseout', () => {
        // Когда убираем мышь с логотипа, текст элемента меняется на РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ
        text.innerHTML = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В РОССИИ';
    });
}

// \\\\\\\\\\ темная тема //////////////
const body = document.querySelector('body'),
    themeBtn = document.querySelector('.btn-theme');

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark'); // Переключаем класс dark на body
        if (body.classList.contains('dark')) {
            // Проверяем, если body имеет класс dark
            themeBtn.innerHTML = 'Светлая тема'; // меняем текст в кнопке на Светлая тема
        } else {
            themeBtn.innerHTML = 'Темная тема'; // Если класса нет, меняем текст Темная тема
        }
    });
}

// ///////////// Перестроение карточек ///////////////
/*
Задача:
1) Найти кнопку cube
2) Найти кнопку line
3) Найти элемент li с классом .about__list
4) При нажатии кнопки cube вешаем класс cube на елемент с классом .about__list и удаляем класс line если есть
5) При нажатии кнопки line вешаем класс line на елемент с классом .about__list и удаляем класс cube если есть
*/

const aboutList = document.querySelector('.about__list'),
    cubeBtn = document.querySelector('.about__cube'),
    lineBtn = document.querySelector('.about__line'),
    about = document.querySelector('.about');

if (cubeBtn) {
    cubeBtn.addEventListener('click', () => {
        if (aboutList.classList.contains('line')) {
            aboutList.classList.remove('line');
            aboutList.classList.add('cube');
        }
    });
}
if (lineBtn) {
    lineBtn.addEventListener('click', () => {
        if (aboutList.classList.contains('cube')) {
            aboutList.classList.remove('cube');
            aboutList.classList.add('line');
        }
    });
}
