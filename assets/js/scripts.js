//   all ------------------
function initParadoxWay() {
  "use strict";

  if ($(".testimonials-carousel").length > 0) {
    var j2 = new Swiper(".testimonials-carousel .swiper-container", {
      preloadImages: false,
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      grabCursor: true,
      mousewheel: false,
      centeredSlides: true,
      breakpoints: {
        1024: {
          slidesPerView: 6,
        },
      },
    });
  }

  // bubbles -----------------

  setInterval(function () {
    var size = randomValue(sArray);
    $(".bubbles").append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + "px; width: " + size + "px; height:" + size + 'px;"></div>');
    $(".individual-bubble").animate(
      {
        bottom: "100%",
        opacity: "-=0.7",
      },
      4000,
      function () {
        $(this).remove();
      }
    );
  }, 3050);
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});
