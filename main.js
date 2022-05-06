const swiper = new Swiper('.swiper', {
    speed: 400,
    // spaceBetween: 100,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
      },
      autoplay: {
        delay: 5000,
      },
  });

 let header = document.querySelector('.header_glavnii');

//  document.addEventListener('DMMContentLoaded', () =>{
//      window.onscroll = function(e){
//          header.style.background = "#30080e";
//      }
//  })