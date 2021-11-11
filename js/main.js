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
let closeBtn = document.querySelector('.header__btn');
let footer = document.querySelector('.footer');
let subscribe = document.querySelector('.main');
let slideReview1 = document.querySelector('.review__block-1');
let slideReview2 = document.querySelector('.review__block-2');
let slideReview3 = document.querySelector('.review__block-3');



function toggleActiveBtn() {
  subscribeBlock1.addEventListener('click' , function() {
    subscribeBlock1.classList.add('subscribe__block--active');
    subscribeBlock2.classList.remove('subscribe__block--active');
    subscribeBlock3.classList.remove('subscribe__block--active');
  })

  subscribeBlock2.addEventListener('click' , function() {
    subscribeBlock2.classList.add('subscribe__block--active');
    subscribeBlock1.classList.remove('subscribe__block--active');
    subscribeBlock3.classList.remove('subscribe__block--active');
  })

  subscribeBlock3.addEventListener('click' , function() {
    subscribeBlock3.classList.add('subscribe__block--active');
    subscribeBlock2.classList.remove('subscribe__block--active');
    subscribeBlock1.classList.remove('subscribe__block--active');
  })


}



function toggleTheme() {
  

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
toggleActiveBtn()


function go() {
  var radios=document.getElementById("radios").getElementsByTagName("INPUT"),
      radio
  for (var i=0, L=radios.length; i<L; i++) {
      radio=radios[i]
      if (radio.checked) {window.open(href=radio.value); break}
  }
}



