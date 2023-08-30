document.addEventListener("DOMContentLoaded", function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const close = document.querySelector('.close');
    burger.addEventListener('click', () => {
        nav.classList.add('active');
        close.classList.remove('none')
    })
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        close.classList.add('none')
    })
});