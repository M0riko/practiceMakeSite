document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const container = body.querySelector('.container');
    const burger = container.querySelector('.burger');
    const nav = container.querySelector('nav');
    const close = container.querySelector('.close');
    const burgerLine = container.querySelector('.burger_line');
    container.addEventListener('click', (e) =>  {
        if(e.target === burger || e.target === burgerLine) {
            nav.classList.add('active');
            close.classList.remove('none')
            body.style.overflow = 'hidden';
        }

        if(e.target === close) {
            nav.classList.remove('active');
            close.classList.add('none')
            body.style.overflow = 'visible';
        }
        if (!nav.contains(e.target) && !(e.target.classList.contains('burger') || e.target.classList.contains('burger_line'))) {
            nav.classList.remove('active');
            close.classList.add('none')
            body.style.overflow = 'visible';
        }
    })
})



