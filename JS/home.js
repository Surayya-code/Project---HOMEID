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

  $(".carousel-icons").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 5,
      },
      1400: {
        items: 5,
      },
      1800: {
        items: 5,
      },
      1900: {
        items: 5,
        
      },
    },
  });
  
  //avartars
  $(".carousel-item-avatar").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
      1800: {
        items: 3,
      },
      1900: {
        items: 3,
        
      },
    },
  });
});

