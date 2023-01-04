const menu = document.querySelector('.header__menu');
const burger = document.querySelector('.burger');
const burgerClose = document.querySelector('.close');
const burgerItem = document.querySelector('.burger__item');
const burgerItem1 = document.querySelector('.burger__item1')
const burgerItem2 = document.querySelector('.burger__item2');
const burgerItem3 = document.querySelector('.burger__item3')
burger.addEventListener('click', () => {
    menu.classList.toggle('header__menu_active');
    burgerItem.classList.add('burger__item_active')
    burgerItem1.classList.toggle('burger__item1_active')
    burgerItem2.classList.toggle('burger__item_active2');
    burgerItem3.classList.toggle('burger__item_active3')
});

const header = document.querySelector('.header');
window.onscroll = () => {
    if (window.pageYOffset > 50) {
        header.classList.add('header_active')
    } else {
        header.classList.remove('header_active')
    }
}


// (function () {
//     const header = document.querySelector('.header');
//     window.onscroll = () => {
//         if (window.pageYOffset > 50) {
//             header.classList.add('header_active');
//         } else {
//             header.classList.remove('header_active');
//         }
//     };
// }());


AOS.init({
    // once: true
});

new Swiper('.slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 32,
    infinite: true
});


