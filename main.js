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
 let btn_broni = document.querySelector('.btn_broni');
 let ticking = false;
 let last_known_scroll_position = 0;

 document.addEventListener('scroll', function(e) {
    if(window.scrollY > last_known_scroll_position){
            header.style.background = "#30080e";
            btn_broni.style.border = "2px solid rgb(255, 255, 255)";
    }
    else{
        header.style.background = "linear-gradient(black, rgba(255, 0, 0, 0))";
            btn_broni.style.border = "none";
    }
    last_known_scroll_position = window.scrollY;
})