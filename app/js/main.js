$(function () {

  $('.review__slider').slick({
    arrows: false,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
    pauseOnHover: true,
    centerMode: true,
    variableWidth: true,
  });
})

let subscribeBlock1 = document.querySelector('.subscribe__block-1');
let subscribeBlock2 = document.querySelector('.subscribe__block-2');
let subscribeBlock3 = document.querySelector('.subscribe__block-3');


function toggleTheme() {
  let closeBtn = document.querySelector('.header__btn');
  let footer = document.querySelector('.footer');
  let subscribe = document.querySelector('.main');
  
  
  let slideReview1 = document.querySelector('.review__block-1');
  let slideReview2 = document.querySelector('.review__block-2');
  let slideReview3 = document.querySelector('.review__block-3');

  closeBtn.addEventListener('click', function() {
    
    slideReview1.classList.toggle('review__block--bg-dark');
    slideReview2.classList.toggle('review__block--bg-dark');
    slideReview3.classList.toggle('review__block--bg-dark');
    subscribeBlock1.classList.toggle('subscribe__block--bg-dark');
    subscribeBlock2.classList.toggle('subscribe__block--bg-dark');
    subscribeBlock3.classList.toggle('subscribe__block--bg-dark');
    subscribe.classList.toggle('bg--black');
    footer.classList.toggle('bg--black');
  })
}

toggleTheme();








