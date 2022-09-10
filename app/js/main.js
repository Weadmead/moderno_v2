$(function () {

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });


  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  });
  

  
//sort by list
  $('.icon-th-list').on('click', function(){
    $('.new-item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active'); 
       
  });
  $('.icon-th-large').on('click', function(){
    $('.new-item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active'); 
  });

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
  
  $('.icon-th-list').on('click', function(){
    $('.product__item').addClass('list');
  });





});