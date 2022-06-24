$(function () {
  
  // range-slider
  $(".js-range-slider").ionRangeSlider({
    type: "double",    
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$"
  });

  //mixitup
  var mixer = mixitup('.products__inner-box');

  //star rating
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });

  //slider
  $('.product-slider__inner').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true
  });



});