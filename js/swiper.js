var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 500,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });