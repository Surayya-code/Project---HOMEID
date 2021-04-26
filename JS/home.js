$(document).ready(function () {
  // $('.owl-carousel').owlCarousel({
  //     // loop:true,
  //     // margin:10,
  //     // nav:true,
  //     // singleItem:true,
  //     responsive:{
  //         0:{
  //             items:1
  //         },
  //         600:{
  //             items:3
  //         },
  //         1000:{
  //             items:5
  //         }

  //     },
  //     navigation : true, // Show next and prev buttons
  //     slideSpeed : 300,
  //     paginationSpeed : 400,
  //     singleItem: true
  //})
  $("#owl-demo").owlCarousel({
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,

    // "singleItem:true" is a shortcut for:
    items: 1,
    // itemsDesktop: false,
    // itemsDesktopSmall: false,
    // itemsTablet: false,
    // itemsMobile: false,
  });
});
