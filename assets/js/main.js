"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let burgerBtn = document.querySelector('.burger');
    let navMenu = document.querySelector('.nav');
    let header = document.querySelector('.header');

    openMenu(burgerBtn, navMenu, header);
});

function openMenu(btn, menu, headerElement) {
    btn.addEventListener('click', () => {
        if (menu.style.display === 'block') {
            // Закрываем меню
            menu.style.display = 'none';
            headerElement.style.position = '';
            headerElement.style.height = '';
            headerElement.style.zIndex = '';
            headerElement.style.background = '';
            headerElement.style.width = '';
        } else {
            // Открываем меню
            menu.style.display = 'block';
            headerElement.style.position = 'fixed';
            headerElement.style.height = '100vh';
            headerElement.style.zIndex = '10';
            headerElement.style.background = 'black';
            headerElement.style.width = '100%';
        }
    });
}
