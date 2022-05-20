

const swiper =()=>{

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".arrow-right",
          prevEl: ".arrow-left",
        },
        breakpoints: {
           
            768: {
              slidesPerView: 2,
              
            },
            1024: {
              slidesPerView: 3,
              
            },
          },
      });
}

export default swiper