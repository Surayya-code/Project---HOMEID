$(document).ready(function () {
  $(".mySlider").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        dots: true,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  
  $(".carousel-item").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 4,
      },
      1400: {
        items: 4,
      },
      1800: {
        items: 4,
      },
      1900: {
        items: 4,
        
      },
    },
  });
});
